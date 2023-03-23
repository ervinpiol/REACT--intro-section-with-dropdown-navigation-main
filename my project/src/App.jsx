import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App max-w-[1440px] w-full h-full mx-auto">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
