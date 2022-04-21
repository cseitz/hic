import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";

export default function ProductCategory() {
    const router = useRouter();
    const { category } = router.query;
    return <Box sx={{ p: 2 }}>
        <Typography variant="h4">Products: {category}</Typography>
    </Box>
}