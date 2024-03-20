import Header from "./components/header";
import Cover from "./components/cover";
import Catalog from "./components/catalog";
import AboutBlock from "./components/UI/organism/about-block";
import Quiz from "./components/quiz";
import Team from "./components/team";
import FAQ from "./components/faq";
import Footer from "./components/footer";
import {Counter} from "./components/some";

function App() {
  return (
    <>
      <Header />
      <Cover />
      <Catalog />
      <AboutBlock />
      <Quiz />
      <Team />
      <FAQ />
      <Counter />
      <Footer />

    </>
  )
}

export default App
