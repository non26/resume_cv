import { skills } from "@/app/utils/skills";
import SideBarItemLink from "../side_bar_item_link/side_bar_item_link";
import SideBarItemTag from "../side_bar_item_tag/side_bar_item_tag";
import "./introduction.scss";

interface IIntroductionProps {}

export default function Introduction(props: IIntroductionProps) {
  return (
    <div className="introduction-container">
      <div className="introduction">
        <p className="intro-detail name">Chanon Eiemrod</p>
        <div className="name-sub">
          <p className="intro-detail email">ceiemrod@gmail.com</p>
          <p className="intro-detail phone">+66988327674</p>
        </div>
        <p className="intro-detail address">Nonthaburi, Thailand</p>
        <div className="education">
          <p className="intro-detail edu-header header">Education:</p>
          <p className="intro-detail edu">
            Bachelor of Science,
          </p>
          <p className="intro-detail edu">
            Thamasat University (2016-2019)
          </p>
          <p className="intro-detail project-header header">Education Project:</p>
          <p className="intro-detail edu">
            On the Diophantine Equation p^x + (p+12)^y = z^2 where p and p+12
            are prime number
          </p>
        </div>
      </div>
      <SideBarItemLink></SideBarItemLink>
      <SideBarItemTag topic="Skills" items={skills} />
    </div>
  );
}
