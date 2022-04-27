import { Box, Divider, Grid, Skeleton, Typography } from "@mui/material";

export default function About() {
    return <Box sx={{ p: 2, textAlign: "center", margin: "auto", mt: 5 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>About</Typography>
        <Box sx={{ p: 1, textAlign: "center", width: 650, margin: "auto", mb: 5 }}>
            <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Convallis a cras semper auctor neque vitae tempus.
                Imperdiet proin fermentum leo vel orci porta. Tellus orci ac auctor augue mauris.
                Vestibulum lorem sed risus ultricies tristique nulla aliquet.
                Integer quis auctor elit sed vulputate mi sit amet mauris.
                Magna fringilla urna porttitor rhoncus dolor purus non.
                Consectetur lorem donec massa sapien faucibus et.
                Non pulvinar neque laoreet suspendisse interdum consectetur libero id.
                Purus sit amet volutpat consequat mauris nunc congue.
                Posuere lorem ipsum dolor sit amet consectetur adipiscing.
                Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec.
                Odio morbi quis commodo odio aenean sed adipiscing diam.
                Viverra vitae congue eu consequat ac felis.
                Tellus molestie nunc non blandit massa enim nec dui. Tincidunt dui ut ornare lectus sit.

                Odio eu feugiat pretium nibh ipsum consequat nisl vel pretium.
                Sit amet risus nullam eget felis eget nunc lobortis mattis.
                Lectus proin nibh nisl condimentum id venenatis a.
                Porta lorem mollis aliquam ut porttitor leo a diam.
                Cras ornare arcu dui vivamus.
                Amet tellus cras adipiscing enim.
                Congue quisque egestas diam in arcu cursus euismod quis.
                Morbi non arcu risus quis varius.
                Eget mauris pharetra et ultrices neque ornare aenean.
                Enim ut sem viverra aliquet eget sit amet tellus cras.
                Velit egestas dui id ornare arcu odio ut.
                At elementum eu facilisis sed odio morbi quis commodo odio.
                Bibendum arcu vitae elementum curabitur vitae.
                Eget felis eget nunc lobortis mattis aliquam.
            </Typography>
        </Box>
        <Divider orientation="horizontal" />
        <br />
        <Box sx={{ p: 2, textAlign: "center" }}>
            <Typography variant="h5" >Our Team</Typography>
        </Box>
        <Box sx={{ width: "50vw", mx: 'auto', justifyContent: 'center', mb: 10 }}>
            <Grid container>
                <Grid item xs={6} sm={4} sx={{ textAlign: 'center' }}>
                    <Skeleton variant="rectangular" width={151} height={140} sx={{ display: 'inline-block' }} />
                </Grid>
                <Grid item xs={6} sm={4}>
                    <Skeleton variant="rectangular" width={151} height={140} sx={{ display: 'inline-block' }} />
                </Grid>
                <Grid item xs={6} sm={4}>
                    <Skeleton variant="rectangular" width={151} height={140} sx={{ display: 'inline-block' }} />
                </Grid>
            </Grid>
        </Box>
    </Box>
}