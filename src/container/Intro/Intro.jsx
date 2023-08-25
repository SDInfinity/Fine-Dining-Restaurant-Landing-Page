import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";
import "./Intro.css";
import { useRef, useState } from "react";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);

  const vidRef = useRef(null);

  function handleVideo() {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);
    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  }

  return (
    <section className="app__video">
      <video
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
        ref={vidRef}
      ></video>
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handleVideo}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Intro;
