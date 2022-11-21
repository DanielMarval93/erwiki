import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="ui grid" style={{ textAlign: "center" }}>
      <div className="eight wide column">
        <Link to="/bosses">
          <h3>Bosses</h3>
        </Link>
      </div>
      <div className="eight wide column">
        <Link to="/items">
          <h3>Items</h3>
        </Link>
      </div>
      <div className="eight wide column">
        <Link to="/ammos">
          <h3>Ammos</h3>
        </Link>
      </div>
      <div className="eight wide column">
        <Link to="/armors">
          <h3>Armors</h3>
        </Link>
      </div>
      <div className="eight wide column">
        <Link to="/ashes">
          <h3>Ashes</h3>
        </Link>
      </div>
      <div className="eight wide column">
        <Link to="/classes">
          <h3>Classes</h3>
        </Link>
      </div>
      <div className="eight wide column">
        <Link to="/creatures">
          <h3>Creatures</h3>
        </Link>
      </div>
      <div className="eight wide column">
        <Link to="/incantations">
          <h3>Incantations</h3>
        </Link>
      </div>
      <div className="eight wide column">
        <Link to="/locations">
          <h3>Locations</h3>
        </Link>
      </div>
      <div className="eight wide column">
        <Link to="/npcs">
          <h3>Npcs</h3>
        </Link>
      </div>
      <div className="eight wide column">
        <Link to="/shields">
          <h3>Shields</h3>
        </Link>
      </div>
      <div className="eight wide column">
        <Link to="/sorceries">
          <h3>Sorceries</h3>
        </Link>
      </div>
      <div className="eight wide column">
        <Link to="/spirits">
          <h3>Spirits</h3>
        </Link>
      </div>
      <div className="eight wide column">
        <Link to="/talismans">
          <h3>Talisman</h3>
        </Link>
      </div>
      <div className="eight wide column">
        <Link to="/weapons">
          <h3>Weapons</h3>
        </Link>
      </div>
    </div>
  );
};

export default Main;
