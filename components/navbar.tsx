import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Slide, Toolbar, Typography, useMediaQuery, useScrollTrigger } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Home, Menu } from "@mui/icons-material";
import { useRouter } from "next/router";
import Link from "next/link";


export const title = 'Website';
const items: {
    name: string;
    url: string;
    icon: any;
    showIcon?: 'left' | 'right';
    placement?: 'left' | 'right';
    visible?: (section?: 'navbar' | 'drawer') => boolean;
}[] = [
        {
            name: "Home",
            url: "/",
            icon: <Home />
        },
    ];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [visible, setVisible] = useState(false);
    const isMobile = useMediaQuery('(max-width:600px)');

    const router = useRouter();
    const lastRoute = useRef("");

    useEffect(() => {
        if (lastRoute.current != router.route) {
            lastRoute.current = router.route;
            if (open) {
                setOpen(false);
            }
        }
    }, [router.route, open, setOpen]);

    const openDrawer = () => {
        setOpen(true)
    }

    const styles = {
        button: {
            px: 2,
            mx: 0.5
        },
        drawer: {
            width: '100%',
            pl: 8
        }
    }

    // left-aligned links
    const navbarLinksLeft = items.filter(o => !o?.visible || o?.visible('navbar')).filter(o => o?.placement != 'right').map((x) =>
        <Link href={x.url} key={x.url}>
            <Button color='inherit' startIcon={x.showIcon == 'left' && x.icon} endIcon={x.showIcon == 'right' && x.icon} sx={{ ...styles.button }}>
                {x.name}
            </Button>
        </Link>
    );

    // right-aligned links
    const navbarLinksRight = items.filter(o => !o?.visible || o?.visible('navbar')).filter(o => o?.placement == 'right').map((x) =>
        <Link href={x.url} key={x.url}>
            <Button color='inherit' startIcon={x.showIcon == 'left' && x.icon} endIcon={x.showIcon == 'right' && x.icon} sx={{ ...styles.button }}>
                {x.name}
            </Button>
        </Link>
    );


    // navigation drawer links
    const drawerLinks = items.filter(o => !o?.visible || o?.visible('drawer')).map((x, index) =>
        <Link href={x.url} key={x.url}>
            <ListItem button sx={{ ...styles.drawer }}>
                <ListItemIcon>
                    {x.icon}
                </ListItemIcon>
                <ListItemText primary={x.name} />
            </ListItem>
        </Link>
    );

    return <>
        <HideOnScroll>
            <AppBar position="sticky" style={{ boxShadow: "0px 0px 0px 0px" }}>
                <Toolbar>
                    <IconButton
                        onClick={openDrawer}
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <Menu />

                    </IconButton>
                    <Box style={{ flexGrow: 2 }}>
                        {title && <Typography variant="h6" component="span" sx={{ verticalAlign: 'middle', mr: 2 }}>{title}</Typography>}
                        {!isMobile && navbarLinksLeft}
                    </Box>

                    {navbarLinksRight}

                </Toolbar>
            </AppBar>
        </HideOnScroll>

        <Drawer
            anchor='left'
            open={open}
            onClose={() => setOpen(false)}
        >
            <Box sx={{ width: 250, mt: 5 }}>
                <Typography variant="h6" sx={{ textAlign: 'center', mb: 3 }}>Navigation</Typography>
                <Divider orientation='horizontal' />
                <List>
                    {drawerLinks}
                </List>
            </Box>

        </Drawer>
    </>
}


function HideOnScroll(props: {
    window?: () => Window;
    children: React.ReactElement;
}) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}