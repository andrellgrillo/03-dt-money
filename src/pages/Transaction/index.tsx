import { SearchForm } from './components/SearchForm'
import { PriceHighLight, TransactionContainer, TransctionTable } from './style'

export function Transaction() {
  return (
    <TransactionContainer>
      <SearchForm />
      <TransctionTable>
        <tbody>
          <tr>
            <td width="50%">Desenvolvimento de site</td>
            <td>
              <PriceHighLight variant="income">R$ 12.000,00</PriceHighLight>
            </td>
            <td>Venda</td>
            <td>13/04/2022</td>
          </tr>
          <tr>
            <td width="50%">Lanchonete</td>
            <td>
              <PriceHighLight variant="outcome">- R$ 59,00</PriceHighLight>
            </td>
            <td>Alimentação</td>
            <td>10/04/2022</td>
          </tr>
          <tr>
            <td width="50%">Aluguel do apartamento</td>
            <td>
              <PriceHighLight variant="outcome">-R$ 1.200,00</PriceHighLight>
            </td>
            <td>Moradia</td>
            <td>27/03/2022</td>
          </tr>
        </tbody>
      </TransctionTable>
    </TransactionContainer>
  )
}
