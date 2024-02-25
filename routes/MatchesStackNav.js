import { createStackNavigator } from '@react-navigation/stack';
import defaultStyleNav from '../utils/defaultStyleNav';
import landing from '../screens/landingScreen';





const MatchesStackNavigator = createStackNavigator();

const matchesStackNav = () => {
  return (
    <MatchesStackNavigator.Navigator screenOptions={defaultStyleNav}>
      <MatchesStackNavigator.Screen
        name="landing"
        component={landing}
        options={{ title: 'Joueurs' }}
      />


    </MatchesStackNavigator.Navigator>
  );
};

export default matchesStackNav;
