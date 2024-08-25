import { ImageProps } from "next/image";
import "./side_bar_item_image.scss";
interface ISideBarItemImage
  extends Omit<ImageProps, "src" | "width" | "height"> {
  src: string;
  width: number;
  height: number;
  circleColor: string;
}

export default function SideBarItemImage({
  circleColor,
  src,
  width,
  height,
  ...rest
}: ISideBarItemImage) {
  return (
    <div className="side-bar-item-image-container">
      <div className="side-bar-item-image" style={{backgroundColor: circleColor}}>
        {/* <Image src={src} width={width} height={height} {...rest} /> */}
      </div>
    </div>
  );
}
