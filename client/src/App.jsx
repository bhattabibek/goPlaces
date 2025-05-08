import "./App.css";
import DestinationCard from "./components/DestinationCard";
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
<Parallax/>
  </>

  )
  
}

export default App;
