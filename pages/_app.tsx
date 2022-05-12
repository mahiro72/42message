import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import AppHeader from '../components/layouts/AppHeader'
import { AppFooter } from '../components/layouts/AppFooter'

import { store } from '../stores/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <div className='bg-dark text-white'>
                <Head>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
                    <title>42message</title>
                </Head>
                <AppHeader />
                <Component {...pageProps} /> 
                <AppFooter />
            </div>
        </Provider>
    )
}

export default MyApp
