import { menuItem } from "@/app/utils/menu";
import "./header_menu.scss";
interface headerMenuProps {
  menus: menuItem[];
}
export default function HeaderMenu(props: headerMenuProps) {
  return (
    <>
      <ul className="header-menu">
        {props.menus.map((x, id) => (
          <li key={id} id={x.id} className={`${x.className} menu-item`}>
            {x.item}
          </li>
        ))}
      </ul>
    </>
  );
}
