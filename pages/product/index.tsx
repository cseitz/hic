import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";

export default function ProductView() {
    const router = useRouter();
    const id = Number(router?.query?.id || 0);
    return <Box sx={{ p: 2 }}>
        <Typography variant="h4">Product #{id}</Typography>
    </Box>
}