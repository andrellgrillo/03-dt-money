import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { Summary } from './components/Summary'
import { Transaction } from './pages/Transaction'
import { TransactionsProvider } from './contexts/TransactionContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionsProvider>
        <Header />
        <Summary />
        <Transaction />
      </TransactionsProvider>
    </ThemeProvider>
  )
}
