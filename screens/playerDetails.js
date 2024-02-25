
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getSinglePlayer } from '../redux/actions/playersActions';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function playerDetails({ route }) {
    const dispatch = useDispatch();
  const { playerId } = route.params;
  const selectedMatch = useSelector((state) => state.players.players.find((player) => player.id === playerId));
  console.log(selectedMatch);
    const { player_name, team_slug, team_picture, player_picture, position_short_name, country_name, estimated_value, age, sci_potential_color, sci_potential_smg } = selectedMatch;

  useEffect(() => { 
    dispatch(getSinglePlayer());
  }, [dispatch]);

  return (
    <View style={styles.container}>
    <View key="1" style={styles.card} >
        <Image
            source={{ uri: team_picture }}
            style={{
                flex: 1,
                resizeMode: 'cover',
                justifyContent: 'center',
                alignContent: 'center',
                position: 'absolute',
                width: '60%',
                height: '75%',
                opacity: 0.2,
                right: 85,
                marginTop: 20

            }}
        ></Image>

        <Image
            source={require('../assets/images/5581926_3631-removebg-preview (1).png')}
            style={{
                flex: 1,
                resizeMode: 'cover',
                justifyContent: 'center',
                alignContent: 'center',
                position: 'absolute',
                width: '50%',
                height: '100%',
                opacity: 1,
                right: 0,
                top: 80,

            }}
        ></Image>


        <Image
            source={{ uri: player_picture }}
            style={styles.image}
        />
        <View style={{ width: 120, height: 25, backgroundColor: 'black', position: 'absolute', top: '10%', right: '3%', borderRadius: 10 }}><Text style={{ color: 'white', textAlign: 'center' }}>{position_short_name}</Text></View>
        <View style={{ width: 100, height: 18, backgroundColor: sci_potential_color, position: 'absolute', top: '17%', right: '3%', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}><Text style={{ color: 'white' }}>{sci_potential_smg}</Text></View>
        <View style={styles.content}>
            <View style={styles.row}>
                <Text style={styles.playerName}>{player_name}</Text>
                <View style={styles.clubContainer}>
                    <Image
                        source={{ uri: team_picture }}
                        style={styles.icon}
                    />
                    <Text style={styles.clubName}>{team_slug}</Text>
                </View>
            </View>
            <Text style={styles.location}><Ionicons name="flag" size={15} color="black" />{country_name}</Text>
            <View style={styles.row}>
                <View style={styles.awardContainer}>
                    <Text style={styles.award}>{estimated_value}</Text>

                </View>
                <Text style={styles.year}>Age : {age}</Text>
            </View>
        </View>
    </View>

    
</View>
);
}



const styles = StyleSheet.create({
    card: {
    backgroundColor: 'white',
    height: 400,
    borderRadius: 40,
    overflow: 'hidden',
    width: '100%',
    alignSelf: 'center',
   
},

container: {
    flex: 1,
    backgroundColor: '#efefef',
    padding: 10,
    alignItems: 'center',
},
image: {
    width: 100,
    height: 100,
    aspectRatio: 1,
    resizeMode: 'cover',
    marginTop: 3,

},
content: {
    padding: 16,
},
row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
},
playerName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
},
clubContainer: {
    flexDirection: 'row',
    alignItems: 'center',

},
icon: {
    width: 24,
    height: 24,
    marginRight: 4,
    color: 'yellow',
},
clubName: {
    fontSize: 12,
    textTransform: 'uppercase',
    color: 'black',
},
location: {
    fontSize: 12,
    color: 'gray',
    marginBottom: 8,
},
awardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
},
award: {
    fontSize: 20,
    color: 'green',
    fontWeight: 'bold'
},
year: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
},
});

