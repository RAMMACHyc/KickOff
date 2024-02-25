import React from 'react';
/** @type {import("../types").SofascoreResponse} */
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function TeamScores({item,viewDetails}) {

  /** @type {import('../Datatypes').Match} */
  const { homeTeam, awayTeam, awayScore, homeScore, tournament, startTimestamp } = item;
  return (
    <TouchableOpacity key="1" style={styles.card} 
      onPress={viewDetails}
      activeOpacity={0.7}
     >
      <View style={styles.cardHeader}>
        <View style={styles.headerContent}>
          <View style={styles.tournament}>
          <Image
            source={{ uri: `https://api.sofascore.com/api/v1/unique-tournament/${tournament.id}/image`, }}mag
            style={styles.trophyIcon}
          />
          </View>
          <View>
            <Text style={styles.title}>{tournament.name}</Text>
            <Text style={styles.subtitle}>21.02.2024 (20:30)</Text>
          </View>
        </View>
        <View>
          <Text style={styles.liveIndicator}>Live</Text>
        </View>
      </View>
      <View style={styles.cardContent}>
        <View style={styles.contentRow}>
          <View style={styles.teamContainer}>
            <Image
              source={{ uri: `https://api.sofascore.app/api/v1/team/${awayTeam.id}/image` }}
              style={styles.teamLogo}
            />
            <Text style={styles.teamScore}>{awayScore.normaltime}</Text>
          </View>
          <Text style={styles.time}>{new Date(startTimestamp * 1000).toLocaleDateString()}</Text>
          <View style={styles.teamContainer}>
            <Text style={styles.teamScore}>{homeScore.normaltime}</Text>
            <Image
              source={{ uri: `https://api.sofascore.app/api/v1/team/${homeTeam.id}/image` }}
              style={styles.teamLogo}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>


  );
}



const styles = StyleSheet.create({
  card: {
    maxWidth: '98%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 1
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 'auto',
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
    width: 40,
    height: 40,
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
  liveIndicator: {
    fontSize: 12,
    color: '#ff0000',
    padding: 5,
    borderRadius: 10,

    backgroundColor: '#f2f2f2',

  },

  trophyIcon: {
 
    height: 30,
    width: 30,
  },

  tournament: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: '#f3f2f2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,

  },
});
