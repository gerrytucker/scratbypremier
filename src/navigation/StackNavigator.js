import React from { React};
import { createStackNavigator} from '@react-navigation-stack';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>
    )
}

export { MainStackNavigator}
