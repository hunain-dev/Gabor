import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react"; // Import useState and useEffect
import Home from "./Components/pages/Home/Home";
import LocomotiveScroll from "locomotive-scroll";
import Aboutus from "./Components/pages/Aboutus/Aboutus";
import Loader from "./Components/Loader/Loader";

const App = () => {
  const [isLoading, setIsLoading] = useState(true); 
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <div className="main">
      {isLoading && <Loader setIsLoading={setIsLoading} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aboutus" element={<Aboutus />} />
      </Routes>
    </div>
  );
};

export default App;
