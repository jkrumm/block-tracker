import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    Button,
    IconButton,
    Drawer,
    Link,
    MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, {useState, useEffect} from "react";
import {Router, Link as RouterLink} from "react-router-dom";

const headersData = [
    {
        label: "Dashboard",
        href: "/",
    },
    {
        label: "Add Tracker",
        href: "/add",
    },
    {
        label: "My Account",
        href: "/account",
    },
    {
        label: "Log Out",
        href: "/logout",
    },
];

const useStyles = makeStyles(() => ({
    header: {
        backgroundColor: "lightgray",
        paddingRight: "79px",
        paddingLeft: "118px",
        "@media (max-width: 1000px)": {
            paddingLeft: 0,
        },
    },
    logo: {
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 600,
        color: "black",
        textAlign: "left",
    },
    menuButton: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        size: "18px",
        marginLeft: "38px",
        color: "black"
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
    drawerContainer: {
        padding: "20px 30px",
    },
}));

export default function Header() {
    const {header, logo, menuButton, toolbar, drawerContainer} = useStyles();

    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
    });

    const {mobileView, drawerOpen} = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 1000
                ? setState((prevState) => ({...prevState, mobileView: true}))
                : setState((prevState) => ({...prevState, mobileView: false}));
        };

        setResponsiveness();

        window.addEventListener("resize", () => setResponsiveness());

        return () => {
            window.removeEventListener("resize", () => setResponsiveness());
        };
    }, []);

    const displayDesktop = () => {
        return (
            <Toolbar className={toolbar}>
                {blockTrackerLogo}
                <div>{getMenuButtons()}</div>
            </Toolbar>
        );
    };

    const displayMobile = () => {
        const handleDrawerOpen = () =>
            setState((prevState) => ({...prevState, drawerOpen: true}));
        const handleDrawerClose = () =>
            setState((prevState) => ({...prevState, drawerOpen: false}));

        return (
            <Toolbar>
                <IconButton
                    {...{
                        edge: "start",
                        color: "inherit",
                        "aria-label": "menu",
                        "aria-haspopup": "true",
                        onClick: handleDrawerOpen,
                    }}
                >
                    <MenuIcon/>
                </IconButton>

                <Drawer
                    {...{
                        anchor: "left",
                        open: drawerOpen,
                        onClose: handleDrawerClose,
                    }}
                >
                    <div className={drawerContainer}>{getDrawerChoices()}</div>
                </Drawer>

                <div>{blockTrackerLogo}</div>
            </Toolbar>
        );
    };

    const getDrawerChoices = () => {
        return headersData.map(({label, href}) => {
            return (
                <Link
                    {...{
                        component: RouterLink,
                        to: href,
                        color: "inherit",
                        style: {textDecoration: "none"},
                        key: label,
                    }}
                >
                    <MenuItem>{label}</MenuItem>
                </Link>
            );
        });
    };

    const blockTrackerLogo = (
        <Typography variant="h6" component="h1" className={logo}>
            Block-Tracker
        </Typography>
    );

    const getMenuButtons = () => {
        return headersData.map(({label, href}) => {
            return (
                <Button
                    {...{
                        key: label,
                        color: "inherit",
                        to: href,
                        component: RouterLink,
                        className: menuButton,
                    }}
                >
                    {label}
                </Button>
            );
        });
    };

    return (
        <header>
            <AppBar className={header}>
                {mobileView ? displayMobile() : displayDesktop()}
            </AppBar>
        </header>
    );
}