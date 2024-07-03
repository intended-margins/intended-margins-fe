import React, { useState } from "react";
import { Link } from "react-router-dom";

import { GoPerson } from "react-icons/go";
import { HiOutlineBars3 } from "react-icons/hi2";
import HomeIcon from "@mui/icons-material/Home";
import Weekend from "@mui/icons-material/Weekend";
import Forum  from "@mui/icons-material/Forum";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

import {
    Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText
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
            icon: <Weekend/>
        },
        {
            text: "커뮤니티",
            icon: <Forum/>
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
                <Link to="/">메인</Link>
                <a href="">라이프</a>
                <Link to="/community">커뮤니티</Link>
                <a href="">
                    <ShoppingCartRoundedIcon className="navbar-cart-icon" />
                </a>
                <button className="primary-button">로그인</button>
            </div>
            <div className="navbar-menu-container">
                <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
            </div>
            <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
                <Box sx={{ width:250 }} role="presentation" onClick={() => setOpenMenu(false)} onKeyDown={() => setOpenMenu(false)}>
                    <List>
                        {menuOptions.map((item) => (
                            <ListItem key = {item.text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </nav>
    );
};

export default Navbar;