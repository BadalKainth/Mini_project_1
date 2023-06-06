import "./Footer.css";
import Logo1 from "./assets/InstagramLogo.png";
import Logo2 from "./assets/LinkedinLogo.png";

function Footer() {
  return (
    <footer>
      <div className="container-footer">
        <div className="link-list">
          <p>Prompt Generator</p>
          <p>Dweep Daily</p>
          <p>All Contributors</p>
          <p>Your data on Dweep.io</p>
          <p>Contribute to Dweep</p>
        </div>
        <div className="fav-icons">
          <div>
            <p>Dweep.io</p>
            <p>Made with love in India</p>
            <div className="logos">
              <img id="logo" src={Logo1} alt="InstagramLogo" />
              <img id="logo" src={Logo2} alt="LinkedinLogo" />
            </div>
          </div>
          <div>
            <p>hello@dweep.io</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
