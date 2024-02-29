import "./App.css";

import Home from "./page/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Location from "./page/Location";
import About from "./page/About";
// import FestXsvce from "./components/BottomText";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import bg from "./assets/images/background/img-1.png";
// import AnimatedCursor from "react-animated-cursor";
import { useEffect, useState } from "react";
import Sponsers from "./page/Sponsers";
import ReactGA from "react-ga";
import Footer from "./components/Footer";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/location",
    element: (
      <>
        <Location />
        <Footer />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <About />
        <Footer />
      </>
    ),
  },
  {
    path: "/sponsors",
    element: (
      <>
        <Sponsers />,
        <Footer />
      </>
    ),
  },
  
]);

function App() {
  // const AnimatedCursorMemo = React.memo(AnimatedCursor);
  // const [screenWidth, setScreenWidth] = useState<number>(0);
  // useEffect(() => {
  //   setScreenWidth(window.innerWidth);
  //   window.addEventListener("resize", () => {
  //     setScreenWidth(window.innerWidth);
  //   });
  // }, []);

  return (
    <>
      {/* {screenWidth > 770 ? (
        <AnimatedCursorMemo
          innerSize={5}
          outerSize={30}
          innerScale={0}
          outerScale={2}
          outerStyle={{
            mixBlendMode: "difference",
            // backgroundColor: "#4d291a90",
            backgroundColor: "#d0c19c",
          }}
          innerStyle={{
            backgroundColor: "white",
            mixBlendMode: "difference",
          }}
        />
      ) : null} */}
      <div className="background-container">
        <img src={bg} alt="Background Image" className="background-image" />
      </div>
      <ToastContainer position="top-center" theme="dark" />
      <RouterProvider router={router} />
      {/* <FestXsvce /> */}
    </>
  );
}

export default App;
