import React from 'react'
import MatchesComponent from '../components/MatchComponent'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTeams } from '../redux/actions/teamsActions';
// import { useNavigation } from '@react-navigation/native';

export default function matchesScreen( {navigation}) {
    const dispatch = useDispatch();
    const res = useSelector((state) => state.matches.matches);

  

    useEffect(() => {
      dispatch(getTeams());
    }, [dispatch]);
  return (
    <MatchesComponent res={res} navigation={navigation}/>
  )
}
