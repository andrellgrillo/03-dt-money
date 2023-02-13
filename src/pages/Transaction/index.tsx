import { SearchForm } from './components/SearchForm'
import { PriceHighLight, TransactionContainer, TransctionTable } from './style'
import { TransactionContext } from '../../contexts/TransactionContext'
import { dateFormatter, priceFormatter } from '../../utils/format'
import { useContextSelector } from 'use-context-selector'

interface ITransaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}

export function Transaction() {
  const transactions = useContextSelector(TransactionContext, (context) => {
    return context.transactions
  })

  return (
    <TransactionContainer>
      <SearchForm />
      <TransctionTable>
        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <PriceHighLight variant={transaction.type}>
                    {transaction.type === 'outcome' && '- '}
                    {priceFormatter.format(transaction.price)}
                  </PriceHighLight>
                </td>
                <td>{transaction.category}</td>
                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
              </tr>
            )
          })}
        </tbody>
      </TransctionTable>
    </TransactionContainer>
  )
}
