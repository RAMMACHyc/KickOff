import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import React from 'react';
import { Platform } from 'react-native';
import CustomHeaderIcon from '../components/CustomHeaderIcon';
import Colors from '../styles/Colors';

const defaultStyleNav = ({ navigation }) => ({
  headerStyle: {
    backgroundColor: Colors.green,
  },
  headerTintColor: Colors.white,
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderIcon}>
      <Item
        title="search"
        iconName={Platform.OS === 'android' ? 'search-outline' : 'ios-search-outline'}
        onPress={() => navigation.navigate('settingsDrawer')}
      />
       <Item
        title="notifications"
        iconName={Platform.OS === 'android' ? 'notifications-outline' : 'ios-notifications-outline'}
        onPress={() => navigation.navigate('settingsDrawer')}
      />
    </HeaderButtons>
  ),
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderIcon}>
      <Item
        title="Menu"
        iconName={Platform.OS === 'android' ? 'menu-outline' : 'ios-menu'}
        onPress={() => navigation.toggleDrawer()}
        style={{ paddingLeft: 10 }}
      />
    </HeaderButtons>
  ),
});

export default defaultStyleNav;
