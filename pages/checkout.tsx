import { Badge, Box, Button, ButtonGroup, Card, CardContent, CardMedia, Grid, IconButton, Paper, Skeleton, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import React from "react";

export default function Checkout() {
    const [count, setCount] = React.useState(1);
    return <Box sx={{ mx: 'auto', width: 'min(90vw)', textAlign: 'center', p: 2 }}>
        <Typography variant="h2" style={{ textAlign: 'center', fontWeight: 'bold', marginTop: 2 }}>Checkout</Typography>
        <hr />
        <Grid container spacing={2} sx={{ margin: 'auto', justifyContent: 'center' }}>
            {/* Order Items */}
            <Grid item xs={12} sm={6}>
                <Box sx={{ border: 2, borderRadius: 2, height: '80vh', p: 1 }}>
                    {/* A PRODUCT IN THE CART */}
                    <ProductEntry />
                    <ProductEntry />
                </Box>
            </Grid>
            {/* Order Summary BOX */}
            <Grid item xs={18} sm={4}>
                <Box sx={{ border: 2, borderRadius: 2, height: '70vh' }}>
                    <Typography variant="h3" sx={{ textAlign: 'left', p: 2 }}>Order Summary:</Typography>
                    <Box sx={{ borderBottom: '4px solid' }}></Box>
                    <Grid container spacing={1}>
                        {/* ITEMS */}
                        <Grid item xs={6} sm={8}>
                            <Typography variant="h4" sx={{ textAlign: 'left', p: 1 }}>Items:</Typography>
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <Typography variant="h4" sx={{ textAlign: 'right', p: 1 }}>$0000.00</Typography>
                        </Grid>
                        {/* Shipping and handling */}
                        <Grid item xs={6} sm={8}>
                            <Typography variant="h4" sx={{ textAlign: 'left', p: 1 }}>Shipping & Handling:</Typography>
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <Typography variant="h4" sx={{ textAlign: 'right', p: 1 }}>$0000.00</Typography>
                        </Grid>
                        {/* Discount */}
                        <Grid item xs={6} sm={8}>
                            <Typography variant="h4" sx={{ textAlign: 'left', p: 1 }}>Discount:</Typography>
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <Typography variant="h4" sx={{ textAlign: 'right', p: 1 }}>$0000.00</Typography>
                        </Grid>
                        <br /><br /><br /><br /><br /><br />
                        {/* Total Before Tax */}
                        <Grid item xs={6} sm={8}>
                            <Typography variant="h4" sx={{ textAlign: 'left', p: 1 }}>Total before Tax:</Typography>
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <Typography variant="h4" sx={{ textAlign: 'right', p: 1 }}>$0000.00</Typography>
                        </Grid>
                        {/* Estimated Tax */}
                        <Grid item xs={6} sm={8}>
                            <Typography variant="h4" sx={{ textAlign: 'left', p: 1 }}>Estimated Tax:</Typography>
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <Typography variant="h4" sx={{ textAlign: 'right', p: 1 }}>$0000.00</Typography>
                        </Grid>
                        {/* LINE */}
                        <Grid item xs={6} sm={12}>
                            <Box sx={{ borderBottom: '4px solid' }}></Box>
                        </Grid>
                        {/* ORDER TOTAL */}
                        <Grid item xs={6} sm={6}>
                            <Typography variant="h3" sx={{ textAlign: 'left', p: 1, pt: 2 }}>Order Total:</Typography>
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <Typography variant="h3" sx={{ textAlign: 'right', p: 1, pt: 2 }}>$0000.00</Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ height: '10vh', p: 1 }}>
                    <Button variant="contained" color="success" sx={{ height: '8vh', width: '500px', margin: 'auto', }}>
                        <Typography variant="h2">Checkout</Typography>
                    </Button>
                </Box>
            </Grid>
        </Grid>
    </Box>
}


function ProductEntry() {
    return <Paper sx={{ borderRadius: 2, m: 2 }}>
        <Grid container>
            <Grid item xs={4} xl={3}>
                <Skeleton variant="rectangular" width={151} height={140} />
            </Grid>
            <Grid item xs={8} xl={9} sx={{ textAlign: 'left', p: 2 }}>
                <Typography component="div" variant="h5">
                    PRODUCT NAME
                </Typography>
                <Typography sx={{ alignText: 'left' }}>PRODUCT DESCRIPTION</Typography>
                <Box sx={{ textAlign: 'left', mt: 1.5 }}>
                    <ButtonGroup size="small" sx={{ textAlign: 'left' }}>
                        <Button
                            size="small"
                            aria-label="reduce"

                        >
                            <RemoveIcon fontSize="small" />
                        </Button>
                        <Button size="small" disableTouchRipple disableElevation>1</Button>
                        <Button
                            aria-label="increase"

                        >
                            <AddIcon fontSize="small" />
                        </Button>
                    </ButtonGroup>
                </Box>
            </Grid>
        </Grid>
    </Paper>;
}