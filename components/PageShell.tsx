import ConversionTracker from "./ConversionTracker";
import Footer from "./Footer";
import Nav from "./Nav";
import WhatsAppButton from "./WhatsAppButton";

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ConversionTracker />
      <Nav />
      {children}
      <WhatsAppButton />
      <Footer />
    </>
  );
}
