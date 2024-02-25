import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import Colors from '../styles/Colors';
import PlayersStackNav from './PlayersStackNav';
import DisplayMatchesStackNav from './DisplayMatchesNav';
import MatchesStackNav from './MatchesStackNav';



const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  const drawerDefaultOptions = { headerShown: false };

  const homeOptions = {
    title: 'home',
    drawerIcon: () => (
      <Ionicons name="home" size={24} color={Colors.green} />
    ),
  };
  const playerOptions = {
    title: 'players',
    drawerIcon: () => (
      <MaterialIcons name="man" size={24} color={Colors.green} />
    ),
  };


   const matchesOptions = {
    title: 'matches',
    drawerIcon: () => (
      <Ionicons name="football" size={24} color={Colors.green} />
    ),
  };





  return (
    <Drawer.Navigator screenOptions={drawerDefaultOptions}>
      <Drawer.Screen
        name="Home"
        component={MatchesStackNav}
        options={homeOptions}


      />
      <Drawer.Screen
        name="Players"
        component={PlayersStackNav}
        options={playerOptions}
      />

      <Drawer.Screen
        name="Matches"
        component={DisplayMatchesStackNav}
        options={matchesOptions}

      />



     


    </Drawer.Navigator>
  );
};

export default DrawerNav;
