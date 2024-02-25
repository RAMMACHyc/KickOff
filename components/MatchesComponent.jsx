import { FlatList } from 'react-native'
import styled from 'styled-components/native'
import TeamScores from './TeamScores'
export default function matchesComponent({res}) {
  return (
    <Header3Section>
    <FlatList
      data={res}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => <TeamScores item={item} />}
    />
   </Header3Section>
  )
}


const Header3Section = styled.View`
  margin: 3px 10px 3px;
`;