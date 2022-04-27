import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Navbar from 'components/navbar'
import { Box } from '@mui/material'
import Footer from 'components/footer'

export const MaxWidth = { maxWidth: 1400, mx: 'auto' };
function MyApp({ Component, pageProps }: AppProps) {
    return <Box>
        <Navbar />
        <Box sx={{ minHeight: 'calc(100vh - 64px)' }}>
            <Component {...pageProps} />
        </Box>

        <Footer />
    </Box>
}

export default MyApp

import NextLink from 'next/link';
export function Link(props: Parameters<typeof NextLink>[0]) {
    const { children, ...rest } = props;
    return <NextLink {...rest}>
        <a style={{ textDecoration: 'none' }}>
            {children}
        </a>
    </NextLink>
}