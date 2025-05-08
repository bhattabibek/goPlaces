import "./App.css";
import DestinationCard from "./components/DestinationCard";
import Navbar from "./components/Navbar";
import AutoPlay from "./components/Slider";




function App() {
  return (
    <>
  <Navbar/>

  <AutoPlay/>
  <div className="mt-60">
  <DestinationCard />
</div>
  </>

  )
  
}

export default App;
