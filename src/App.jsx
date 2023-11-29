import Layout from "./componets/layout/index";
import Hearder from "./pages/header/index";
import About from "../src/pages/about/index";
import Video from "./pages/video/index";
import Service from "../src/pages/services/index";
import Contact from "../src/pages/contact/index";

const App = () => {
  return (
    <>
      <Layout>
        <About />
        <Hearder />
        <Video />
        <Service />
        <Contact />
      </Layout>
    </>
  );
};

export default App;
