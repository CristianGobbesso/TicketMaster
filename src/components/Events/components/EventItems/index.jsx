
import './style.css';

const Eventitems = ({info, id,name,image,onEventClick})=>{

const handleSeeMoreClick = (evt)=>{
    evt.stopPropagation();
    onEventClick(id);
}
    return(
        <div className="event-item-container" >
            <img src={image} alt={name} width={200} height={200}/>
            <div className="event-info-container" >
                <h4 className="event-name" >{name}</h4>

                <p className="event-info" >{info}</p>
                <button className="see-more-btn" onClick={handleSeeMoreClick}>Ver mas </button>
            </div>
        </div>
    );
};

export default Eventitems;

