import { useState } from "react";
import { X } from "lucide-react";
import { supabase } from "@/lib/supabase";

type Tab = "signin" | "signup";

interface AuthModalProps {
  onClose: () => void;
}

const AuthModal = ({ onClose }: AuthModalProps) => {
  const [tab, setTab] = useState<Tab>("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const reset = () => {
    setError(null);
    setSuccessMsg(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    reset();

    try {
      if (tab === "signup") {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        setSuccessMsg("Check your email to confirm your account.");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        onClose();
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-md px-4"
      onClick={onClose}
    >
      <div
        className="relative bg-background w-full max-w-md p-12 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X size={16} strokeWidth={1} />
        </button>

        {/* Tabs */}
        <div className="flex gap-8 mb-10">
          {(["signin", "signup"] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => { setTab(t); reset(); }}
              className={`editorial-label pb-1 border-b transition-colors ${
                tab === t
                  ? "border-foreground text-foreground"
                  : "border-transparent hover:text-foreground"
              }`}
            >
              {t === "signin" ? "Sign In" : "Sign Up"}
            </button>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="editorial-label text-[10px]" htmlFor="auth-email">
              Email
            </label>
            <input
              id="auth-email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2 text-sm font-light text-foreground placeholder:text-muted-foreground transition-colors"
              placeholder="your@email.com"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="editorial-label text-[10px]" htmlFor="auth-password">
              Password
            </label>
            <input
              id="auth-password"
              type="password"
              required
              autoComplete={tab === "signup" ? "new-password" : "current-password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2 text-sm font-light text-foreground placeholder:text-muted-foreground transition-colors"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="text-xs font-light text-red-500 leading-relaxed">{error}</p>
          )}
          {successMsg && (
            <p className="text-xs font-light text-muted-foreground leading-relaxed">{successMsg}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full border border-foreground py-3 editorial-label text-foreground hover:bg-foreground hover:text-background transition-all duration-300 disabled:opacity-50"
          >
            {loading ? "Please wait…" : "Continue"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;
