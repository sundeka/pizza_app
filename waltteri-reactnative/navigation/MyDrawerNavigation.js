import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import AddScreen from '../screens/AddScreen'
import ReadScreen from '../screens/ReadScreen'


const MyDrawerNavigator = createDrawerNavigator({
    //The first is the default screen
    Add: AddScreen,
    Read: ReadScreen,
});

export default createAppContainer(MyDrawerNavigator);  
