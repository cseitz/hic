import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Navbar from 'components/navbar'
import { Box } from '@mui/material'
import Footer from 'components/footer'

function MyApp({ Component, pageProps }: AppProps) {
    return <Box>
        <Navbar />
        <Box sx={{ minHeight: 'calc(100vh - 64px - 200px)' }}>
            <Component {...pageProps} />
        </Box>

        <Footer />
    </Box>
}

export default MyApp
