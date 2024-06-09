import "./Hero.scss";
import video from "../../Assets/images/video.svg";
import tab from "../../Assets/images/tab.png";
import cat from "../../Assets/images/cat.png";
import face from "../../Assets/images/face.png";
import faceRed from "../../Assets/images/face-red.png";
import skelet from "../../Assets/images/skelet.png";
import space from "../../Assets/images/space.svg";

export function Hero() {
  return (
    <div className="hero">
      <div className="hero__content">
        <h1 className="hero__head">
          Buy and Sell Digital Art,
          <span className="hero__span"> NFT</span> Collection
        </h1>
        <p className="hero__txt">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          iusto! Quisquam nihil vitae sunt dolores.
        </p>
        <div className="hero__btns">
          <a href="#" className="hero__explore">
            explore
          </a>
          <a href="#" className="hero__video">
            <img src={video} alt="video" className="hero__video--img" /> Watch
            Video
          </a>
          <img className="hero__tab" src={tab} alt="tab" />
        </div>
      </div>

      <div className="hero__images">
        <ul className="hero__list1">
          <span className="hero__dot">.</span>
          <img src={cat} alt="image" className="hero__cat" />
          <img src={space} alt="image" className="hero__space" />
          <img className="hero__skelet" src={skelet} alt="image" />
        </ul>
        <br />
        <ul className="hero__list2">
          <img src={face} alt="image" className="hero__face" />
          <img src={faceRed} alt="image" className="hero__face--red" />
        </ul>
      </div>
    </div>
  );
}
