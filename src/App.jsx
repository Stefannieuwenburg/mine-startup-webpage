import Layout from "./layout/index";
import Hero from "./pages/hero/index";
import Video from "./pages/video/index";
import Service from "./pages/Specialiteit/index";
import Contact from "../src/pages/contact/index";
import Info from "../src/pages/info/index"; 

const App = () => {
  return (
    <>
      <Layout>
        <Hero />
        <Video />
        <Service />
        <Contact />
        <Info />
      </Layout>
     
    </>
  );
};

export default App;
