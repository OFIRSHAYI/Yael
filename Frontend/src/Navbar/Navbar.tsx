import { FC } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { routes } from "../Router";
import { Box, Typography } from "@mui/material";
import "./navbar.css"
import { BackgroundMusic } from "./Music";
import { ToastContainer } from 'react-toastify';

export const Navbar: FC = () => {

    return (
        <Box className="body" sx={{
            scrollbarWidth: "none",
            display: "flex",
            alignItems: "center",
            flexDirection: "column"
        }}>
            <Box className="navbar">
                {
                    routes.filter((route) => route.isShown)
                        .map((route) => (
                        <NavLink to={route.path} className='link' key={route.name}>
                             {({ isActive }) => (
                                <Typography
                                    textAlign="center"
                                    className={['link', isActive ? 'active' : ''].join(' ')}
                                >
                                    {route.name}
                                </Typography>
                            )}
                        </NavLink>
                    ))
                }
            </Box>
            <Outlet />
            <BackgroundMusic />
            <ToastContainer />
        </Box>
    )
}
