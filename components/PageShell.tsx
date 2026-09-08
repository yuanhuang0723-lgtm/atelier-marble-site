import { Suspense } from "react";
import FooterVisibilityTracker from "./FooterVisibilityTracker";
import PageviewTracker from "./PageviewTracker";
import ConversionTracker from "./ConversionTracker";
import Footer from "./Footer";
import Nav from "./Nav";
import WhatsAppButton from "./WhatsAppButton";

export default function PageShell({ children, locale = "en" }: { children: React.ReactNode; locale?: "en" | "zh" }) {
  return (
    <>
      <Suspense fallback={null}>
        <PageviewTracker />
      </Suspense>
      <ConversionTracker />
      <FooterVisibilityTracker />
      <Nav locale={locale} />
      {children}
      <WhatsAppButton />
      <Footer locale={locale} />
    </>
  );
}
