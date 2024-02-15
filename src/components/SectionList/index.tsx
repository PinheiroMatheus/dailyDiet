

import React from 'react';
import {
  SectionList,
} from 'react-native';

import { CardHeaderListText, CardList, Container } from './styles';

import { SectionListCard } from '@components/SectionListCard';
import { sectionListCardStatusProps } from '@components/SectionListCard/styles';

interface Item {
  id: string
  hour: string;
  title: string;
  type: sectionListCardStatusProps;
}

interface Section {
  title: string;
  data: Item[];
}

const DATA: Section[] = [
  {
    title: '12.08.22',
    data: [
      { id: '1', hour: '20:00', title: 'X-tudo', type: 'NEGATIVE' },
      { id: '2', hour: '16:00', title: 'Whey protein com leite', type: 'POSITIVE' },
      { id: '3', hour: '12:30', title: 'Salada cesar com frango grelhado', type: 'POSITIVE' },
      { id: '4', hour: '09:30', title: 'Vitamina de banana com abacate', type: 'POSITIVE' },
    ],
  },
  {
    title: '11.08.22',
    data: [
      { id: '1', hour: '20:00', title: 'X-tudo', type: 'NEGATIVE' },
      { id: '2', hour: '16:00', title: 'Whey protein com leite', type: 'POSITIVE' },
      { id: '3', hour: '12:30', title: 'Salada cesar com frango grelhado', type: 'POSITIVE' },
      { id: '4', hour: '09:30', title: 'Vitamina de banana com abacate', type: 'POSITIVE' },
    ],
  },
  {
    title: '10.08.22',
    data: [
      { id: '1', hour: '20:00', title: 'X-tudo', type: 'NEGATIVE' },
      { id: '2', hour: '16:00', title: 'Whey protein com leite', type: 'POSITIVE' },
      { id: '3', hour: '12:30', title: 'Salada cesar com frango grelhado', type: 'POSITIVE' },
      { id: '4', hour: '09:30', title: 'Vitamina de banana com abacate', type: 'POSITIVE' },
    ],
  },
  {
    title: '10.08.22',
    data: [
      { id: '1', hour: '20:00', title: 'X-tudo', type: 'NEGATIVE' },
      { id: '2', hour: '16:00', title: 'Whey protein com leite', type: 'POSITIVE' },
      { id: '3', hour: '12:30', title: 'Salada cesar com frango grelhado', type: 'POSITIVE' },
      { id: '4', hour: '09:30', title: 'Vitamina de banana com abacate', type: 'POSITIVE' },
    ],
  },
];

export const SectionListExample = () => (
  <Container>
    <SectionList
      stickySectionHeadersEnabled={false}
      sections={DATA}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <CardList>
          <SectionListCard
            hour={item.hour}
            title={item.title}
            type={item.type}
          />
        </CardList>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <CardHeaderListText>{title}</CardHeaderListText>
      )}
    />
  </Container>
);
