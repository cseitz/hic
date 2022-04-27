import { Badge, Box, Button, ButtonGroup, Card, CardContent, CardMedia, Divider, Grid, IconButton, Paper, Skeleton, Tooltip, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import React from "react";

export default function Checkout() {
    const [count, setCount] = React.useState(1);
    return <Box sx={{ mx: 'auto', width: 'min(90vw)', textAlign: 'center', p: 2, mb: 10 }}>
        <Typography variant="h4" sx={{ textAlign: 'center', my: 3 }}>Checkout</Typography>
        {/* <Divider orientation="horizontal" /> */}
        <Grid container spacing={2} sx={{ margin: 'auto', justifyContent: 'center' }}>
            {/* Order Items */}
            <Grid item xs={12} sm={6}>
                <Box sx={{ borderRadius: 2, height: '80vh' }}>
                    {/* A PRODUCT IN THE CART */}
                    <ProductEntry />
                    <ProductEntry />
                </Box>
            </Grid>
            {/* Order Summary BOX */}
            <Grid item xs={18} sm={4}>
                <Paper sx={{ borderRadius: 2, height: '70vh', px: 2 }}>
                    <Typography variant="h5" sx={{ textAlign: 'center', p: 2 }}>Order Summary</Typography>
                    <Divider orientation="horizontal" />
                    <Grid container spacing={1} sx={{ pt: 1 }}>
                        {/* ITEMS */}
                        <Grid item xs={6} sm={8}>
                            <Typography variant="h5" sx={{ textAlign: 'left', p: 1 }}>Items:</Typography>
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <Typography variant="h5" sx={{ textAlign: 'right', p: 1 }}>$0000.00</Typography>
                        </Grid>
                        {/* Shipping and handling */}
                        <Grid item xs={6} sm={8}>
                            <Typography variant="h5" sx={{ textAlign: 'left', p: 1 }}>Shipping & Handling:</Typography>
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <Typography variant="h5" sx={{ textAlign: 'right', p: 1 }}>$0000.00</Typography>
                        </Grid>
                        {/* Discount */}
                        <Grid item xs={6} sm={8}>
                            <Typography variant="h5" sx={{ textAlign: 'left', p: 1 }}>Discount:</Typography>
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <Typography variant="h5" sx={{ textAlign: 'right', p: 1 }}>$0000.00</Typography>
                        </Grid>
                        <br /><br /><br /><br /><br /><br />
                        {/* Total Before Tax */}
                        <Grid item xs={6} sm={8}>
                            <Typography variant="h5" sx={{ textAlign: 'left', p: 1 }}>Total before Tax:</Typography>
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <Typography variant="h5" sx={{ textAlign: 'right', p: 1 }}>$0000.00</Typography>
                        </Grid>
                        {/* Estimated Tax */}
                        <Grid item xs={6} sm={8}>
                            <Typography variant="h5" sx={{ textAlign: 'left', p: 1 }}>Estimated Tax:</Typography>
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <Typography variant="h5" sx={{ textAlign: 'right', p: 1 }}>$0000.00</Typography>
                        </Grid>
                        {/* LINE */}
                        <Grid item xs={6} sm={12}>
                            <Divider orientation="horizontal" />
                        </Grid>
                        {/* ORDER TOTAL */}
                        <Grid item xs={6} sm={6}>
                            <Typography variant="h5" sx={{ textAlign: 'left', p: 1, pt: 2 }}>Order Total:</Typography>
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <Typography variant="h5" sx={{ textAlign: 'right', p: 1, pt: 2 }}>$0000.00</Typography>
                        </Grid>
                    </Grid>
                </Paper>
                <Box sx={{ my: 5 }}>
                    <Button variant="contained" color="success" sx={{ margin: 'auto', py: 1, px: 5 }}>
                        <Typography variant="h5">Checkout</Typography>
                    </Button>
                </Box>
            </Grid>
        </Grid>
    </Box>
}


function ProductEntry() {
    return <Paper sx={{ borderRadius: 2, mb: 2 }}>
        <Grid container>
            <Grid item xs={4} xl={3}>
                <Skeleton variant="rectangular" width={151} height={140} />
            </Grid>
            <Grid item xs={8} xl={9} sx={{ textAlign: 'left', px: 2, pt: 2 }}>
                <Grid container>
                    <Grid item xs={11}>
                        <Box sx={{ minHeight: '60px', mb: 2 }}>
                            <Typography component="div" variant="h5">
                                PRODUCT NAME
                            </Typography>
                            <Typography sx={{ alignText: 'left' }}>PRODUCT DESCRIPTION</Typography>
                        </Box>

                    </Grid>
                    <Grid item xs={1}>
                        <Tooltip title="Remove from Cart" disableInteractive>
                            <DeleteIcon sx={{ float: 'right', cursor: 'pointer' }} />
                        </Tooltip>
                    </Grid>
                    <Grid item xs={6}>
                        <ButtonGroup size="small" sx={{ textAlign: 'left' }}>
                            <Button size="small" aria-label="reduce">
                                <RemoveIcon fontSize="small" />
                            </Button>
                            <Button size="small" disableTouchRipple disableElevation>1</Button>
                            <Button aria-label="increase">
                                <AddIcon fontSize="small" />
                            </Button>
                        </ButtonGroup>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h6" sx={{ textAlign: 'right', pr: 2 }}>Price: $0000.00</Typography>
                    </Grid>
                </Grid>

                <Box sx={{ textAlign: 'left', mt: 1.5 }}>

                </Box>
            </Grid>
        </Grid>
    </Paper>;
}

/*
<Box sx={{ border: 2, borderRadius: 2 }}>
        <Card sx={{ display: 'flex' }}>
            <Skeleton variant="rectangular" width={151} height={140} />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: 'auto' }}>

                </CardContent>
            </Box>
            <Box sx={{ display: 'flex', pl: 50, pb: 1, pt: 1 }}>
                <DeleteIcon sx={{ alignItems: 'right' }} />
            </Box>
        </Card>
    </Box>
    */