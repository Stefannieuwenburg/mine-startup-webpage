import Layout from "./componets/layout/index";
import Hearder from "./pages/header/index";
import About from "../src/pages/about/index";
import Team from "../src/pages/team/index";
import Service from "../src/pages/services/index";
import Contact from "../src/pages/contact/index";
const App = () => {
  return (
    <>
      <Layout>
        <Hearder />
        <About />
        <Team />
        <Service />
        <Contact />
      </Layout>
    </>
  );
};

export default App;
