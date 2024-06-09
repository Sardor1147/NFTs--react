import "./Widget.scss";

import image1 from "../../Assets/images/image1.png";
import image2 from "../../Assets/images/image2.png";
import image3 from "../../Assets/images/image3.png";
import image4 from "../../Assets/images/image4.png";
import file from "../../Assets/images/file.png";
import wallet from "../../Assets/images/wallet.png";
import coin from "../../Assets/images/coin.png";
import eye from "../../Assets/images/eye.svg";

export function Widget() {
  return (
    <div className="widget">
      <div className="widget__heads">
        <h2 className="widget__head">Learn History</h2>
        <p className="widget__txt">
          Lorem ipsum dolor sit amet, consectet adipisc elit amet.
        </p>
        <a href="#" className="widget__btn">
          See More
        </a>
      </div>
      <div className="widget__images">
        <img src={image1} alt="image" className="widget__img1" />
        <div>
          <img src={image2} alt="image" className="widget__img" /> <br />
          <span className="widget__eyes">
            <img src={eye} alt="image" className="widget__eye" /> 17,512 Views
          </span>
        </div>
        <div>
          <img src={image3} alt="image" className="widget__img" /> <br />
          <span className="widget__eyes">
            <img src={eye} alt="image" className="widget__eye" /> 17,512 Views
          </span>
        </div>
        <div>
          <img src={image4} alt="image" className="widget__img2" /> <br />
          <span className="widget__eyes">
            <img src={eye} alt="image" className="widget__eye" />
          </span>
        </div>
      </div>
      <div className="widget__part">
        <h2 className="widget__part--head">Create And Sell Your NFTS</h2>
        <ul className="widget__list">
          <li className="widget__item">
            <img src={file} alt="image" className="widget__item--img" />
            <br />
            <h3 className="widget__item--head">Set Up Your Wallet</h3>
            <p className="widget__item--txt">
              Lorem ipsum dolor sit amet, consectet adipisc elit amet. Lorem
              ipsum dolor sit amet, consectet adipisc.
            </p>
          </li>
          <li className="widget__item1">
            <img className="widget__item--img" src={wallet} alt="image" />{" "}
            <h3 className="widget__item--head">Create Your Collection</h3>{" "}
            <p className="widget__item--txt">
              Lorem ipsum dolor sit amet, consectet adipisc elit amet. Lorem
              ipsum dolor sit amet, consectet adipisc.
            </p>
          </li>
          <li className="widget__item">
            <img className="widget__item--img" src={coin} alt="image" />{" "}
            <h3 className="widget__item--head">Add Your NFTs</h3>{" "}
            <p className="widget__item--txt">
              Lorem ipsum dolor sit amet, consectet adipisc elit amet. Lorem
              ipsum dolor sit amet, consectet adipisc.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
