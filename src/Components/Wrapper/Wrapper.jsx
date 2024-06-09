import "./Wrapper.scss";
import space from "../../Assets/images/space.png";
import bubble from "../../Assets/images/bubble.png";
import admin from "../../Assets/images/admin.png";
import share from "../../Assets/images/share.png";
import dog from "../../Assets/images/dog.png";
import glass from "../../Assets/images/glass.png";

export default function Wrapper() {
  return (
    <div className="wrapper">
      <h5 className="wrapper__head">Our Latest Blog</h5>
      <ul className="wrapper__list">
        <li className="wrapper__item">
          <img src={space} alt="noPhoto" className="wrapper__img" />
          <div className="wrapper__part">
            <a href="#" className="wrapper__admin">
              <img src={admin} alt="noPhoto" className="wrapper__admin--img" />
              Admin
            </a>
            <date className="wrapper__date">12 May 2022</date>
            <br />
          </div>
          <h5 className="wrapper__item--head">Homeland Supplier Corporation</h5>

          <p className="wrapper__item--txt">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit amet. Lorem
            ipsum dolor sit amet.
          </p>

          <div className="wrapper__buttons">
            <a href="#" className="wrapper__read">
              Read More
            </a>{" "}
            <a href="#" className="wrapper__com">
              <img src={bubble} alt="noPhoto" className="wrapper__com" />
            </a>
            <a href="#">
              <img src={share} alt="noPhoto" />
            </a>
          </div>
        </li>
        <li className="wrapper__item">
          <img src={glass} alt="noPhoto" className="wrapper__img" />
          <div className="wrapper__part">
            <a href="#" className="wrapper__admin">
              <img src={admin} alt="noPhoto" className="wrapper__admin--img" />
              Admin
            </a>
            <date className="wrapper__date">12 May 2022</date>
            <br />
          </div>
          <h5 className="wrapper__item--head">Homeland Supplier Corporation</h5>

          <p className="wrapper__item--txt">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit amet. Lorem
            ipsum dolor sit amet.
          </p>

          <div className="wrapper__buttons">
            <a href="#" className="wrapper__read">
              Read More
            </a>{" "}
            <a href="#" className="wrapper__com">
              <img src={bubble} alt="noPhoto" className="wrapper__com" />
            </a>
            <a href="#">
              <img src={share} alt="noPhoto" />
            </a>
          </div>
        </li>
        <li className="wrapper__item">
          <img src={dog} alt="noPhoto" className="wrapper__img" />
          <div className="wrapper__part">
            <a href="#" className="wrapper__admin">
              <img src={admin} alt="noPhoto" className="wrapper__admin--img" />
              Admin
            </a>
            <date className="wrapper__date">12 May 2022</date>
            <br />
          </div>
          <h5 className="wrapper__item--head">Homeland Supplier Corporation</h5>

          <p className="wrapper__item--txt">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit amet. Lorem
            ipsum dolor sit amet.
          </p>

          <div className="wrapper__buttons">
            <a href="#" className="wrapper__read">
              Read More
            </a>{" "}
            <a href="#" className="wrapper__com">
              <img src={bubble} alt="noPhoto" className="wrapper__com" />
            </a>
            <a href="#">
              <img src={share} alt="noPhoto" />
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}
