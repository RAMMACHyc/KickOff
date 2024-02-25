
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import defaultStyleNav from '../utils/defaultStyleNav';
import playersScreen from '../screens/playersScreen';
import playerDetails from '../screens/playerDetails';


const PlayersStack = createStackNavigator();

export default function PlayersStackNav() {
    return (
        <PlayersStack.Navigator screenOptions={defaultStyleNav}>
            <PlayersStack.Screen
                name="players"
                component={playersScreen}
                options={{ title: 'players' }}
            />
            <PlayersStack.Screen
                name="PlayerDetails"
                component={playerDetails}
                options={{ headerTitle: 'Player Details' }}
            />
        </PlayersStack.Navigator>
    );
}

