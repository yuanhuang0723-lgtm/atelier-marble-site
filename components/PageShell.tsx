import { Suspense } from "react";
import PageviewTracker from "./PageviewTracker";
import ConversionTracker from "./ConversionTracker";
import Footer from "./Footer";
import Nav from "./Nav";
import WhatsAppButton from "./WhatsAppButton";

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Suspense fallback={null}>
        <PageviewTracker />
      </Suspense>
      <ConversionTracker />
      <Nav />
      {children}
      <WhatsAppButton />
      <Footer />
    </>
  );
}
