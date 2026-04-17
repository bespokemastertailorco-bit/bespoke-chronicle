import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";
import { WaitingListProvider } from "@/context/WaitingListContext";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import OurStory from "./pages/OurStory.tsx";
import Creations from "./pages/Creations.tsx";
import ExclusiveFabrics from "./pages/ExclusiveFabrics.tsx";
import ExclusivePalette from "./pages/ExclusivePalette.tsx";
import Contact from "./pages/Contact.tsx";
import Manufacturing from "./pages/Manufacturing.tsx";
import Collections from "./pages/Collections.tsx";
import Product from "./pages/Product.tsx";
import BookAppointment from "./pages/BookAppointment.tsx";
import Location from "./pages/Location.tsx";
import Search from "./pages/Search.tsx";
import Cart from "./pages/Cart.tsx";
import Checkout from "./pages/Checkout.tsx";
import Terms from "./pages/Terms.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import ShippingPolicy from "./pages/ShippingPolicy.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <CartProvider>
        <WaitingListProvider>
          <TooltipProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/our-story" element={<OurStory />} />
                <Route path="/creations" element={<Creations />} />
                <Route path="/exclusive-fabrics" element={<ExclusiveFabrics />} />
                <Route path="/exclusive-palette" element={<ExclusivePalette />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/manufacturing" element={<Manufacturing />} />
                <Route path="/collections" element={<Collections />} />
                <Route path="/collections/:collectionId" element={<Collections />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/book-appointment" element={<BookAppointment />} />
                <Route path="/locations/:city" element={<Location />} />
                <Route path="/search" element={<Search />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/shipping-policy" element={<ShippingPolicy />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
            <Toaster />
            <Sonner position="top-center" richColors />
          </TooltipProvider>
        </WaitingListProvider>
      </CartProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
