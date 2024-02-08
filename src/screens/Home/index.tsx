import { Header } from '@components/Header';
import { CardStatusDiet } from '@components/CardStatusDiet';
import { ActionButton } from '@components/ActionButton';
import theme from '@theme/index';

import { Container } from './styles';
import { Text } from 'react-native';

export function Home() {
  const temporaryValue = 40.86;
  
  return (
    <Container>
      <Header />
      <CardStatusDiet
        value={temporaryValue}
        type={temporaryValue >= 50 ? 'POSITIVE' : 'NEGATIVE'}
      />
      <Text style={{color: theme.COLORS.GREY_1, fontSize: theme.FONT_SIZE.LG, marginBottom: 8}}>Refeições</Text>
      <ActionButton 
        ActionButtonTextProps='Nova refeição'
        type='DARK'
        Icon='PLUS'
      />
    </Container>
  );
}