import { Link } from "react-router-dom";

const SubHeader = () => {
    return(
    <div className="ui grid" style={{textAlign:'center'}}>
        <div className="row" style={{marginTop: '50px'}}>
        <div className="column">
            <Link to="/bosses" >
                <h6>Bosses</h6>
            </Link> 
        </div>
        <div className="column">
            <Link to="/items" >
                <h6>Items</h6>
            </Link>
        </div>
        <div className="column">
            <Link to="/ammos" >
                <h6>Ammos</h6>
            </Link>
        </div>
        <div className="column">
            <Link to="/armors" >
                <h6>Armors</h6>
            </Link>
        </div>
        <div className="column">
            <Link to="/ashes" >
                <h6>Ashes</h6>
            </Link>
        </div>
        <div className="column">
            <Link to="/classes" >
                <h6>Classes</h6>
            </Link>
        </div>
        <div className="column">
            <Link to="/creatures" >
                <h6>Creatures</h6>
            </Link>
        </div>
        <div className="column">
            <Link to="/incantations" >
                <h6>Incantations</h6>
            </Link>
        </div>
        <div className="column">
            <Link to="/locations" >
                <h6>Locations</h6>
            </Link> 
        </div>
        <div className="column">
            <Link to="/npcs" >
                <h6>Npcs</h6>
            </Link>
        </div>
        <div className="column">
            <Link to="/shields">
                <h6>Shields</h6>
            </Link>
        </div>
        <div className="column">
             <Link to="/sorceries">
                <h6>Sorceries</h6>
             </Link>
        </div>
        <div className="column">
            <Link to="/spirits">
                <h6>Spirits</h6>
            </Link>
        </div>
        <div className="column">
            <Link to="/talismans">
                <h6>Talisman</h6>
            </Link>
        </div>
        <div className="column">
            <Link to="/weapons">
                <h6>Weapons</h6>
            </Link>
        </div>
        </div>
    </div>
    )


};

export default SubHeader