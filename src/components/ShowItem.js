import {useEffect, useState} from "react";
import eldenRingApi from "../apis/eldenring";
import { useParams } from "react-router-dom";

import {RenderListValues, RenderValues, RenderObjectValues} from "./RenderValues";

const ShowItem = props => {
    const [item, setItem]=useState([]);

    let { id } = useParams(); 
    const linkText= `${props.category}/${id}`    

    useEffect(()=>{
        const fetchItem = () =>{eldenRingApi.get(linkText).then(
                response => {setItem(response.data.data)}
            );};
            fetchItem();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    
    return(
        <div key={item.id} style={{textAlign:"center"}}>
            <div >
                <h1>
                    {item.name}
                </h1>
                <img src={item.image} alt={item.name} style={{height:'300px', marginLeft: 'auto',  marginRight:'auto'}}/>
                <p>{item.description}</p>
                <RenderValues values={item.location} title="Location: "/>
                <RenderValues values={item.type} title="Type: "/>
                <RenderValues values={item.passive} title="Passive: "/>
                <RenderValues values={item.category} title="Category: "/>
                <RenderValues values={item.effects} title="Effects: "/>
                <RenderValues values={item.effect} title="Effect: "/>
                <RenderValues values={item.weight}title="Weight: "/>
                <RenderValues values={item.affinity} title="Affinity: "/>
                <RenderValues values={item.skill} title="Skill: "/>
                <RenderValues values={item.healthPoints} title="Health Points: "/>
                <RenderValues values={item.cost} title="Cost: "/>
                <RenderValues values={item.slots} title="Slots: "/>
                <RenderValues values={item.quote} title="Quote: "/>
                <RenderValues values={item.hpCost} title="HP Cost: "/>
                <RenderValues values={item.fpCost} title="FP Cost: "/>
                <div className="ui centered grid">
                <RenderListValues values={item.attackPower} title="Attack Power: "/>
                <RenderListValues values={item.dmgNegation} title="Damage Negation: "/>
                <RenderListValues values={item.resistance} title="Resistance: "/>
                <RenderListValues values={item.requires} title="Requires: "/>
                <RenderListValues values={item.attack} title="Attack: "/>
                <RenderListValues values={item.defence} title="Defense: "/>
                <RenderListValues values={item.requiredAttributes} title="Required Attributes: "/>
                <RenderListValues values={item.drops} title="Drops: "/>
                <RenderListValues values={item.scalesWith} title="Scales With: "/>
                <RenderObjectValues values={item.stats} title="Stats With: "/>
                </div>
            </div>
        </div>
    )
};
export default ShowItem