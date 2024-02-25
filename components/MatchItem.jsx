import { View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { getTournaments } from '../redux/actions/tournamentsActions';
import styled from 'styled-components/native';
import TournamentItem from './tournamentItem';
import MatchesComponent from './MatchComponent';
import { useEffect } from 'react';


const MatchItem = () => {
  const dispatch = useDispatch();
  const tournaments = useSelector((state) => state.tournaments.tournaments);

  useEffect(() => {
    dispatch(getTournaments());
  }, [dispatch]);


  return (
    <Container>
      <BannerSection>
        <LinearGradient
          colors={['#D4C2A2', '#A38D6F', '#CCE4CC']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{
            height: 181.92,
            borderRadius: 16,
          }}
        >
          <Image
            source={require('../assets/images/294.jpg')}
            style={{
              flex: 1,
              resizeMode: 'cover',
              justifyContent: 'center',
              alignContent: 'center',
              borderRadius: 16,
              position: 'absolute',
              width: '100%',
              height: '100%',
            }}
          ></Image>
        </LinearGradient>
      </BannerSection>
      <Header2Section>
        <McText semi size={18} style={{ fontWeight: 'bold' }}>
          Tournaments
        </McText>
        <McText semi size={9} color="#A0A3BD">
          View All
        </McText>
      </Header2Section>
      <View>
        <FlatList
          data={tournaments}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <TournamentItem props={item} /> }
        />
      </View>

      <Header2Section>
        <McText semi size={18} style={{ fontWeight: 'bold' }}>
          Upcoming Matches
        </McText>
        <McText semi size={9}>
          View All
        </McText>
      </Header2Section>
      <MatchesComponent/>
    </Container>
  );
};

const BannerSection = styled.View`
  background-color: #f0f0f0;
  border-radius: 10px;
`;

const Container = styled.View`
  flex: 1;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 10px;
  margin: 10px 0;
`;

const Header2Section = styled.View`
  height: 30px;
  margin: 23px 16px 0px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const McText = styled.Text`
  color: '#A0A3BD';
`;

export default MatchItem;
