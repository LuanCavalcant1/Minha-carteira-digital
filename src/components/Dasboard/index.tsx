import { Summary } from "../Summary";
import { Container } from "./style";
import { TrasactionTable } from "../TransactionTable";

export function Dasboard () {
    return(
      <Container>
        <Summary />
        <TrasactionTable />
      </Container>
    )
};