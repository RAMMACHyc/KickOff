import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../styles/Colors';

const CustomHeaderIcon = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={30}
      color={Colors.white}
    />
  );
};

export default CustomHeaderIcon;
