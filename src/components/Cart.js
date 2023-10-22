function Cart (){
    return(
     <div className="cart_overlay">
        
      
        <div className="cart_block">
          <h2>Корзина</h2>
          <button className="close_cart_btn">
          <img src="/img/x.svg" alt="close"/>
          </button>
          <div className="cart_items">
          <div className="cart_item">
            <img widh={70} height={70} src="/img/sneakers/1.jpg" alt="sneakers"/>
            <div className="cart_info">
              <p>
              Мужские Кроссовки<br/> Nike Air Max 270
              </p>
              <b>1299 гр.</b>
            </div>
                 <img className="cart_btn" src="/img/x.svg" alt="button"/>
          </div>
          <div className="cart_item">
            <img widh={70} height={70} src="/img/sneakers/1.jpg" alt="sneakers"/>
            <div className="cart_info">
              <p>
              Мужские Кроссовки<br/> Nike Air Max 270
              </p>
              <b>1299 гр.</b>
            </div>
                 <img className="cart_btn" src="/img/x.svg" alt="button"/>
          </div>
        </div>
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>2140 гр</b>
            </li>
            <li>
              <span>НДС:</span>
              <div></div>
              <b>107гр</b>
            </li>
          </ul>
          <button className="order_btn">Оформить заказ
            <img src="/img/Arrow.svg" alt="order"/>
          </button>

         </div>
        </div>
    );
}
export default Cart;