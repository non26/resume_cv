import Link from 'next/link';
import "./side_bar_item_link_name.scss";

interface ISideBaritemLinkNameProps {
  name: string;
  link: string;
}

export default function SideBarItemLinkName(props: ISideBaritemLinkNameProps) {
  return (
    <div className="side-bat-item-link-name-container">
      <div className="side-bar-link-name">
       <Link href={props.link}>{props.name}</Link>
      </div>
    </div>
  );
}
