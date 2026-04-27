import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

const IMAGE_EXTS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

function galleryManifestPlugin(): Plugin {
  const galleryDir = path.resolve(__dirname, "public/gallery");
  const manifestPath = path.resolve(__dirname, "public/gallery-manifest.json");

  const writeManifest = () => {
    if (!fs.existsSync(galleryDir)) {
      fs.mkdirSync(galleryDir, { recursive: true });
    }
    const files = fs
      .readdirSync(galleryDir)
      .filter((f) => IMAGE_EXTS.has(path.extname(f).toLowerCase()))
      .sort()
      .map((f) => `/gallery/${f}`);
    fs.writeFileSync(manifestPath, JSON.stringify(files, null, 2));
  };

  return {
    name: "gallery-manifest",
    buildStart() {
      writeManifest();
    },
    configureServer(server) {
      writeManifest();
      server.watcher.add(galleryDir);
      server.watcher.on("all", (event, filePath) => {
        if (
          filePath.startsWith(galleryDir) &&
          IMAGE_EXTS.has(path.extname(filePath).toLowerCase())
        ) {
          writeManifest();
          server.ws.send({ type: "full-reload" });
        }
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    galleryManifestPlugin(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
