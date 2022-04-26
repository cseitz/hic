import { TextFieldsOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";

export default function contact() {
  return (
    <Box sx={{mx: 'auto', width: 'min(500px, 90vw)', textAlign: 'center', p:2}}>
            <Typography variant="h4" style={{ textAlign: 'center', fontWeight: 'bold', marginTop: 25 }} >Contact Us</Typography>
            <Typography style={{ textAlign: 'center', marginTop: 15, marginBottom: 25 }} >If you have any questions or concerns please do not hesitate to contact us.</Typography>

            <TextField fullWidth label="Name" type="text" name="name" placeholder="Name" />

            <br /><br />

            <TextField fullWidth label="Email" type="text" name="email" placeholder="Email" />

            <br /><br />

            <TextField fullWidth multiline minRows={2} label="Write your message here." type="text" name="message" placeholder="Write your message here." />

            <br /><br />

            <Button variant="contained" type="submit" fullWidth >Send</Button>
        </Box>
  )
}