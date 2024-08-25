import SideBarHeader from "../side_bar_header/side_bar_header";
import "./side_bar_item_tag.scss";
import SideBarItemTagItem from "./side_bar_item_tag_item";

interface ISideBarItemTagProps {
  topic: string;
  items: string[];
}
export default function SideBarItemTag(props: ISideBarItemTagProps) {
  return (
    <div className="side-bar-item-tag-container">
      <SideBarHeader header={props.topic}></SideBarHeader>
      <div className="side-bar-item-tag">
        {props.items.map((item, idx) => (
          <SideBarItemTagItem item={item}></SideBarItemTagItem>
        ))}
      </div>
    </div>
  );
}
