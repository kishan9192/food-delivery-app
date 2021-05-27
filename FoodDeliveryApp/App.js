import React from 'react';
import {Home, Restaurant, OrderDelivery} from './screens/index';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/tabs';

const App = () => {
    const Stack = createStackNavigator();
	return(
		<NavigationContainer>
			<Stack.Navigator screenOptions = {{
				headerShown: false
			}}
			initialRouteName = {"Home"}>
				<Stack.Screen name = "Tabs" component = {Tabs}/>
				<Stack.Screen name = "Restaurant" component = {Restaurant}/>
				<Stack.Screen name = "OrderDelive}ry" component = {OrderDelivery}/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}
export default App;