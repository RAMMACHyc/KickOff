import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { getSingleMatch } from '../redux/actions/teamsActions';

export default function MatchDetails({ route }) {
  const dispatch = useDispatch();
  const { matchId } = route.params;
  const selectedMatch = useSelector((state) => state.matches.matches.find((match) => match.id === matchId));
  console.log(selectedMatch);
  const { awayTeam ,homeTeam, homeScore, awayScore,primaryColorHex,awayRedCards} = selectedMatch;
 

  useEffect(() => {
    dispatch(getSingleMatch(matchId));
  }, [dispatch]);

  return (
    <View  style={{justifyContent: 'center', height: '100%', backgroundColor: primaryColorHex}}>
      <View key="1" style={styles.card}>
        <View style={styles.cardContent}>
          <View style={styles.contentRow}>
            <View style={styles.teamContainer}>
              <Image
                source={{ uri: `https://api.sofascore.app/api/v1/team/${awayTeam.id}/image` }}
                style={styles.teamLogo}
              />
              <Text style={styles.teamScore}>{awayScore.current}</Text>
            </View>
            <Text style={styles.time}>45:00</Text>
            <View style={styles.teamContainer}>
              <Text style={styles.teamScore}>{homeScore.current}</Text>
              <Image
                source={{ uri: `https://api.sofascore.app/api/v1/team/${homeTeam.id}/image` }}
                style={styles.teamLogo}
              />
            </View>
          </View>
          <View style={styles.contentDis}>
            <Text style={{ fontWeight: "300", fontSize: 12 }} ><Ionicons name="football" size={15} color="#00d800c2" /> Messi ' 45'<Ionicons name="time" size={10} color="gray" /></Text>
            <Text style={{ fontWeight: "300", fontSize: 12 }} ><Ionicons name="football" size={15} color="#00d800c2" /> Ronaldo ' 50'<Ionicons name="time" size={10} color="gray" /></Text>
          </View>
          <View style={styles.contentDis}>
            <Text style={{ fontWeight: "300", fontSize: 12 }} ><MaterialCommunityIcons name="card" size={14} color="yellow" /> Messi  45'<Ionicons name="time" size={10} color="gray" /></Text>
            <Text style={{ fontWeight: "300", fontSize: 12 }} ><MaterialCommunityIcons name="card" size={14} color="red" /> Ronaldo  45'<Ionicons name="time" size={10} color="gray" /></Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 350,
    backgroundColor: 'white',
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 12,
    color: '#888888',
  },
  badge: {
    fontSize: 12,
    color: '#ff0000',
  },
  cardContent: {
    padding: 10,
  },
  contentRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  teamContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  teamLogo: {
    width: 70,
    height: 70,
    borderRadius: 100,
    margin: 5,
  },
  teamScore: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'green',
  },
  contentDis: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 25,
    marginTop: 10,
  },
});
