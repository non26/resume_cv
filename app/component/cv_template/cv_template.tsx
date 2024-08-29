"use client";
import { useState } from "react";
import Introduction from "../inroduction/introduction";
import SearchBar from "../search_bar/search_bar";
import SideBarItem from "../side_bar_item/side_bar_item";
import SideBarItemShortDescription from "../side_bar_item/side_bar_item_desc";
import SideBarItemSubTopic from "../side_bar_item/side_bar_item_subtopic";
import SideBarItemTopic from "../side_bar_item/side_bar_item_topic";
import TrafficLight from "../traffic_light/traffic_light";
import "./cv_template.scss";

export default function CvTemplate() {
  const [showWorkExprience, setWorkExprience] = useState<boolean>(true);
  const [showAddress, setShowAddress] = useState<boolean>(false);
  const numberOfCards: string[] = ["1", "2", "3", "4"];

  const onClickAddress = (event: React.MouseEvent<HTMLButtonElement>) => {
    // event.preventDefault();
    console.log("address click");
    setWorkExprience(false);
    setShowAddress(true);
  };

  const onClickWorkExprience = (event: React.MouseEvent<HTMLButtonElement>) => {
    // event.preventDefault();
    console.log("work click");
    setWorkExprience(true);
    setShowAddress(false);
  };

  const work = () => {
    return (
      <div>
        <h1>Work</h1>
      </div>
    );
  };

  const introduction = () => {
    return (
      <div className="main-panel-intro-container">
        <div className="main-panel-intro">
              <Introduction></Introduction>
        </div>
      </div>
    );
  };

  return (
    <div className="cv-template-container">
      <div className="cv-template">
        <div className="side-panel">
          <div className="side-panel-wrapper">
            <TrafficLight />
            <SearchBar />
            <SideBarItem
              srcImage="/education_hat.png"
              circleColor="#DBA9EC"
              active={showAddress}
              onclick={onClickAddress}
            >
              <SideBarItemTopic text="Introduce Me" />
              <SideBarItemSubTopic text="Chanon Eiemrod (Non)" />
              <SideBarItemShortDescription text="Thailand" />
            </SideBarItem>
            <SideBarItem
              srcImage=""
              circleColor="#B8C14B"
              active={showWorkExprience}
              onclick={onClickWorkExprience}
            >
              <SideBarItemTopic text="Work Expriences" />
              <SideBarItemSubTopic text="Thailand" />
              <SideBarItemShortDescription text="2018-2022" />
            </SideBarItem>
          </div>
        </div>
        <div className="main-panel">
          {introduction()}
        </div>
      </div>
    </div>
  );
}
