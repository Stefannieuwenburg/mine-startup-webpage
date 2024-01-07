import Navbar from "../componets/navbar";
import Footer from "../componets/footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="scroll-smooth duration-700">{children}</div>
      <Footer />
    </>
  );
};
export default Layout;
