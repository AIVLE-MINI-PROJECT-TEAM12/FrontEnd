import React from "react";
import logo from "./logo.png";

const Logo = () => (
    <img
    src={logo}
    alt="걷기가 서재 로고"
    style={{
        position: "absolute",
        top: "24px",
        right: "70px",
        width: "170px",
        zIndex: 1000
        }}
    />
);

export default Logo;