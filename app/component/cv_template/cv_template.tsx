import { skills } from "@/app/utils/skills";
import SearchBar from "../search_bar/search_bar";
import SideBarItem from "../side_bar_item/side_bar_item";
import SideBarItemShortDescription from "../side_bar_item/side_bar_item_desc";
import SideBarItemSubTopic from "../side_bar_item/side_bar_item_subtopic";
import SideBarItemTopic from "../side_bar_item/side_bar_item_topic";
import SideBarItemLink from "../side_bar_item_link/side_bar_item_link";
import SideBarItemTag from "../side_bar_item_tag/side_bar_item_tag";
import TrafficLight from "../traffic_light/traffic_light";
import "./cv_template.scss";

export default function CvTemplate() {
  return (
    <div className="cv-template-container">
      <div className="cv-template">
        <div className="side-panel">
          <div className="side-panel-wrapper">
            <TrafficLight />
            <SearchBar />
            <SideBarItem srcImage="/education_hat.png" circleColor="#DBA9EC">
              <SideBarItemTopic text="Contact && Address" />
              <SideBarItemSubTopic text="Thailand" />
              <SideBarItemShortDescription text="Thai Cityzen" />
            </SideBarItem>
            <SideBarItem srcImage="/education_hat.png" circleColor="#EA6D2A">
              <SideBarItemTopic text="BSc Science of Mathematic" />
              <SideBarItemSubTopic text="Thamasat University, Thailand" />
              <SideBarItemShortDescription text="2018-2022" />
            </SideBarItem>
            <SideBarItem srcImage="" circleColor="#B8C14B">
              <SideBarItemTopic text="Work Expriences" />
              <SideBarItemSubTopic text="Thailand" />
              <SideBarItemShortDescription text="2018-2022" />
            </SideBarItem>
            <SideBarItemLink></SideBarItemLink>
            <SideBarItemTag topic="Skils" items={skills} />
          </div>
        </div>
        <div className="main-panel"></div>
      </div>
    </div>
  );
}
