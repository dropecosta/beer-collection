import Link from "next/link";

const Footer = () => (
  <footer className='footer__container'>
    <div className='footer__content'>
      <p>@2023 - Powered by Punk API</p>

      <div className="footer__signature">
        <p>
          Developed with 🧡 by &nbsp;
          <Link href="https://www.linkedin.com/in/dropecosta/" target="_blank" className="footer__signature-link">
           Pedro Reis
          </Link>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;