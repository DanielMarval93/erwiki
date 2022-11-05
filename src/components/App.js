import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Shows from "./Shows";
import Main from './Main';
import Header from './Header';
import '../style/App.css'

const App = () =>{
    return (
        <div className="ui container" style={{ marginTop: "10px" }}> 
           <BrowserRouter>
                <div>
                    <Header />
                    <Routes >
                    <Route path="/" exact element= {<Main/>} /> 
                        <Route path="/bosses" exact element= {<Shows category="bosses" title="Bosses"/>} />
                        <Route path="/items" exact element= {<Shows category='items' title="Items"/>} />
                        <Route path="/ammos" exact element= {<Shows category='ammos' title="Ammos"/>} />
                        <Route path="/armors" exact element= {<Shows category= 'armors' title="Armors"/>} />
                        <Route path="/ashes" exact element= {<Shows category= 'ashes' title="Ashes"/>} />
                        <Route path="/classes" exact element= {<Shows category= 'classes' title="Classes"/>} />
                        <Route path="/creatures" exact element= {<Shows category= 'creatures' title="Creatures"/>} />
                        <Route path="/incantations" exact element= {<Shows category= 'incantations' title="Incantations"/>} />
                        <Route path="/locations" exact element= {<Shows category= 'locations' title="Locations"/>} /> 
                        <Route path="/npcs" exact element= {<Shows category= 'npcs' title="NPCs"/>} />
                        <Route path="/shields" exact element= {<Shows category= 'shields' title="Shields"/>} /> 
                        <Route path="/sorceries" exact element= {<Shows category= 'sorceries' title="Sorceries"/>} /> 
                        <Route path="/spirits" exact element= {<Shows category= 'spirits' title="Spirits"/>} />
                        <Route path="/talismans" exact element= {<Shows category= 'talismans' title="Talismans"/>} /> 
                        <Route path="/weapons" exact element= {<Shows category= 'weapons' title="Weapons"/>} />  
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
};
export default App;