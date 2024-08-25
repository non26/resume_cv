import "./side_bar_item_tag_item.scss"

interface ISideBarItemTagItemProps{
    item:string
}

export default function SideBarItemTagItem(
    props:ISideBarItemTagItemProps
){
    return (
        <div className="side-bar-item-tag-item-container">
            <div className="side-bar-item-tag-item">
                <p>{props.item}</p>
            </div>
        </div>
    )
}