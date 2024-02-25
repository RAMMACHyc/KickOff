import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import * as Animatable from 'react-native-animatable';
import styled from 'styled-components/native';



export default function TournamentItem({ props }) {
    const [animationName, setAnimationName] = useState('pulse');

    return (
        <TeamItemBox>
            <Animatable.Image
                source={{ uri: `https://api.sofascore.com/api/v1/unique-tournament/${props.id}/image` }}
                style={styles.teamImage}
                animation={animationName}
                iterationCount="infinite"
                easing="linear"
            />
            <LinearGradient
                colors={['rgba(255,255,255,1)', 'rgba(142,168,214,1)', 'rgba(0,211,255,1)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.gradient}
            />

        </TeamItemBox>
    );
};

const styles = StyleSheet.create({
    teamImage: {
        width: 60,
        height: 60,
        borderRadius: 100,
        zIndex: 1,


    },
    gradient: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderRadius: 100,

    },


});

const TeamItemBox = styled.View`
  width: 80px;
  height: 80px;
  border-radius: 100px;
  margin: 10px;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;
