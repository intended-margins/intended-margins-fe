import React, { useState } from "react";

import { GoPerson } from "react-icons/go";
import { HiOutlineBars3 } from "react-icons/hi2";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PhoneRounded  from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

import {
    Box, Drawer, ListItem, ListItemButton, ListItemIcon, ListItemText
} from "@mui/material";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";


const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [
        {
            text: "메인",
            icon: <HomeIcon/>
        },
        {
            text: "라이프",
            icon: <InfoIcon/>
        },
        {
            text: "커뮤니티",
            icon: <PhoneRounded/>
        },
        {
            text: "상품",
            icon: <ShoppingCartRoundedIcon/>
        },
    ]

    return (
        <nav>
            <div className="primary-heading">
                <h1>여 백</h1>
            </div>
            <div className="navbar-links-container">
                <a href="">메인</a>
                <a href="">라이프</a>
                <a href="">커뮤니티</a>
                <a href="">
                    <ShoppingCartRoundedIcon className="navbar-cart-icon" />
                </a>
                <button className="primary-button">로그인</button>
            </div>
            <div className="navbar-menu-container">
                <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
            </div>
        </nav>
    );
};

export default Navbar;