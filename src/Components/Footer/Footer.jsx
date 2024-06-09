import "./Footer.scss";
import insta from "../../Assets/images/link.png";
function Footer() {
  return (
    <footer className="footer">
      <ul className="footer__list">
        <li className="footer__head">Newsletter</li>
        <li className="footer__item">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit amet.
        </li>
        <br />
        <li className="footer__btns">
          <a href="#">
            <img src={insta} alt="noPhoto" />
          </a>
          <a href="#">
            <img src={insta} alt="noPhoto" />
          </a>
          <a href="#">
            <img src={insta} alt="noPhoto" />
          </a>
        </li>
      </ul>
      <ul className="footer__list">
        <li className="footer__head">Marketplace</li>
        <li className="footer__item">
          <a href="#">All NFTs</a>
        </li>
        <li className="footer__item">
          <a href="#">Art</a>
        </li>
        <li className="footer__item">
          <a href="#">Music</a>
        </li>
        <li className="footer__item">
          <a href="#">Domain Names</a>
        </li>
      </ul>
      <ul className="footer__list">
        <li className="footer__head">Resources</li>
        <li className="footer__item">
          <a href="#">Home</a>
        </li>
        <li className="footer__item">
          <a href="#">Partners</a>
        </li>
        <li className="footer__item">
          <a href="#">Suggestions</a>
        </li>
        <li className="footer__item">
          <a href="#">Discord</a>
        </li>
      </ul>
      <ul className="footer__list">
        <li className="footer__head">Join Our Newsletter</li>
        <li className="footer__item">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit amet.Lorem
          ipsum dolor sit amet, consectetur.
        </li>
        <li className="footer__inputs">
          <input
            className="footer__input"
            type="email"
            placeholder="Enter Email..."
          />{" "}
          <a className="footer__btn">send</a>
        </li>
      </ul>
    </footer>
  );
}
export default Footer;
