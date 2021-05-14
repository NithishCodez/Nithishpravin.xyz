import "./App.css";
import { useState, useEffect } from "react";
import background from "./imgs/bg.jpg";
import githublogo from "./imgs/github-logo.png";
import youtubelogo from "./imgs/youtube-logo.png";
import { AiFillWindows } from "react-icons/ai";
import Loader from "./components/loader";
import Slide from "react-reveal/Slide";

function App() {
  const [loading, setLoading] = useState(true);
  const [dock, setdock] = useState(false);
  const [pressed, setpressed] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 7000);
  }, []);

  return <div>{loading ? <Loading /> : <Desktop />}</div>;

  function Loading() {
    return (
      <div className={"Boot"}>
        <AiFillWindows className={"WindowsLogo"} />
        <Loader />
        <h1 className={"BootHead"}>Starting Windows</h1>
      </div>
    );
  }

  function Desktop() {
    return (
      <div>
        <div
          className={"Desktop"}
          style={{
            backgroundImage: `url(${background})`,
            position: "fixed",
            height: "100%",
            width: "100%",
            backgroundSize: "cover",
            filter: "brightness(60%)",
            zIndex: -1000,
          }}
        />
        <br/>
        <br/>
        <div className={"desktop-icons"}>
          <img className={"desktop-icons-img"} src="https://yt3.ggpht.com/ytc/AAUvwnincpDjG4tyCwxQv7CeAKR2eG-FARj8waOQ4bvR=s88-c-k-c0x00ffffff-no-rj"/>
          <p className={"desktop-icons-title noselect"}>About Me</p>
        </div>
        <br/>
        <div className={"desktop-icons"}>
          <img className={"desktop-icons-img"} src={githublogo}/>
          <p className={"desktop-icons-title noselect"}>Github</p>
        </div>  
        <br/>
        <div className={"desktop-icons"}>
          <img className={"desktop-icons-img"} src={youtubelogo}/>
          <p className={"desktop-icons-title noselect"}>Youtube</p>
        </div> 
        {dock ? (
          <Slide bottom>
            <div className={"startPanel"}></div>
          </Slide>
        ) : (
          <Slide top when={pressed}>
            <div className={"startPanel-close"}></div>
          </Slide>
        )}
        <div className={"taskbar"}>
          <AiFillWindows
            className={"windowsStart"}
            onClick={() => {
              setdock(!dock)
            }}
          />
        </div>
      </div>
    );
  }
}

export default App;
