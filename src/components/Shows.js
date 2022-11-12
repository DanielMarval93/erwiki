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
    const [pages,setPages]=useState(0);

    const queryParams = useQuery()
    const page = queryParams.get("page")

    useEffect(()=>{
        const fetchShows = () =>{eldenRingApi.get(category ,{params:{limit: 16, page: page || 0 }}).then(
                response => {setShows(response.data.data)
                setPages(Math.trunc((response.data.total/16)))}
            );};
            fetchShows();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);


    const RenderPages = () =>{

        if (pages===0){
            return 
        }else{
            const rows = [];
            for (let i = 0; i <= pages; i++) {
                const pageLink =`${category}?page=${i}`;
                rows.push(<a className='link' href={pageLink}>{i}</a>);
            }
            
            const renderedPages =rows.map(row =>{
                return(
                    <>  {row}  </>
                )
            })
            return (
            <div style={{textAlign:"center"}}>
                {renderedPages}
            </div>
            )         
        }
  
    }

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
                            <br/>
                            <Link  to={linkText} className='ui text'>
                                {show.description}
                            </Link>
                        </div>
                    </div>
                </div>
                )
        });
    
        return <div className="ui stackable four column grid">{renderedShow}</div>
    };

    return(
        <div className="ui container">
            <h1 className="header" style={{textAlign:'center'}}>{props.title}</h1>
            <div class="ui divider"></div>
            <RenderShows shows={shows}/>
            <div class="ui divider"></div>
            <RenderPages/>
            <div class="ui divider"></div>
        </div>
    )
};

export default Shows;