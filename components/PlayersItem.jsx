import React from 'react'
import { FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { getPlayers } from '../redux/actions/playersActions';
import PlayerItem from './playerItem';
import { useEffect } from 'react';



export default function PlayersItem({ navigation}) {
  const dispatch = useDispatch();
  const players = useSelector((state) => state.players.players);
  useEffect(() => {
    dispatch(getPlayers());
  }, [dispatch]);

  return (
    <FlatList
      data={players}
      keyExtractor={item => item.id}
      renderItem={({ item }) =>
        <PlayerItem item={item}
          viewDetails={() =>
            navigation.navigate('PlayerDetails', {
              playerId: item.id,
            })
          } />}
    />
  )
}
