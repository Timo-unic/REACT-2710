import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import CssBaseline from '@mui/material/CssBaseline'
import * as React from 'react'
import { createTheme, StyledEngineProvider } from '@mui/material/styles'
import { ThemeProvider } from '@mui/system'

type Props = {}

const theme = createTheme({
    typography: {
       fontFamily: 'Montserrat, sans-serif',
    },
})
const App = (props: Props) => {
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <Main />
            <Footer />
            </ThemeProvider>
        </StyledEngineProvider>
    )
}
export default App
