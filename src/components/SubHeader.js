import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const SubHeader = () => {
  const [charOpen, setCharOpen] = useState(false);
  const [enemOpen, setEnemOpen] = useState(false);
  const [equipOpen, setEquipOpen] = useState(false);
  const [weaponsOpen, setWeaponsOpen] = useState(false);
  const [spellsOpen, setSpellsOpen] = useState(false);

  const charRef = useRef();
  const equipRef = useRef();
  const weaponsRef = useRef();
  const enemRef = useRef();
  const spellsRef = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (
        charRef.current.contains(event.target) ||
        equipRef.current.contains(event.target) ||
        enemRef.current.contains(event.target) ||
        spellsRef.current.contains(event.target) ||
        weaponsRef.current.contains(event.target)
      ) {
        return;
      }
      setCharOpen(false);
      setEnemOpen(false);
      setEquipOpen(false);
      setWeaponsOpen(false);
      setSpellsOpen(false);
    };
    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);

  return (
    <div
      className="subheaderdropdown ui five column grid"
      style={{ textAlign: "center", width: "100%" }}
    >
      <div className="row" style={{ marginTop: "50px" }}>
        <div className="column">
          <div
            onClick={() => {
              setEnemOpen(!enemOpen);
              setWeaponsOpen(false);
              setCharOpen(false);
              setSpellsOpen(false);
              setEquipOpen(false);
            }}
            className={`ui dropdown ${enemOpen ? "visible active" : ""}`}
            ref={enemRef}
          >
            <div className="text">Enemies</div>
            <i className="dropdown icon"></i>
            <div className={`menu ${enemOpen ? "visible transition" : ""}`}>
              <div>
                <Link to="/bosses">
                  <div>Bosses</div>
                </Link>
              </div>
              <div>
                <Link to="/creatures">
                  <div>Creatures</div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="column">
          <div
            onClick={() => {
              setCharOpen(!charOpen);
              setWeaponsOpen(false);
              setEquipOpen(false);
              setSpellsOpen(false);
              setEnemOpen(false);
            }}
            className={`ui dropdown ${charOpen ? "visible active" : ""}`}
            ref={charRef}
          >
            <div className="text">Characters & Locations</div>
            <i className="dropdown icon"></i>
            <div className={`menu ${charOpen ? "visible transition" : ""}`}>
              <div>
                <Link to="/classes">
                  <div>Classes</div>
                </Link>
              </div>
              <div>
                <Link to="/npcs">
                  <div>Npcs</div>
                </Link>
              </div>
              <div>
                <Link to="/locations">
                  <div>Locations</div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="column">
          <div
            onClick={() => {
              setEquipOpen(!equipOpen);
              setWeaponsOpen(false);
              setCharOpen(false);
              setSpellsOpen(false);
              setEnemOpen(false);
            }}
            className={`ui dropdown ${equipOpen ? "visible active" : ""}`}
            ref={equipRef}
          >
            <div className="text">Equipment</div>
            <i className="dropdown icon"></i>
            <div className={`menu ${equipOpen ? "visible transition" : ""}`}>
              <div>
                <Link to="/armors">
                  <div>Armors</div>
                </Link>
              </div>
              <div>
                <Link to="/talismans">
                  <div>Talismans</div>
                </Link>
              </div>
              <div>
                <Link to="/items">
                  <div>Items</div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="column">
          <div
            onClick={() => {
              setWeaponsOpen(!weaponsOpen);
              setEquipOpen(false);
              setCharOpen(false);
              setSpellsOpen(false);
              setEnemOpen(false);
            }}
            className={`ui dropdown ${weaponsOpen ? "visible active" : ""}`}
            ref={weaponsRef}
          >
            <div className="text">Weapons</div>
            <i className="dropdown icon"></i>
            <div className={`menu ${weaponsOpen ? "visible transition" : ""}`}>
              <div>
                <Link to="/weapons">
                  <div>Weapons</div>
                </Link>
              </div>
              <div>
                <Link to="/ammos">
                  <div>Ammos</div>
                </Link>
              </div>
              <div>
                <Link to="/shields">
                  <div>Shields</div>
                </Link>
              </div>
              <div>
                <Link to="/ashes">
                  <div>Ashes of War</div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="column">
          <div
            onClick={() => {
              setSpellsOpen(!spellsOpen);
              setWeaponsOpen(false);
              setCharOpen(false);
              setEquipOpen(false);
              setEnemOpen(false);
            }}
            className={`ui dropdown ${spellsOpen ? "visible active" : ""}`}
            ref={spellsRef}
          >
            <div className="text">Spells</div>
            <i className="dropdown icon"></i>
            <div className={`menu ${spellsOpen ? "visible transition" : ""}`}>
              <div>
                <Link to="/incantations">
                  <div>Incantations</div>
                </Link>
              </div>
              <div>
                <Link to="/sorceries">
                  <div>Sorceries</div>
                </Link>
              </div>
              <div>
                <Link to="/spirits">
                  <div>Spirit Ashes</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
