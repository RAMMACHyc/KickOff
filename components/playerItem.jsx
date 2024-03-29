import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const PlayerItem = ({item,viewDetails}) => {
    const { player_name, country_name, player_picture, team_picture, team_slug, age, estimated_value, sci_potential_color, position_short_name, sci_potential_smg, team_short_name } = item;
    return (
        <TouchableOpacity key="1" style={styles.card} 
        onPress={viewDetails}
        activeOpacity={0.7}

        >
            <Image
                source={{ uri: team_picture }}
                style={{
                    flex: 1,
                    resizeMode: 'cover',
                    justifyContent: 'center',
                    alignContent: 'center',
                    position: 'absolute',
                    width: '45%',
                    height: '75%',
                    opacity: 0.2,
                    right: 90,
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
                    opacity: 0.8,
                    right: 0,
                    marginTop: 10

                }}
            ></Image>


            <Image
                source={{ uri: player_picture }}
                style={styles.image}
            />
            <View style={{ width: 120, height: 25, backgroundColor: 'black', position: 'absolute', top: '10%', right: '0%', borderRadius: 10 }}><Text style={{ color: 'white', textAlign: 'center' }}>{position_short_name}</Text></View>
            <View style={{ width: 100, height: 18, backgroundColor: sci_potential_color, position: 'absolute', top: '25%', right: '1%', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}><Text style={{ color: 'white' }}>{sci_potential_smg}</Text></View>
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
        </TouchableOpacity>
    );
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden',
        marginTop: 4,
        width: '95%',
        alignSelf: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 5,
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

export default PlayerItem;
