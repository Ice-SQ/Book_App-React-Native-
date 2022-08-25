import React from "react";
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Router = createNativeStackNavigator();
import Login from '../screens/login';
import Register from '../screens/register';
import Pwreset from '../screens/forgetpassword';
import Main from '../screens/main';
import Childrens from '../screens/childrens';
import Books from '../screens/Bookc';
import Young from '../screens/youngers';
import Elder from '../screens/elders';


export default function Page() {
    return(
    <NavigationContainer>
      <Router.Navigator>
        <Router.Screen options={{headerShown: false}} name="login" component={Login} />
        <Router.Screen options={{headerShown: false}} name="main" component={Main} />
        <Router.Screen options={{headerShown: false}} name="register" component={Register} />
        <Router.Screen options={{headerShown: false}} name="pwreset" component={Pwreset} />
        <Router.Screen options={{headerShown: false}} name="Childrens" component={Childrens} />
        <Router.Screen options={{headerShown: false}} name="books" component={Books} />
        <Router.Screen options={{headerShown: false}} name="young" component={Young} />
        <Router.Screen options={{headerShown: false}} name="elder" component={Elder} />
      </Router.Navigator>
    </NavigationContainer>
    )
};

