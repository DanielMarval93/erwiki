import { Link } from "react-router-dom";

const Main = () =>{
    return (
    <div>
        <div>
            <Link to="/bosses" >bosses</Link> 
        </div>
        <div>
            <Link to="/items" >items</Link>
        </div>
        <div>
            <Link to="/ammos" >ammos</Link>
        </div>
        <div>
            <Link to="/armors" >armors</Link>
        </div>
        <div>
            <Link to="/ashes" >ashes</Link>
        </div>
        <div>
            <Link to="/classes" >clasess</Link>
        </div>
        <div>
            <Link to="/creatures" >creatures</Link>
        </div>
        <div>
            <Link to="/incantations" >incantations</Link>
        </div>
        <div>
            <Link to="/locations" >locations</Link> 
        </div>
        <div>
            <Link to="/npcs" >npcs</Link>
        </div>
        <div>
            <Link to="/shields">shields </Link>
        </div>
        <div>
             <Link to="/sorceries">sorceries </Link>
        </div>
        <div>
            <Link to="/spirits">spirits</Link>
        </div>
        <div>
            <Link to="/talismans">talismans </Link>
        </div>
        <div>
            <Link to="/weapons">weapons </Link>
        </div>
    </div>
    )
}

export default Main;