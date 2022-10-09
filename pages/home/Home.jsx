import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css";
import ContentMiddle from "../../components/content/middle";

export default function Home() {
  return (
    <>
      <Topbar />

      {/* <Sidebar /> */}
      <ContentMiddle />
      <Rightbar />
    </>
  );
}
