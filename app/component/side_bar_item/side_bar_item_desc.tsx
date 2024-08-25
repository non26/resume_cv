import "./side_bar_item_desc.scss"

interface ISideBarItemShortDescription {
text:string,
}

export default function SideBarItemShortDescription(
    props:ISideBarItemShortDescription
){
    return (
        <div className="side-bar-item-short-desc">
            <p className="p-0 m-0">{props.text}</p>
        </div>
    )
}