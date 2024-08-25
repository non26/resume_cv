import "./side_bar_item_topic.scss"
 
 interface ISideBarTopic {
    text: string,
 }

export default function SideBarItemTopic(props:ISideBarTopic){
    return (
        <div className="side-bar-topic">
            <p className="p-0">{props.text}</p>
        </div>
    )
}