import { useEffect, useState } from "react";
import logoPath from "../../assets/logo.svg";
import "./style.css";

export const WelcomeAnim = () => {
    const [hasAnimScreen, setAnimScreen] = useState(true);

    useEffect(() => {
        sessionStorage.setItem("hasAnim", "false");
    setTimeout(()=> {
        setAnimScreen(false);
    }, 1000);
    }, []);

    return (
        <div className={"welcome-anim" + (hasAnimScreen ? "" : " welcome-anim_hidden")}>
            <div className="">
                <img src={logoPath} alt="keystone" />
                <div className="welcome-animation__title">
                    отражение<br /> успеха
                </div>
            </div>
        </div>
    );
};

