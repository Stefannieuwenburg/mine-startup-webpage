import Navbar from "../navbar";
import Footer from "../footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
