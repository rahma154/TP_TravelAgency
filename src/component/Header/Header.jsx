import style from "./Header.module.css";

function Header() {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <span className={style.logoIcon}>✈</span>
        <span>
          Travel<strong>Agency</strong>
        </span>
      </div>

      <nav className={style.nav}>
        <a href="#">Accueil</a>
        <a href="#destinations">Destinations</a>
        <a href="#contact">Contact</a>
        <a href="#reserve" className={style.reserve}>Réserver</a>
      </nav>
    </header>
  );
}

export default Header;
