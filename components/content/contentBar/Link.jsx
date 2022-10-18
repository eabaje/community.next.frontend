import "../../../styles/link.module.css";
import { topMenuItemsPublic } from "../../navbar/vertical/topBarData";
import TopBarNav from "../../navbar/vertical/topBarNav";

export default function ContentLink({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    // <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="contentbar navbar-nav m-auto text-sm-center text-md-center">
      {topMenuItemsPublic(user).map((menu, index) => {
        return (
          <TopBarNav
            key={index}
            iconName={`${menu.icon}`}
            path={menu.path}
            title={menu.title}
          />
        );
      })}
    </ul>
    //  </div>
  );
}
