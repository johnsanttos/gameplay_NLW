import React from "react";
import { Text, View } from "react-native";
import { RectButton,RectButtonProps } from "react-native-gesture-handler"

import styles from './styles'


export function ButtonAdd({...rest}: RectButtonProps) {
 return (


   
<RectButton style={styles.container}>

    <Text style={styles.text} > + </Text>

</RectButton>


    )
}