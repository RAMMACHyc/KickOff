import { createStackNavigator } from '@react-navigation/stack';
import defaultStyleNav from '../utils/defaultStyleNav';
import matchesScreen from '../screens/matchesScreen';
import matchDetails from '../screens/matchDetails';

const DisplayMatchesStack = createStackNavigator();

const DisplayMatchesStackNav = () => {

  return (
    <DisplayMatchesStack.Navigator screenOptions={defaultStyleNav}>
      <DisplayMatchesStack.Screen
        name="Matches"
        component={matchesScreen}
        options={{ title: 'matches' }}
      />
       <DisplayMatchesStack.Screen
        name="MatchDetails"
        component={matchDetails}
        options={{ headerTitle: 'Match Details' }}
      />
    </DisplayMatchesStack.Navigator>

  );
};

export default DisplayMatchesStackNav;
