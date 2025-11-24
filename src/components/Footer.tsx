export default function Footer() {
  return (
    <footer>
      <div className="top-footer">
        <p>Andrei .</p>
      </div>
      <div className="middle-footer">
        <ul className="footer-menu">
          <li className="footer_menu_list">
            <a href="#home">Home</a>
          </li>
          <li className="footer_menu_list">
            <a href="#about">About</a>
          </li>
          <li className="footer_menu_list">
            <a href="#projects">Projects</a>
          </li>
          <li className="footer_menu_list">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="footer-social-icons">
        <div className="icon">
          <a href="https://www.instagram.com/andreichindris17/" target="_blank" rel="noreferrer">
            <i className="uil uil-instagram"></i>
          </a>
        </div>
        <div className="icon">
          <a
            href="https://www.linkedin.com/in/andrei-chindri%C8%99-97b931382/?trk=opento_sprofile_topcard"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-linkedin-alt"></i>
          </a>
        </div>
        <div className="icon">
          <a href="https://dribbble.com/andrei-chindris" target="_blank" rel="noreferrer">
            <i className="uil uil-dribbble"></i>
          </a>
        </div>
        <div className="icon">
          <a href="https://github.com/Andrei1loc1" target="_blank" rel="noreferrer">
            <i className="uil uil-github-alt"></i>
          </a>
        </div>
      </div>
      <div className="bottom-footer">
        <p>
          Copyright &copy;{' '}
          <a href="#home" style={{ textDecoration: 'none' }}>
            Andrei
          </a>{' '}
          - All rights reserved
        </p>
      </div>
    </footer>
  );
}
