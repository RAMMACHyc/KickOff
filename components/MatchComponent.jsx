import { FlatList } from 'react-native'
import styled from 'styled-components/native'
import TeamScores from './TeamScores'
export default function matchesComponent({res, navigation}) {
  return (
    <Header3Section>
    <FlatList
      data={res}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) =>
       <TeamScores
        item={item} 
         viewDetails={() =>
          navigation.navigate('MatchDetails', {
          matchId: item.id,
          })
          }
       />}
    />
   </Header3Section>
  )
}


const Header3Section = styled.View`
  margin: 3px 10px 3px;
`;