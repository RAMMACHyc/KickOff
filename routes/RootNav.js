import { NavigationContainer } from '@react-navigation/native';
import DrawerNav from './DrawerNav';

const RootNav = () => {
  return (
    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>
  );
};

export default RootNav;
