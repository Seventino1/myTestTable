import { useState } from "react";
import { Link } from "react-router-dom";
import lupaPath from "../../assets/lupa.svg";
import xPath from "../../assets/x.svg";
import "./style.css";
import Highlighter from "react-highlight-words";
import { USERS } from "../../users";

export const SearchComponent = () => {

    const [value, setValue] = useState("");
    const filteredUsers = USERS.filter(({ name })=>
    name.toLowerCase().includes(value.toLowerCase()));

    return (
        <div className="search-component">
            <div className="search-component__input-wrapper">
                <img src={lupaPath} alt="lupa" className="icon" />
                <input 
                placeholder="Familia Name"
                value={value}
                onChange={(e)=> setValue(e.target.value)}
                className="search-component__input"
                />
                <img src={xPath} alt="x" className="icon" onClick={()=> setValue("")} />
            </div>
            {value === "" && (
                <div className="search-component__info">
                    Если вы с гостем пришли, вы нахлебник, введите его имя
                </div>
            )}
            {value !== "" && (
                 <ul className="search-component__list">
          {filteredUsers.map(({ name, id }) => (
            <Link key={id} to={`/plan?id=${id}`} className="search-component__list-item">
              <li>
                <Highlighter searchWords={[value]} autoEscape={true} textToHighlight={name} />
              </li>
            </Link>
          ))}
          {filteredUsers.length === 0 && (
            <div className="search-component__empty-state">
              Гостей с таким именем не найдено <br />
              Проверьте введенные данные
            </div>
          )}
        </ul>
      )}
    </div>
  );
};