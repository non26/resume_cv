import { menuItem } from "@/app/utils/menu";
import Image from "next/image";
import HeaderMenu from "../header_menu_item/header_menu";
import "./status_bar.scss";
type ImageDimension = {
  width:number,
  height:number,
}
export default function StatusBar() {
const dimension: ImageDimension = {
  width: 20,
  height: 20
}


  const leftmenus: menuItem[] = [
    {
      item: <Image src="/apple-icon.svg" alt="" width={dimension.width} height={dimension.height}></Image>,
      id: "apple-icon-id",
      className: "apple-icon-menu",
      containerClassName: "apple-icon-menu-container",
    },
    {
      item: "Reminder",
      id: "reminder-id",
      className: "reminder-menu",
      containerClassName: "reminder-menu-container",
    },
    {
      item: "File",
      id: "file-id",
      className: "file-menu",
      containerClassName: "file-menu-container",
    },
    {
      item: "Edit",
      id: "edit-id",
      className: "edit-menu",
      containerClassName: "edit-menu-container",
    },
    {
      item: "View",
      id: "view-id",
      className: "view-menu",
      containerClassName: "view-menu-container",
    },
    {
      item: "Go",
      id: "go-id",
      className: "go-menu",
      containerClassName: "go-menu-container",
    },
  ];

  const rightmenus: menuItem[] = [
    {
      item: <Image src="/display_icon.svg" alt="" width={dimension.width} height={dimension.height}></Image>,
      id: "display-id",
      className: "display-menu",
      containerClassName: "display-menu-container",
    },
    {
      item: <Image src="/close_sound_icon.svg" alt="" width={dimension.width} height={dimension.height}></Image>,
      id: "close-sound-id",
      className: "close-sound-menu",
      containerClassName: "close-sound-menu-container",
    },
    {
      item: <Image src="/wifi_icon.svg" alt="" width={dimension.width} height={dimension.height}></Image>,
      id: "wifi-id",
      className: "wifi-menu",
      containerClassName: "wifi-menu-container",
    },
    {
      item: <Image src="/profile_icon.svg" alt="" width={dimension.width} height={dimension.height}></Image>,
      id: "profile-id",
      className: "profile-menu",
      containerClassName: "profile-menu-container",
    },
    {
      item: <Image src="/glass_icon.svg" alt="" width={dimension.width} height={dimension.height}></Image>,
      id: "glass-id",
      className: "glass-menu",
      containerClassName: "glass-menu-container",
    },
    {
      item: <Image src="/siri_icon.svg" alt="" width={dimension.width} height={dimension.height}></Image>,
      id: "siri-id",
      className: "siri-menu",
      containerClassName: "siri-menu-container",
    },
  ];

  return (
    <div className="status-bar-container">
      <div className="status-bar">
        <div className="left-menu-container">
          <div className="left-menu">
            <HeaderMenu menus={leftmenus}></HeaderMenu>
          </div>
        </div>
        <div className="right-menu-container">
          <div className="right-menu"></div>
          <HeaderMenu menus={rightmenus}></HeaderMenu>
        </div>
      </div>
    </div>
  );
}
