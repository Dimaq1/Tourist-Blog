import { ThemeProvider } from '@mui/material'
import './App.css'
import Layout from './components/layout/Layout'
import theme from './theme/theme'
import { Provider } from 'react-redux'
import store from './store/store'
import { GlobalStyles } from '@mui/material';



function App() {


  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles styles={
          (theme) => ({
            '*, ::after, ::before': {
              boxSizing: 'border-box',
              margin: '0',
              padding: '0',
            },
            body: {
              fontFamily: theme.typography.fontFamily,
              fontSize: '18px',
              fontWeight: '700',
              color: theme.palette.primary.main,
            },
            a: {
              textDecoration: 'none',
              color: theme.palette.primary.main,
            },

          })
        } />
        <Layout />
        <div style={{ height: '200vh' }}></div>
      </ThemeProvider>
    </Provider>
  )
}

export default App
