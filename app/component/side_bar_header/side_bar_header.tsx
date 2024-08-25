import "./side_bar_header.scss";

interface ISideฺBarHeaderProps {
  header: string;
}

export default function SideBarHeader(props: ISideฺBarHeaderProps) {
  return (
    <div className="side-bar-header-container">
      <div className="side-bar-header">
        <p >{props.header}</p>
      </div>
    </div>
  );
}
