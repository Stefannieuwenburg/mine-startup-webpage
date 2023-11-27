import Navbar from "../navbar";
import Footer from "../footer";

const Layout =  ({ children }) =>{
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="layout flex-grow container mx-auto px-2 sm:px-6">{children}</main>
      <Footer />
    </div>
  );
}
export default Layout;
