import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Image from "./components/Image";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";

export default function App() {
  return (
    <div id="content">
      <Header />
      <Navigation />
      <main>
        <Main />
        <Image />
      </main>
      <Footer />
    </div>
  );
}