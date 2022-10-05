import { Container } from "./style";
import entrada from '../../assets/greenarrow.png'
import saida from '../../assets/redarrow.png'
import total from '../../assets/result.png'
import { useTransactions } from "../../hooks/useTransactions";

export function Summary() {
    const { transactions } = useTransactions()

    const sumary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount
        } else {
            acc.withdraw += transaction.amount;
            acc.total -= transaction.amount
        }
        return acc;
    }, {
        deposits: 0,
        withdraw: 0,
        total: 0
    })
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={entrada} width='15px' alt="Entradas" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    }).format(sumary.deposits)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={saida} width='15px' alt="Saidas" />
                </header>
                <strong>
                    -
                {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    }).format(sumary.withdraw)}
                    </strong>
            </div>
            <div className="background-diferente">
                <header>
                    <p>Total</p>
                    <img src={total} width='15px' alt="Total" />
                </header>
                <strong>
                {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    }).format(sumary.total)}
                    </strong>
            </div>
        </Container>
    )
}