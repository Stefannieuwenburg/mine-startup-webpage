import Navbar from "../componets/navbar";
import Footer from "../componets/footer";

const Layout = ({ children }) => {
  return (
    <>
      <body className="min-h-screen">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </>
  );
};
export default Layout;
