import React from 'react'
import { View } from 'react-native'
import PlayersItem from '../components/PlayersItem'

export default function playersScreen({navigation}) {
  return (
   <View>
       <PlayersItem navigation={navigation} />
   </View>
  )
}
