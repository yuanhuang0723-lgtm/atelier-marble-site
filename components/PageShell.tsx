import { Suspense } from "react";
import FooterVisibilityTracker from "./FooterVisibilityTracker";
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
      <FooterVisibilityTracker />
      <Nav />
      {children}
      <WhatsAppButton />
      <Footer />
    </>
  );
}
