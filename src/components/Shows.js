import {useEffect, useState} from "react";
import eldenRingApi from "../apis/eldenring";

const Shows = (props) =>{

    const category=`/${props.category}`;
    const [shows, setShows]=useState([]);

    useEffect(()=>{
        const fetchShows = () =>{eldenRingApi.get(category ,{params:{limit: 100, page:0 }}).then(
                response => {setShows(response.data.data)}
            );};
            fetchShows();
    },[]);

    const RenderShows = (props) =>{
        if (!props.shows) {
            return <div></div>;
        };
    
        const renderedShow =props.shows.map( show => {
        return(
            <div className="four wide column">
                <div className="ui item " key= {show.id} >
                    <div className="ui content">
                        <div className='ui text' style={{fontWeight: 'bold', textAlign: 'center'}}>{show.name}</div>
                        <div className="ui medium image">
                            <img src={show.image} alt={show.name} style={{height: '160px', marginLeft: 'auto',  marginRight:'auto'}} />
                        </div>
                        <div className='ui text' style={{fontStyle: 'italic', textAlign: 'justify'}}>{show.description}</div>
                    </div>
                </div>
            </div>
            )
        });
    
        return <div className="ui grid">{renderedShow}</div>
    };

    return(
        <div className="ui container">
            <h1 className="header">{props.title}</h1>
                <RenderShows shows={shows}/>
        </div>
    )
};

export default Shows;