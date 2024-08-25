import "./side_bar_item_subtopic.scss"
interface ISideBarItemSubTopic {
    text:string,
    }
    
    export default function SideBarItemSubTopic(
        props:ISideBarItemSubTopic
    ){
        return (
            <div className="side-bar-item-sub-description">
                <p className="p-0 m-0">{props.text}</p>
            </div>
        )
    }