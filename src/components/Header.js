
function Header(){
    return(
        <header>
        <div className="headerLeft">
        <img widh={40} height={40} src="/img/Logo.svg" alt="logo"/>
      <div className="headerInfo">
        <h3>React Sneakers</h3>
        <p className="slogan">Магазин лучших кросовок</p>
      </div>
        </div>
      <ul className="headerRight">
        <li>
          <img src="/img/Cart.svg" alt="Cart"/>
          <span>1020 гр</span>
        </li>
        <li>
          <img src="/img/Favorite.svg" alt="favourite"/>
        </li>
        <li>
          <img src="/img/Avatar.svg" alt="avatar"/>
        </li>
      </ul>
      </header>
    );
};

export default Header;