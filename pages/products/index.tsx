import { Box, Grid, Paper, Rating, Skeleton, Typography, Pagination, Link } from "@mui/material";
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useRouter } from "next/router";

export default function ProductCategory() {
    const router = useRouter();
    const { category } = router.query;
    const CategoryEntry = (props: Parameters<typeof Category>[0]) => (
        <Grid item xs={5}>
            <Category {...props} />
        </Grid>
    )
    return (
        <Box sx={{ textAlign: 'center', p: 2, mb: 10 }}>
            <Typography variant="h4" sx={{ mt: 5 }}>What are you looking for?</Typography>
            <Grid container sx={{ margin: 'auto', justifyContent: 'center', gap: 5, my: 10 }}>
                <CategoryEntry name="Category" />
                <CategoryEntry name="Category" />
                <CategoryEntry name="Category" />
                <CategoryEntry name="Category" />
            </Grid>
            <Box justifyContent="center" display="flex">
                <Pagination count={2} color="primary" />
            </Box>
        </Box>
    );
}

function Category(props: { name: string }) {
    return <Link href={'/products/' + props.name.toLowerCase().split(' ').join('-')} sx={{ textDecoration: 'none' }}>
        <Paper sx={{ borderRadius: 2, mb: 2 }}>
            <Grid container sx={{ textAlign: "center" }}>
                <Grid item xs={4} xl={3}>
                    <Skeleton variant="rectangular" width={160} height={160} />
                </Grid>
                <Grid item xs={8} xl={9} sx={{ textAlign: 'left', px: 2, pt: 2 }}>
                    <Grid container>
                        <Grid item xs={11}>
                            <Box sx={{ textAlign: "center", minHeight: '60px', mb: 2, marginTop: 4 }}>
                                <Typography component="div" variant="h3">
                                    {props.name}
                                </Typography>
                            </Box>

                        </Grid>
                        <Grid item xs={1}>
                            <AddBoxIcon sx={{ float: 'right', cursor: 'pointer', fontSize: 'large' }} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    </Link>;
}