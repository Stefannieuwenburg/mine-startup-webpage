import Layout from "./componets/layout/index";
import Hero from "./pages/hero/index";
import Video from "./pages/video/index";
import Service from "../src/pages/services/index";
import Contact from "../src/pages/contact/index";


const App = () => {
  return (
    <>
      <Layout>
        <Hero />
        <Video />
        <Service />
        <Contact />
      </Layout>
    </>
  );
};

export default App;
