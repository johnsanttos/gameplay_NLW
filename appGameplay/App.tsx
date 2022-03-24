import React from "react";
import { StatusBar } from "react-native";
import { SignIn } from "./src/screens/SignIn";
import {Home} from "./src/screens/Home";

import {Background} from './src/components/Background'

export default function App() {
  return (
    <Background>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor="transparent"
        translucent
      />

      <Home/>
    </Background>
  )
}