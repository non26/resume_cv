import Image from "next/image";
import "./search_bar.scss";

export default function SearchBar(){
    return (
        <div className="search-bar-container">
        <div className="search-bar">
          <div className="search-bar-item-container">
            <div className="glass search-bar-item">
              <Image
                src="/glass_icon.svg"
                alt=""
                width={20}
                height={20}
              ></Image>
            </div>
            <div className="name search-bar-item">
              <p>Chanon Eiemrod</p>
            </div>
          </div>
        </div>
      </div>
    )
}