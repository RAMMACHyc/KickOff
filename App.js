import 'react-native-gesture-handler';
import { StatusBar, View } from 'react-native';
import RootNav from './routes/RootNav';
import * as SplashScreen from 'expo-splash-screen';
import globalStyles from './styles/globalStyles';
import { Provider } from 'react-redux';
import store from './redux/store';

SplashScreen.preventAutoHideAsync()
export default function App() {
  return (
    <View style={globalStyles.body}>
      <Provider store={store}>
        <StatusBar style="light" translucent backgroundColor="transparent" />
        <RootNav />
      </Provider>
    </View>
  );
}
