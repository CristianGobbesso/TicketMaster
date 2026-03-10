import Eventitems from "./components/EventItems";
import eventsJSON from "../../data/events.json"
import { useState } from "react";



const Events = ()=>{

    const [data]= useState(eventsJSON)
    const {_embedded: {events} }= data

    const eventsComponent = events.map((eventItem)=> (
<Eventitems 
        key={`event-item-${eventItem.id}`}
        name={eventItem.name}
        info={eventItem.info}
        image={eventItem.images[0].url} 
        />
));

    return(
        <>
        <div>Eventos</div>
        {eventsComponent}

        </>
    );
};

export default Events;
