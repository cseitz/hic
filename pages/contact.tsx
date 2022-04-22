import { TextFieldsOutlined } from "@mui/icons-material";
import {
  Grid,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

export default function contact() {
  return (
    <Box sx={{ textAlign: "center", margin: "auto", width: "vw" }}>
      <Typography variant="h2">Contact Us</Typography>
      <hr style={{width: "50%"}}/>
      <Grid container spacing={2} columns={8} width="50%" margin="auto">
        <Grid item xs={4}>
          <OutlinedInput
            id="component-outlined"
            size="small"
            placeholder="Your Name"
            sx={{ pr: 5 }}
          />
        </Grid>
        <Grid item xs={4}>
          <OutlinedInput
            id="component-outlined"
            placeholder="Your Email Address"
            size="small"
            sx={{ pr: 5 }}
          />
        </Grid>
      </Grid>
      <TextField>

      </TextField>
    </Box>
  );
}
