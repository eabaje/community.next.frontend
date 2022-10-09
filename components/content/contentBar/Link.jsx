import "../../../styles/link.module.css";

export default function ContentLink({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    // <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="contentbar navbar-nav m-auto text-sm-center text-md-center">
      {/* <li className="nav-item">
        <a className="nav-link" href="#home">
          <span className="icon">
            <i className="fa-paper-plane"></i>
          </span>{" "}
          <span className="menu-title"> My Timeline</span>
        </a>
      </li> */}

      <li className="nav-item">
        <a className="nav-link" href="#about">
          <span className="icon">
            <i className="flaticon-user"></i>
          </span>
          <span className="menu-title"> Find Maternal Links</span>
        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="#about">
          <span className="icon">
            <i className="flaticon-user"></i>
          </span>
          <span className="menu-title"> Find Paternal Links</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#price">
          <span className="icon">
            <i className="flaticon-user"></i>
          </span>
          <span className="menu-title"> Find Spousal Links</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#testimonial">
          <span className="icon">
            <i className="flaticon-user"></i>
          </span>
          <span className="menu-title"> Connect with your Classmates</span>
        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="#testimonial">
          <span className="icon">
            <i className="flaticon-user"></i>
          </span>
          <span className="menu-title"> Connect with your Neighbours</span>
        </a>
      </li>
    </ul>
    //  </div>
  );
}
