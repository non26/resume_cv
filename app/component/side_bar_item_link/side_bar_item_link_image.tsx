import "./side_bar_item_link_image.scss"

interface ISideBarItemImageProps {
    image?:string
    circleColor: string
}

export default function SideBarItemLinkImage(
    props: ISideBarItemImageProps
){
    return (
        <div className="side-bar-item-link-image-container">
            <div className="side-bar-item-link-image" style={{backgroundColor:props.circleColor}}>
            </div>
        </div>
    )
}