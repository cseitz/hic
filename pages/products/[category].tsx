import { Box, Grid, Paper, Rating, Skeleton, Typography, Pagination, Tooltip } from "@mui/material";
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useRouter } from "next/router";
import { MaxWidth } from "pages/_app";
import Link from "next/link";
import { AddShoppingCart } from "@mui/icons-material";

export default function ProductCategory() {
    const router = useRouter();
    const { category } = router.query;
    const ProductEntry = (props: Parameters<typeof Product>[0]) => (
        <Grid item xs={5}>
            <Product {...props} />
        </Grid>
    )
    return (
        <Box sx={{ textAlign: 'center', p: 2, mb: 10, mt: 5, ...MaxWidth }}>
            <Typography variant="h4">Products</Typography>
            <Typography variant="h6">16 search results for '{(category as string || '').split('-').join(' ')}'</Typography>
            <Grid container sx={{ margin: 'auto', justifyContent: 'center', gap: 5, my: 10 }}>
                <ProductEntry id={'0'} />
                <ProductEntry id={'1'} />
                <ProductEntry id={'2'} />
                <ProductEntry id={'3'} />
                <ProductEntry id={'4'} />
                <ProductEntry id={'5'} />
                <ProductEntry id={'6'} />
                <ProductEntry id={'7'} />
            </Grid>
            <Box justifyContent="center" display="flex">
                <Pagination count={2} color="primary" />
            </Box>
        </Box>
    );
}

export function Product(props: { id: string }) {
    return <Link href={'/product/' + props.id}>
        <Paper sx={{ borderRadius: 2, mb: 2, textDecoration: 'none', cursor: 'pointer' }}>
            <Grid container>
                <Grid item xs={4} xl={3}>
                    <Skeleton variant="rectangular" width={160} height={160} />
                </Grid>
                <Grid item xs={8} xl={9} sx={{ textAlign: 'left', px: 2, pt: 2 }}>
                    <Grid container sx={{ pl: 3 }}>
                        <Grid item xs={11}>
                            <Box sx={{ minHeight: '60px', mb: 2 }}>
                                <Typography component="div" variant="h5">
                                    PRODUCT NAME
                                </Typography>
                                <Rating name="read-only" value={3.5} precision={0.5} readOnly />
                            </Box>

                        </Grid>
                        <Grid item xs={1}>
                            <Tooltip title="Add to Cart" disableInteractive>
                                <AddShoppingCart fontSize={"large"} sx={{ float: 'right', cursor: 'pointer', mr: 2, mt: 2, opacity: 0.8 }} />
                            </Tooltip>
                        </Grid>
                        <Grid item xs={11}>
                            <Typography variant="h6" sx={{ textAlign: 'left' }}>Price: $0000.00</Typography>
                        </Grid>
                        <Grid item xs={1}>
                        </Grid>
                    </Grid>

                    <Box sx={{ textAlign: 'left', mt: 1.5 }}>

                    </Box>
                </Grid>
            </Grid>
        </Paper>
    </Link>;
}
