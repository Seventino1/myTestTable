import React from "react";
import { WelcomeAnim } from "../components/WelcomeAnim/WelcomeAnim";
import { SearchComponent } from "../components/SearchComplonent/SearchComponent"

export const MainPage = () => {
    return (
        <div className="main-page">
            <WelcomeAnim />
            <div className="page-title"> Введите данные для уточнения вашего места за столом</div>
            <SearchComponent />
        </div>
    );
};