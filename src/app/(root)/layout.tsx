import Header from "@/components/layout/Header/page";
import Footer from "@/components/layout/Footer/page";

export default function RootLayout({ children }) {
  
  return (
    <main>
        <Header />
        {children}
        <Footer />
    </main>
  );
}
