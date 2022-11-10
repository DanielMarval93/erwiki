import {useEffect, useMemo, useState} from "react";
import { Link, useLocation } from "react-router-dom";
import eldenRingApi from "../apis/eldenring";

const useQuery = () => {
    const { search } = useLocation();
  
    return useMemo(() => new URLSearchParams(search), [search]);
  }

const Shows = (props) =>{
    
    const category=`/${props.category}`;
    const [shows, setShows]=useState([]);
    const queryParams = useQuery()
    const page = queryParams.get("page")

    useEffect(()=>{
        const fetchShows = () =>{eldenRingApi.get(category ,{params:{limit: 10, page: page || 0 }}).then(
                response => {setShows(response.data.data)}
            );};
            fetchShows();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const RenderShows = (props) =>{
        if (!props.shows) {
            return <div></div>;
        };
    
        const renderedShow =props.shows.map( show => {

            const linkText= `${category}/${show.id}`

                
            return(
                <div className="four wide column" key= {show.id}>
                    <div className="ui item"  >
                        <div className="ui content">
                            <div className="renderedText" >{show.name}</div>
                            <Link to={linkText} className="ui medium image">
                                <img className="renderedImage" src={show.image} alt={show.name}/>
                            </Link>
                            <Link  to={linkText} className='ui text'>
                                {show.description}
                            </Link>
                        </div>
                    </div>
                </div>
                )
        });
    
        return <div className="ui grid">{renderedShow}</div>
    };

    return(
        <div className="ui container">
            <h1 className="header" style={{textAlign:'center'}}>{props.title}</h1>
                <RenderShows shows={shows}/>
        </div>
    )
};

export default Shows;