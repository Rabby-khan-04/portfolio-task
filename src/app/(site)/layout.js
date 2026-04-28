import Footer from "@/component/shared/Footer";
import Navbar from "@/component/shared/Navbar/Navbar";

export default function HomeLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
