import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/Home";
import { SignIn } from "../screens/SignIn";

const { Navigator, Screen } = createStackNavigator();

export function AuthRouths() {
    return (
        <Navigator
            headerMode="none"
            screenOptions={
                {
                    cardStyle: {
                        backgroundColor: 'transparent' //para ficar transparente e aparece o background gradient
                    }
                }}
        >
            <Screen
                name="SignIn"
                component={SignIn}
            />

            <Screen
                name="Home"
                component={Home}
            />


        </Navigator>
    )
}