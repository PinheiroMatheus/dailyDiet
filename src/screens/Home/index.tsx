import { Text } from 'react-native';

import { Header } from '@components/Header';
import { CardStatusDiet } from '@components/CardStatusDiet';
import { ActionButton } from '@components/ActionButton';
import { SectionListCard } from '@components/sectionListCard';

import theme from '@theme/index';
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

      <Text style={{color: theme.COLORS.GREY_1, fontSize: theme.FONT_SIZE.LG, marginBottom: 8}}>Refeições</Text>
      <ActionButton 
        ActionButtonTextProps='Nova refeição'
        type='DARK'
        Icon='PLUS'
      />

      <SectionListCard 
        hour='20:00'
        title='X-Burguer'
        type= 'NEGATIVE'
      />
    </Container>
  );
}