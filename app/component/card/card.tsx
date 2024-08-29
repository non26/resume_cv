import { CSSProperties, ReactNode } from "react";
import "./card.scss";

interface ICardProps {
  id?: string;
  addStyle: CSSProperties;
  children: ReactNode;
}

export default function Card(props: ICardProps) {
  return (
    <div className="card-container" style={props.addStyle} id={props.id}>
      <div className="card">{props.children}</div>
    </div>
  );
}
