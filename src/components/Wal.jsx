import walls3 from "../assets/walls3.png";
import "./walls.css";   


const WallPanel = () => {
  return (
    <div className="wall-panel-card">
      <div className="wall-panel-image">
        <img src={walls3} alt="Wall Panels" />
      </div>
    </div>
  );
};

export default WallPanel;
