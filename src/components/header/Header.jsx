import SearchBar from "../searchBar/SearchBar";
import s from "./style.module.css"

function Header({ searchTerm, setSearchTerm }) {
    return (
      <header className={s.header}>
        
        <nav>
          <ul className={s.navList}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <SearchBar setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      </header>
    );
  }
  export default Header;