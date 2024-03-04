import { ThemeProvider } from '@mui/material'
import './App.css'
import Layout from './routes/Layout'
import theme from './theme/theme'
import { Provider } from 'react-redux'
import store from './store/store'
import CustomGlobalStyles from './theme/CustomGlobalStyles/CustomGlobalStyles'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CustomGlobalStyles />
        <Layout />
      </ThemeProvider>
    </Provider>
  )
}

export default App
