import { Box, Button, Divider, Grid, Rating, Typography, useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";
import { Product } from "pages/products/[category]";
import { MaxWidth } from "pages/_app";

export default function ProductView() {
    const isMobile = useMediaQuery('(max-width:600px)');
    return <Box sx={{ p: 2 }}>
        <Grid container sx={{ ...MaxWidth, p: isMobile ? 1 : 5 }}>
            <Grid item xs={!isMobile ? 6 : 12}>
                <Gallery />
            </Grid>
            <Grid item xs={!isMobile ? 6 : 12} sx={{ mt: isMobile ? 5 : 0 }}>
                <Details />
            </Grid>
        </Grid>
        <Specifications />
        <Divider orientation="horizontal" />
        <Recommendations />
    </Box>
}


function Details() {
    const router = useRouter();
    const id = Number(router?.query?.id || 0);
    const isMobile = useMediaQuery('(max-width:600px)');
    return <Box sx={{ ml: isMobile ? 0 : 5 }}>
        <Typography variant={isMobile ? 'h4' : 'h4'}>Product #{id}</Typography>
        <Grid container>
            <Grid item xs={isMobile ? 6 : 3}>
                <Box>
                    <Rating value={3.5} precision={0.5} readOnly />
                </Box>
                <Box>
                    <Typography variant="h5">$0000.00</Typography>
                </Box>
            </Grid>
            <Grid item xs={12 - (isMobile ? 6 : 3)}>
                <Box sx={{ display: 'flex', height: '100%', alignItems: 'center' }}>
                    <Button variant="contained" sx={{ height: 40 }}>
                        Add to Cart
                    </Button>
                </Box>
            </Grid>
        </Grid>
        <Typography sx={{ my: 2 }}>
            Commodo officia incididunt pariatur pariatur mollit non excepteur dolore minim elit.
            Enim et do qui cupidatat cillum sint nostrud in qui ipsum dolore.
            Occaecat officia ut exercitation exercitation dolor ipsum elit voluptate nostrud elit qui.
            Deserunt qui incididunt ut Lorem cupidatat.
        </Typography>
        <Typography sx={{ my: 2 }}>
            Qui cillum Lorem nisi magna ullamco ea sunt culpa enim esse id non.
            Incididunt deserunt reprehenderit mollit incididunt consequat elit non ad culpa amet amet quis labore.
        </Typography>
    </Box>
}

function Gallery() {
    const isMobile = useMediaQuery('(max-width:600px)');
    return <Box sx={{ mr: isMobile ? 0 : 5 }}>
        <Grid container>
            <Grid item xs={isMobile ? 3 : 4}>
                <Box sx={{
                    maxWidth: 100,
                    float: 'right',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '20px',
                    img: {
                        height: 100,
                        maxHeight: '12vmin',
                        cursor: 'pointer'
                    }
                }}>
                    <img src="https://capstone.lol/assets/logo.png" />
                    <img src="https://capstone.lol/assets/logo.png" />
                    <img src="https://capstone.lol/assets/logo.png" />
                    <Button variant="contained" sx={{ fontSize: isMobile ? 10 : undefined }}>View All</Button>
                </Box>
            </Grid>
            <Grid item xs={12 - (isMobile ? 3 : 4)}>
                <Box sx={{ ml: 5, height: '100%', display: 'flex', alignItems: 'center' }}>
                    <img src="https://capstone.lol/assets/logo.png" style={{ height: '100%', maxHeight: '40vmin' }} />
                </Box>
            </Grid>
        </Grid>
    </Box>
}

function Specifications() {
    const isMobile = useMediaQuery('(max-width:600px)');
    return <Box sx={{ ...MaxWidth, pl: isMobile ? 1 : 15, pr: isMobile ? 1 : 5, my: 5 }}>
        <Typography variant="h5">Product Specifications</Typography>
        <Box sx={{
            py: 1,
            '& p': {
                marginBottom: 2,
            }
        }}>
            <Typography>
                Pariatur laboris eiusmod laboris minim duis velit occaecat aliquip dolore ut excepteur.
                Velit ipsum dolor sit proident cupidatat excepteur.
                Ut esse laborum magna ad ea ad voluptate officia.
                Voluptate anim et ea aliquip nulla do do eiusmod enim nulla velit ad.
                Qui laboris nisi non ullamco quis aute.
                Laborum minim excepteur excepteur ipsum elit amet nostrud officia officia ad. Ex velit id ut ea.
                Tempor dolor exercitation ullamco velit duis est cillum mollit aute aliquip voluptate adipisicing.
                Deserunt commodo aute eu consequat occaecat ex minim cupidatat esse consectetur veniam exercitation officia.
                Esse fugiat nostrud nostrud commodo ea labore.
            </Typography>
            <Typography>
                Incididunt nostrud occaecat enim consequat ex fugiat nisi nisi fugiat elit aliquip sint.
                Consectetur minim culpa sunt est.
                Fugiat ullamco commodo laborum enim.
                Labore irure eiusmod culpa elit dolor enim cupidatat voluptate dolore adipisicing anim.
                In nisi minim fugiat esse ullamco velit nostrud est ad.
                Elit excepteur eiusmod aute qui non voluptate.
                Irure id est reprehenderit magna elit ad laborum aliqua nostrud do ut.
                Proident sunt aliqua pariatur mollit id laboris.
                Elit veniam consectetur irure dolore nisi laboris.
            </Typography>
        </Box>

    </Box>
}

function Recommendations() {
    const isMobile = useMediaQuery('(max-width:600px)');
    const ProductEntry = (props: Parameters<typeof Product>[0]) => (
        <Grid item xs={5.8} sx={{ pb: 2 }}>
            <Product {...props} />
        </Grid>
    )
    return <Box sx={{ ...MaxWidth, pl: isMobile ? 1 : 15, pr: isMobile ? 1 : 5, my: 3 }}>
        <Typography variant="h5">You might also be interested in...</Typography>
        <Grid container sx={{ justifyContent: 'space-between', mt: 2 }}>
            <ProductEntry id={'0'} />
            <ProductEntry id={'1'} />
            <ProductEntry id={'2'} />
            <ProductEntry id={'3'} />
        </Grid>
    </Box>
}