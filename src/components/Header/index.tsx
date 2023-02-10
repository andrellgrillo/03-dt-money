import * as Dialog from '@radix-ui/react-dialog'

import logo from '../../assets/Logo.svg'

import { HeaderContainer, HeaderContent, NewTransaction } from './style'
import { NewTransactionModal } from '../NewTransactionModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="logo" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransaction>Nova Transação</NewTransaction>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
