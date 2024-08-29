'use client'
import React from "react";
import "./side_bar_item.scss";
import SideBarItemImage from "./side_bar_item_image";

interface ISideBarItem {
  srcImage: string;
  circleColor: string;
  active:boolean;
  children: React.ReactNode;
  onclick: any;
}
export default function SideBarItem(props: ISideBarItem) {
  return (
    <div className={`side-bar-item-container `+  (props.active ? "is-active": "")} onClick={props.onclick}>
      <div className="side-bar-item">
        <SideBarItemImage
        circleColor={props.circleColor}
          src={props.srcImage}
          width={30}
          height={30}
          alt=""
        />
        <div className="side-bar-item-children">{props.children}</div>
      </div>
    </div>
  );
}
