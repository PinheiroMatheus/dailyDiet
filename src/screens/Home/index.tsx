import { Header } from '@components/Header';
import { Container } from './styles';
import { CardStatusDiet } from '@components/CardStatusDiet';

export function Home() {
  const temporaryValue = 40.86;
  
  return (
    <Container>
      <Header />
      <CardStatusDiet
        value={temporaryValue}
        type={temporaryValue >= 50 ? 'POSITIVE' : 'NEGATIVE'}
      />
    </Container>
  );
}