const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src={require("./../../assets/logos/vish_food_logo.png")}
          className="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
