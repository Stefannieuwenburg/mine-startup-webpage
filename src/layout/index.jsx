import Navbar from "../componets/navbar";
import Footer from "../componets/footer";

const Layout = ({ children }) => {
  return (
    <>
        <Navbar />
        <div>{children}</div>
        <Footer />
    </>
  );
};
export default Layout;
