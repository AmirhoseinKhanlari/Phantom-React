import logo from "./logo.svg";
import Header from "./Components/Header/Header";
import Intro from "./Components/Intro/Intro";
import ChromeIntro from "./Components/ChromeIntro/ChromeIntro";
import Features from "./Components/Features/Features";
import Ethereum from "./Components/Ethereum/Ethereum";
import Browsers from "./Components/Browsers/Browsers";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="bg-[#2c2d30]">
      <Header />
      <main>
        <Intro />
        <ChromeIntro />
        <Features />
        <Ethereum />
        <Browsers />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
