import "./Top.scss";
import rediamond from "../../Assets/images/rediamond.png";
import image121 from "../../Assets/images/image121.png";
import image117 from "../../Assets/images/image117.png";
import imagefox from "../../Assets/images/imagefox.png";
import smokey from "../../Assets/images/smokey.png";
import image119 from "../../Assets/images/image119.png";
import image128 from "../../Assets/images/image128.png";
import image123 from "../../Assets/images/image123.png";
import image126 from "../../Assets/images/image126.png";
import ripon from "../../Assets/images/riponahmed.png";
import jalal from "../../Assets/images/jalal.png";
import jalal2 from "../../Assets/images/jalal2.png";
import mukter from "../../Assets/images/mukter.png";
import samiya from "../../Assets/images/samiya.png";
import sofiya from "../../Assets/images/sofiya.png";

export default function Top() {
  return (
    <div className="top">
      <h3 className="top__head">Top Galleries</h3>
      <ul className="top__list">
        <li className="top__item">
          <div className="top__images--wrapper">
            <img src={rediamond} alt="no image" className="top__img1" />
            <div className="top__images">
              <img src={image121} alt="noImage" className="top__img2" /> <br />
              <img src={image117} alt="noImage" className="top__img2" /> <br />
              <img src={imagefox} alt="noImage" className="top__img3" />{" "}
              <span className="top__move">+60</span>
            </div>
          </div>
          <div className="top__content--wrapper">
            <div className="top__content">
              <h4 className="top__item--head">Vactor Abstract Character</h4>
              <span>Gallery</span>
            </div>
            <a href="#" className="top__arrow">
              &rarr;
            </a>
          </div>
        </li>
        <li className="top__item">
          <div className="top__images--wrapper">
            <img src={smokey} alt="no image" className="top__img1" />
            <div className="top__images">
              <img src={image119} alt="noImage" className="top__img2" /> <br />
              <img src={imagefox} alt="noImage" className="top__img2" /> <br />
              <img src={image123} alt="noImage" className="top__img3" />{" "}
              <span className="top__move">+36</span>
            </div>
          </div>
          <div className="top__content--wrapper">
            <div className="top__content">
              <h4 className="top__item--head">Amazing Character</h4>
              <span>Gallery</span>
            </div>
            <a href="#" className="top__arrow">
              &rarr;
            </a>
          </div>
        </li>
        <li className="top__item">
          <div className="top__images--wrapper">
            <img src={image128} alt="no image" className="top__img1" />
            <div className="top__images">
              <img src={image123} alt="noImage" className="top__img2" /> <br />
              <img src={image126} alt="noImage" className="top__img2" /> <br />
              <img src={image117} alt="noImage" className="top__img3" />{" "}
              <span className="top__move">+20</span>
            </div>
          </div>
          <div className="top__content--wrapper">
            <div className="top__content">
              <h4 className="top__item--head">Vactor Abstract Character</h4>
              <span>Gallery</span>
            </div>
            <a href="#" className="top__arrow">
              &rarr;
            </a>
          </div>
        </li>
      </ul>
      <a href="#" className="top__btn">
        See All
      </a>
      <h4 className="top__head">Top Sellers</h4>
      <ul className="top__list1">
        <li className="top__item1">
          <img src={ripon} alt="noPhoto" className="top__item1--img" />
          <div className="top__item1--cont">
            <h5 className="top__item1--head">Riponahmed001</h5>
            <span className="top__item1--span">40 artworks</span>
          </div>
        </li>
        <li className="top__item1">
          <img src={mukter} alt="noPhoto" className="top__item1--img" />
          <div className="top__item1--cont">
            <h5 className="top__item1--head">Mukterhossain</h5>
            <span className="top__item1--span">40 artworks</span>
          </div>
        </li>
        <li className="top__item1">
          <img src={jalal} alt="noPhoto" className="top__item1--img" />
          <div className="top__item1--cont">
            <h5 className="top__item1--head">Jalalahmed12</h5>
            <span className="top__item1--span">40 artworks</span>
          </div>
        </li>
        <li className="top__item1">
          <img src={sofiya} alt="noPhoto" className="top__item1--img" />
          <div className="top__item1--cont">
            <h5 className="top__item1--head">Sofiyakhan54</h5>
            <span className="top__item1--span">40 artworks</span>
          </div>
        </li>
        <li className="top__item1">
          <img src={jalal2} alt="noPhoto" className="top__item1--img" />
          <div className="top__item1--cont">
            <h5 className="top__item1--head">Jalalahmed12</h5>
            <span className="top__item1--span">40 artworks</span>
          </div>
        </li>
        <li className="top__item1">
          <img src={samiya} alt="noPhoto" className="top__item1--img" />
          <div className="top__item1--cont">
            <h5 className="top__item1--head">Samiya0321</h5>
            <span className="top__item1--span">40 artworks</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
