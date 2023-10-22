// import "./index.scss"
import Card from "./components/Card/Card.js";
import Header from "./components/Header";
import Cart from "./components/Cart";

const arr = [
   {name:"Мужские Кроссовки Nike Blazer Mid Suede", price:1200, imageUrl:"/img/sneakers/1.jpg",},
   {name:"Мужские Кроссовки Nike Air Max 270", price:1200, imageUrl:"/img/sneakers/2.jpg",},
   {name:"Мужские Кроссовки Nike Blazer Mid Suede", price:849, imageUrl:"/img/sneakers/3.jpg",},
   {name:"Мужские Кроссовки Under Armour Curry 8", price:1599, imageUrl:"/img/sneakers/4.jpg",},
];

function App() {
  return (
    <div className="wrapper">

      
      <Cart/>
      <Header/>
      <div className="content">
        <div className="content_items">
        <h1 className="title">Все кроссовки</h1>
          <div className="search">
            <img width={20} src="/img/Search.svg" alt="search"/>
            <input placeholder="Поиск..."></input>
          </div>
        </div>

        <div className="sneakers">
          {/* <Card title="Мужские Кроссовки Nike Blazer Mid Suede" price={1200} imageUrl="./img/sneakers/1.jpg" />
          <Card title="Мужские Кроссовки Nike Air Max 270" price={1200} imageUrl="./img/sneakers/2.jpg" />
          <Card title="Мужские Кроссовки Nike Blazer Mid Suede" price={849} imageUrl="./img/sneakers/3.jpg" />
          <Card title="Мужские Кроссовки Under Armour Curry 8" price={1599} imageUrl="./img/sneakers/4.jpg" /> */}

           {arr.map((obj)=>(
          <Card title={obj.name} price={obj.price} imageUrl={obj.imageUrl} onClickFavourite={()=>alert("В избраное")} onClickPlus={()=>alert(obj)} /> 
            
          ))} 

        {/* <div className="card">
          <div className="favorite">
        <img className="unlike" src="/img/Favorite.svg" alt="unlike"/>

          </div>
         <img className="card_img" src="/img/sneakers/1.jpg" alt="card"/> 
         <h5>Мужские Кроссовки <br/> Nike Blazer Mid Suede</h5>
         <div className="card_bottom">
          <div className="card_info">
            <span>цена</span>
            <b>1299 гр</b>
          </div>
          <button className="button">
            <img className="card_btn" src="/img/Plus.svg" alt="button"/>
          </button>
         </div>
        </div>

        <div className="card">
         <img className="card_img" src="/img/sneakers/2.jpg" alt="card"/> 
         <h5>Мужские Кроссовки <br/> Nike Blazer Mid Suede</h5>
         <div className="card_bottom">
          <div className="card_info">
            <span>цена</span>
            <b>1299 гр</b>
          </div>
          <button className="button">
            <img className="card_btn" src="/img/Plus.svg" alt="button"/>
          </button>
         </div>
        </div>

        <div className="card">
         <img className="card_img" src="/img/sneakers/3.jpg" alt="card"/> 
         <h5>Мужские Кроссовки <br/> Nike Blazer Mid Suede</h5>
         <div className="card_bottom">
          <div className="card_info">
            <span>цена</span>
            <b>1299 гр</b>
          </div>
          <button className="button">
            <img className="card_btn" src="/img/Plus.svg" alt="button"/>
          </button>
         </div>
        </div>

        <div className="card">
         <img className="card_img" src="/img/sneakers/4.jpg" alt="card"/> 
         <h5>Мужские Кроссовки <br/> Nike Blazer Mid Suede</h5>
         <div className="card_bottom">
          <div className="card_info">
            <span>цена</span>
            <b>1299 гр</b>
          </div>
          <button className="button">
            <img className="card_btn" src="/img/Plus.svg" alt="button"/>
          </button>
         </div>
        </div> */}

        </div>

      </div>
    </div>
  );
}

export default App;
