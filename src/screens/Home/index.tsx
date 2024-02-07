import { Header } from '@components/Header';
import { CardStatusDiet } from '@components/CardStatusDiet';
import { ActionButton } from '@components/ActionButton';

import { Container } from './styles';

export function Home() {
  const temporaryValue = 40.86;
  
  return (
    <Container>
      <Header />
      <CardStatusDiet
        value={temporaryValue}
        type={temporaryValue >= 50 ? 'POSITIVE' : 'NEGATIVE'}
      />
      <ActionButton 
        ActionButtonTextProps='Nova refeição'
      />
    </Container>
  );
}