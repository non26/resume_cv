import SideBarHeader from "../side_bar_header/side_bar_header";
import "./side_bar_item_link.scss";
import SideBarItemLinkImage from "./side_bar_item_link_image";
import SideBarItemLinkName from "./side_bar_item_link_name";

export default function SideBarItemLink() {
  return (
    <div className="side-bar-item-link-container">
      <SideBarHeader header="Links" />
      <div className="side-bar-item-link">
        <div className="side-bat-item-link-child-image"></div>
        <div className="side-bar-item-link-children">
          <SideBarItemLinkImage circleColor="#F7F7BC"></SideBarItemLinkImage>
          <SideBarItemLinkName name="Github" link="https://github.com/non26"></SideBarItemLinkName>
        </div>
      </div>
    </div>
  );
}
