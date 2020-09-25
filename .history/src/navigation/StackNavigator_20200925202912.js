import React from { React};
import { createStackNavigator} from '@react-navigation-stack';

import Home from "../screens/Home"

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerBackTitle}}>
            <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>
    )
}

export { MainStackNavigator}
