import "./traffic_light.scss"
export default function TrafficLight(){
    return (
        <div className="traffix-light-container">
        <div className="traffic-light">
          <div className="traffic-light-item traffic-light-red"></div>
          <div className="traffic-light-item traffic-light-yellow"></div>
          <div className="traffic-light-item traffic-light-green"></div>
        </div>
      </div>
    )
}