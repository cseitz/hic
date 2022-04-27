import { Box, Grid, Paper, Rating, Skeleton, Typography, Pagination, Link } from "@mui/material";
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useRouter } from "next/router";

export default function ProductCategory() {
  const router = useRouter();
  const { category } = router.query;
  return (
    <Box sx={{mx: 'auto', width: 'min(90vw)', textAlign: 'center', p: 2, mb: 10  }}>
      <Typography variant="h4">Product Categories: {category}</Typography>
      <Grid container sx={{margin: 'auto', justifyContent: 'center'}} rowSpacing={6} columnSpacing={2}>
        
        <Grid item xs={6}>
             <Link href="/products/category">
             <Category/>
             </Link>
        </Grid>

        <Grid item xs={6}>
        <Link href="/products/category">
             <Category/>
             </Link>
        </Grid>
        <Grid item xs={6}>
        <Link href="/products/category">
             <Category/>
             </Link>
        </Grid>
        <Grid item xs={6}>
        <Link href="/products/category">
             <Category/>
             </Link>
        </Grid>
      </Grid>
      <Box justifyContent="center" display="flex">
      <Pagination  count={2} color="primary"/>
      </Box>
    </Box>
  );
}
function Category() {
    return <Paper sx={{ borderRadius: 2, mb: 2 }}>
        <Grid container sx={{textAlign: "center"}}>
            <Grid item xs={4} xl={3}>
                <Skeleton variant="rectangular" width={160} height={160} />
            </Grid>
            <Grid item xs={8} xl={9} sx={{ textAlign: 'left', px: 2, pt: 2 }}>
                <Grid container>
                    <Grid item xs={11}>
                        <Box sx={{ textAlign: "center", minHeight: '60px', mb: 2, marginTop: 4 }}>
                            <Typography component="div" variant="h3">
                                Category
                            </Typography>
                        </Box>

                    </Grid>
                    <Grid item xs={1}>
                        <AddBoxIcon sx={{ float: 'right', cursor: 'pointer', fontSize: 'large' }} />
                    </Grid>
                </Grid>

                <Box sx={{ textAlign: 'Center', mt: 1.5 }}>

                </Box>
            </Grid>
        </Grid>
    </Paper>;
}