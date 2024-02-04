import { Header } from '@components/Header';
import { Container } from './styles';
import { CardStatusDiet } from '@components/CardStatusDiet';

export function Home() {
  return (
    <Container>
      <Header />
      <CardStatusDiet />
    </Container>
  );
}