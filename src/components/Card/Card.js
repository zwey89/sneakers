import  "./card.scss"
import React from "react";



function Card (props) {

const [isAdded, setIsAdded] = React.useState(false);

const onClickPlus = () => {
  setIsAdded(!isAdded);
}

  return(
     <div className="card">
     <div className="favorite">
        <img className="unlike" src="/img/Favorite.svg" alt="unlike" onClick={props.onClickFavourite}/>

     </div>
    <img className="card_img" src={props.imageUrl} alt="card"/> 
    <h5>{props.title}</h5>
    <div className="card_bottom">
     <div className="card_info">
       <span>цена</span>
       <b>{props.price} гр</b>
     </div>
     <button className="button" onClick={onClickPlus}>
       <img className="card_btn" src={isAdded ? "/img/Added.svg" : "/img/Plus.svg" } alt="button"/>
     </button>
    </div>
</div>
    )
}
export default Card;
