import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { AuthRouths } from "./auth.routes";

export function Routes ()  {
    return (
     
        <NavigationContainer>
            <AuthRouths/>
        </NavigationContainer>
        
    )
}