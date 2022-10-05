import logoImg from '../../assets/pig.png'
import { Container, Content } from './style'

interface HeaderProps {
  onOpenNewTransactionModal: ()=> void;
}

export function Header({onOpenNewTransactionModal}:HeaderProps) {
  return (
    <Container>
      <Content>
      <img src={logoImg} alt="Luan money" />
      <button type="button" onClick={onOpenNewTransactionModal}>
        Nova transação
      </button>
      </Content>
    </Container>
  )
}
