import React from "react";
import { Text, View } from "react-native";
import { Avatar } from "../Avatar";
import styles from './styles'

export function Profile() {
    return (
<View style={styles.container} >

    <Avatar urlImage="https://github.com/johnsanttos.png"/>

<View >
    
  <View style={styles.user}>
      <Text style={styles.greenting}> olá, </Text>

<Text style={styles.username} > John </Text>
  </View>

  <Text style={styles.message} > Hoje é dia de vitoria   </Text>
</View>


</View>
    )
}