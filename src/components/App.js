import { BrowserRouter, Route, Routes } from "react-router-dom";

import ShowItem from "./ShowItem";
import Shows from "./Shows";
import Main from "./Main";
import Header from "./Header";
import "../style/App.css";
import SubHeader from "./SubHeader";

const App = () => {
  return (
    <div className="ui container" >
      <BrowserRouter>
        <div >
          <Header />
          <SubHeader/>
          <div >
          <div className="ui divider"></div>
            <Routes>
              <Route path="/" exact element={<Main />} />
              <Route
                path="/bosses/"
                exact
                element={<Shows category="bosses" title="Bosses" />}
              />
              <Route
                path="/bosses/:id"
                exact
                element={<ShowItem category="bosses" />}
              />
              <Route
                path="/items"
                exact
                element={<Shows category="items" title="Items" />}
              />
              <Route
                path="/items/:id"
                exact
                element={<ShowItem category="items" />}
              />
              <Route
                path="/ammos"
                exact
                element={<Shows category="ammos" title="Ammos" />}
              />
              <Route
                path="/ammos/:id"
                exact
                element={<ShowItem category="ammos" />}
              />
              <Route
                path="/armors"
                exact
                element={<Shows category="armors" title="Armors" />}
              />
              <Route
                path="/armors/:id"
                exact
                element={<ShowItem category="armors" />}
              />
              <Route
                path="/ashes"
                exact
                element={<Shows category="ashes" title="Ashes" />}
              />
              <Route
                path="/ashes/:id"
                exact
                element={<ShowItem category="ashes" />}
              />
              <Route
                path="/classes"
                exact
                element={<Shows category="classes" title="Classes" />}
              />
              <Route
                path="/classes/:id"
                exact
                element={<ShowItem category="classes" />}
              />
              <Route
                path="/creatures"
                exact
                element={<Shows category="creatures" title="Creatures" />}
              />
              <Route
                path="/creatures/:id"
                exact
                element={<ShowItem category="creatures" />}
              />
              <Route
                path="/incantations"
                exact
                element={<Shows category="incantations" title="Incantations" />}
              />
              <Route
                path="/incantations/:id"
                exact
                element={<ShowItem category="incantations" />}
              />
              <Route
                path="/locations"
                exact
                element={<Shows category="locations" title="Locations" />}
              />
              <Route
                path="/locations/:id"
                exact
                element={<ShowItem category="locations" />}
              />
              <Route
                path="/npcs"
                exact
                element={<Shows category="npcs" title="NPCs" />}
              />
              <Route
                path="/npcs/:id"
                exact
                element={<ShowItem category="npcs" />}
              />
              <Route
                path="/shields"
                exact
                element={<Shows category="shields" title="Shields" />}
              />
              <Route
                path="/shields/:id"
                exact
                element={<ShowItem category="shields" />}
              />
              <Route
                path="/sorceries"
                exact
                element={<Shows category="sorceries" title="Sorceries" />}
              />
              <Route
                path="/sorceries/:id"
                exact
                element={<ShowItem category="sorceries" />}
              />
              <Route
                path="/spirits"
                exact
                element={<Shows category="spirits" title="Spirits" />}
              />
              <Route
                path="/spirits/:id"
                exact
                element={<ShowItem category="spirits" />}
              />
              <Route
                path="/talismans"
                exact
                element={<Shows category="talismans" title="Talismans" />}
              />
              <Route
                path="/talismans/:id"
                exact
                element={<ShowItem category="talismans" />}
              />
              <Route
                path="/weapons"
                exact
                element={<Shows category="weapons" title="Weapons" />}
              />
              <Route
                path="/weapons/:id"
                exact
                element={<ShowItem category="weapons" />}
              />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};
export default App;
