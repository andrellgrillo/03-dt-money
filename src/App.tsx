import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { Summary } from './components/Summary'
import { Transaction } from './pages/Transaction'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Summary />
      <Transaction />
      <GlobalStyle />
    </ThemeProvider>
  )
}
