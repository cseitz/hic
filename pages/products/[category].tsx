import { Box, Grid, Paper, Rating, Skeleton, Typography, Pagination } from "@mui/material";
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useRouter } from "next/router";

export default function ProductCategory() {
  const router = useRouter();
  const { category } = router.query;
  return (
    <Box sx={{mx: 'auto', width: 'min(90vw)', textAlign: 'center', p: 2, mb: 10  }}>
      <Typography variant="h4">Products: {category}</Typography>
      <Typography variant="h6">'8' search results for {category}</Typography>
      <Grid container sx={{margin: 'auto', justifyContent: 'center'}} rowSpacing={6} columnSpacing={2}>
        <Grid item xs={6}>
            <Product/>
        </Grid>
        <Grid item xs={6}>
            <Product/>
        </Grid>
        <Grid item xs={6}>
            <Product/>
        </Grid>
        <Grid item xs={6}>
            <Product/>
        </Grid>
      </Grid>
      <Pagination count={2} color="primary"/>
    </Box>
  );
}
function Product() {
    return <Paper sx={{ borderRadius: 2, mb: 2 }}>
        <Grid container>
            <Grid item xs={4} xl={3}>
                <Skeleton variant="rectangular" width={160} height={160} />
            </Grid>
            <Grid item xs={8} xl={9} sx={{ textAlign: 'left', px: 2, pt: 2 }}>
                <Grid container>
                    <Grid item xs={11}>
                        <Box sx={{ minHeight: '60px', mb: 2 }}>
                            <Typography component="div" variant="h5">
                                PRODUCT NAME
                            </Typography>
                            <Rating name="read-only" value={3.5} readOnly />
                        </Box>

                    </Grid>
                    <Grid item xs={1}>
                    </Grid>
                    <Grid item xs={11}>
                        <Typography variant="h6" sx={{ textAlign: 'left' }}>Price: $0000.00</Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <AddBoxIcon sx={{ float: 'right', cursor: 'pointer', fontSize: 'large' }} />
                    </Grid>
                </Grid>

                <Box sx={{ textAlign: 'left', mt: 1.5 }}>

                </Box>
            </Grid>
        </Grid>
    </Paper>;
}
