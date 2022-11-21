import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);

  return (
    <div style={{ marginTop: "20px", marginLeft: "5px" }} ref={ref}>
      <div className="field">
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">Categories</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            <div style={{ marginLeft: "15px" }}>
              <div>
                <Link to="/bosses"><div>Bosses</div></Link>
              </div>
              <div>
                <Link to="/creatures"><div>Creatures</div></Link>
              </div>

              <br/>

              <div>
                <Link to="/classes"><div>Classes</div></Link>
              </div>
              <div>
                <Link to="/npcs"><div>Npcs</div></Link>
              </div>
              
              <br/>
              
              <div>
                <Link to="/items"><div>Items</div></Link>
              </div>
              <div>
                <Link to="/armors"><div>Armors</div></Link>
              </div>
              <div>
                <Link to="/talismans"><div>Talisman</div></Link>
              </div>

              <br/>

              <div>
                <Link to="/weapons"><div>Weapons</div></Link>
              </div>
              <div>
                <Link to="/ammos"><div>Ammos</div></Link>
              </div>
              <div>
                <Link to="/shields"><div>Shields</div></Link>
              </div>
              <div>
                <Link to="/ashes"><div>Ashes</div></Link>
              </div>

              <br/>
              
              <div>
                <Link to="/incantations"><div>Incantations</div></Link>
              </div>
              <div>
                <Link to="/sorceries"><div>Sorceries</div></Link>
              </div>
              <div>
                <Link to="/spirits"><div>Spirits</div></Link>
              </div>

              <br/>

              <div>
                <Link to="/locations"><div>Locations</div></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
