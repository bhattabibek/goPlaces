import "./App.css";
import Activities from "./components/Activities";
import DestinationCard from "./components/DestinationCard";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Parallax from "./components/Parallax";
import AutoPlay from "./components/Slider";




function App() {
  return (
    <>
  <Navbar/>

  <AutoPlay/>
  <div className="mt-60 md:mt-140 lg:mt-180 xl:mt-230">
  <DestinationCard />
</div>
<Activities/>
<Parallax/>
<Footer/>
  </>

  )
  
}

export default App;
