import Navbar from "../componets/navbar";
//import Footer from "../componets/footer";

const Layout = ({ children }) => {
  return (
    <>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main>{children}</main>
        
      </body>
    </>
  );
};
export default Layout;
