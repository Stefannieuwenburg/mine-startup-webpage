import Navbar from "../componets/navbar";
import Footer from "../componets/footer";

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
