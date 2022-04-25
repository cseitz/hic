import { Box, Button, Divider, Grid, Typography, useMediaQuery } from "@mui/material";
import Link from "next/link";
import { MaxWidth } from "./_app";


export default function Homepage() {

    return <Box sx={{ p: 2 }}>
        <Section1 />
        <Divider orientation="horizontal" />
        <Section2 />
        <Divider orientation="horizontal" />
        <Section3 />

    </Box>
}


//** Section 1 */
function Section1() {
    const isMobile = useMediaQuery('(max-width:600px)');
    const cols = isMobile ? 12 : 6;
    return <Box sx={{ mb: isMobile ? 10 : 3, ...MaxWidth }}>
        <Grid container>
            <Grid item xs={cols} sx={{ textAlign: 'center', p: 2 }}>
                <img src="https://capstone.lol/assets/logo.png" style={{ height: '100%', maxHeight: '250px', marginLeft: 'auto', marginRight: 'auto' }} />
            </Grid>
            <Grid item xs={cols} sx={{ textAlign: isMobile ? 'center' : 'left', p: 2 }}>
                <Box sx={{ maxWidth: '800px' }}>
                    <Typography variant="h3" sx={{ py: 2 }}>Company Name</Typography>
                    <Typography variant="h6">
                        Esse mollit nostrud enim elit irure eiusmod magna incididunt minim officia cillum aliquip.
                        Nostrud aute qui ad quis adipisicing qui sint occaecat est elit esse irure irure incididunt.
                    </Typography>
                    <Link href="/products">
                        <Button variant="contained" sx={{ mt: 3, px: 5 }}>
                            <Typography variant="h6">
                                View Products
                            </Typography>
                        </Button>
                    </Link>
                </Box>



            </Grid>
        </Grid>
    </Box>
}

//** Section 2 */
function Section2() {
    const isMobile = useMediaQuery('(max-width:600px)');
    return <Box sx={{ my: 5, ...MaxWidth }}>
        <Grid container>
            <Grid item xs={isMobile ? 12 : 3} sx={{ textAlign: 'center' }}>
                <img src="https://capstone.lol/assets/logo.png" style={{ maxWidth: '100%', height: '100%', maxHeight: '200px', marginLeft: 'auto', marginRight: 'auto' }} />
            </Grid>
            <Grid item xs={isMobile ? 12 : (12 - 3)} sx={{ textAlign: 'center' }}>
                <Typography variant="h4" sx={{ my: 2 }}>
                    Product Name is on Sale or whatever
                </Typography>
                <Typography>
                    Nisi minim amet elit elit nostrud nulla velit aute ullamco duis ut consectetur ad.
                    Incididunt tempor non adipisicing sit dolore sint laboris esse proident occaecat mollit nostrud ex.
                    Reprehenderit mollit do Lorem dolor laborum ad aute pariatur qui.
                    Reprehenderit eu nostrud esse culpa ullamco ipsum ipsum ut nisi est sint.
                    Qui cillum est sit cupidatat deserunt magna minim eiusmod.
                </Typography>
                <Grid container sx={{ my: 2 }}>
                    {[
                        <Grid item xs={isMobile ? 12 : 4}>
                            <Box sx={{ float: isMobile ? undefined : 'right', mx: 4, mt: isMobile ? 4 : 0, }}>
                                <Box sx={{ mb: 1 }}>
                                    <Link href="/product/0">
                                        <Button variant="contained">
                                            View Product
                                        </Button>
                                    </Link>
                                </Box>
                                <Typography>
                                    Offer ends XX/XX/XXX
                                </Typography>
                            </Box>

                        </Grid>,
                        <Grid item xs={isMobile ? 12 : (12 - 4)}>
                            <Typography sx={{ textAlign: isMobile ? 'center' : 'left', maxWidth: '700px' }}>
                                Non exercitation reprehenderit exercitation amet.
                                Mollit est ullamco non qui dolor sit.
                                Laboris fugiat reprehenderit eu excepteur consectetur proident consequat veniam eiusmod pariatur.
                            </Typography>
                        </Grid>
                    ][isMobile ? 'reverse' : 'slice']()}
                </Grid>
            </Grid>
        </Grid>
    </Box>
}

//** Section 3 */
function Section3() {
    const isMobile = useMediaQuery('(max-width:600px)');
    if (isMobile) return <>
        <About />
        <Divider orientation="horizontal" />
        <Support />
    </>;
    return <Grid container sx={{ ...MaxWidth }}>
        <Grid item xs={5.25}>
            <About />
        </Grid>
        <Grid item xs={0.5}>
            <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={5.25}>
            <Support />
        </Grid>
    </Grid>
}

function About() {
    return <Box sx={{ textAlign: 'center', p: 2, maxWidth: '650px', mx: 'auto', my: 3 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>About Us</Typography>
        <Typography>
            Et aliquip consectetur est incididunt esse occaecat incididunt in sint cupidatat.
            Mollit eiusmod tempor culpa occaecat est non ipsum esse ipsum ut ipsum.
            Consequat in aliqua veniam consequat magna aliqua proident nisi amet duis mollit ex enim.
            Do est adipisicing ullamco excepteur proident laboris fugiat magna aliquip.
        </Typography>
        <Link href="/about">
            <Button variant="contained" sx={{ mt: 2 }}>
                Read More
            </Button>
        </Link>
    </Box>
}

function Support() {
    return <Box sx={{ textAlign: 'center', p: 2, maxWidth: '650px', mx: 'auto', my: 3 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>Need Help?</Typography>
        <Typography>
            Elit incididunt ex laboris consectetur pariatur aute incididunt quis esse ut id aliqua reprehenderit.
            Duis adipisicing veniam exercitation in id ullamco commodo.
            Tempor dolor consequat duis ut laboris cillum ad dolor.
            Id voluptate laboris eu aliqua ea consectetur occaecat excepteur ut ullamco magna.
        </Typography>
        <Link href="/support">
            <Button variant="contained" sx={{ mt: 2 }}>
                Contact Support
            </Button>
        </Link>
    </Box>
}