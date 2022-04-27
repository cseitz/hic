import { AddAlert, Facebook, Google, Notifications, Twitter, YouTube } from "@mui/icons-material";
import { Box, Button, ButtonGroup, Divider, Grid, IconButton, Tooltip, Typography, useMediaQuery } from "@mui/material";
import Link from "next/link";
import { MaxWidth } from "pages/_app";
import { Fragment, useEffect, useLayoutEffect, useRef, useState } from "react";
import { navigationLinks } from "./navbar";


export default function Footer() {
    const isMobile = useMediaQuery('(max-width:600px)');
    const details = useRef<any>(null);
    return <Box sx={{ minHeight: 100, mb: isMobile ? 35 : 0, p: 2 }}>
        <Divider orientation="horizontal" />
        <Grid container columns={isMobile ? 6 : 12} spacing={0} sx={{ my: 3, height: isMobile ? 180 : 100, ...MaxWidth }}>
            <Logo {...{ details }} />
            <Details {...{ details }} />
            {!isMobile && <Grid item xs={1} />}
            <Links />
        </Grid>
    </Box>
}

const screen = typeof window == 'undefined' ? { innerWidth: 1000 } : window;

function Logo({ details }: any) {
    const isMobile = useMediaQuery('(max-width:600px)');
    const ref = useRef<any>(null);
    const [height, setHeight] = useState('100%');
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        const listener = () => setCounter(Math.random());
        window?.addEventListener('resize', listener);
        return () => window?.removeEventListener('resize', listener);
    }, [setCounter])
    useLayoutEffect(() => {
        if (!details?.current) return;
        if (isMobile) return setHeight('100%');
        requestAnimationFrame(function () {
            console.log(details.current.offsetHeight)
            setHeight(details.current.offsetHeight + 'px');
            details.height = height;
        })

    }, [screen?.innerWidth, setHeight]);
    // console.log(height);
    return <Grid item xs={!isMobile ? 1.5 : 6} sx={{ height: '100%', textAlign: 'center' }}>
        <Box ref={ref} sx={{
            display: 'flex', justifyContent: isMobile ? 'center' : 'right', alignItems: 'center',
            maxHeight: '100%',
            height,
        }}>
            <img src="https://capstone.lol/assets/logo.png" style={{
                height: '100%',
                float: isMobile ? undefined : 'right',
                padding: 10, paddingRight: isMobile ? undefined : 20,
                paddingBottom: isMobile ? 25 : undefined,
            }} />
        </Box>

    </Grid>;
}


function Details({ details }: any) {
    const isMobile = useMediaQuery('(max-width:600px)');
    return <Grid item xs={!isMobile ? 4 : 6} sx={{ height: !isMobile ? '100%' : undefined, px: isMobile ? 2 : 0, textAlign: isMobile ? 'center' : undefined }}>
        <Box ref={details}>
            <Typography variant="h5">
                Shop Company LLC
            </Typography>
            <Typography>
                Enim cupidatat eiusmod adipisicing ipsum sunt voluptate aute in ipsum tempor.
                Magna veniam aliqua excepteur eiusmod nostrud aute voluptate aliqua labore tempor minim.
            </Typography>
        </Box>
    </Grid>
}

function Links() {
    const isMobile = useMediaQuery('(max-width:600px)');
    const links = navigationLinks.map((item, i) => {
        return <Fragment key={item.url}>
            <Link href={item.url}>
                <Button variant="text" sx={{ px: 2 }}>
                    {item.name}
                </Button>
            </Link>
            {i != navigationLinks.length - 1 && <Divider orientation="vertical" variant="middle" flexItem />}
        </Fragment>
    });
    const socials = ([
        { name: 'Facebook', icon: <Facebook /> },
        { name: 'Twitter', icon: <Twitter /> },
        { name: 'YouTube', icon: <YouTube /> },
        { name: 'Snapchat', icon: <Notifications /> },
        { name: 'Google', icon: <Google /> }
    ]).map((item, i) => {
        return <Tooltip title={item.name} key={item.name} disableInteractive>
            <IconButton>
                {item.icon}
            </IconButton>
        </Tooltip>
    });
    return <Grid item xs={isMobile ? 6 : 5} sx={{ height: !isMobile ? '100%' : undefined, pl: isMobile ? 2 : 0, pr: isMobile ? 2 : 10, mt: isMobile ? 2 : 0, }}>
        <Box sx={{ height: '100%', mt: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                {links}
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-around', my: isMobile ? 2 : 0, maxWidth: 500, mx: 'auto', pt: isMobile ? 0 : 0.5 }}>
                {socials}
            </Box>
        </Box>
    </Grid>
}