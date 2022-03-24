import React from "react";
import { Image, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { theme } from "../../global/styles/theme";

type Props ={
    urlImage: string
}

import styles from "./styles";

export function Avatar ({urlImage}:Props) {
    const { secondary80, secondary100 } = theme.colors
    return (
        <LinearGradient
        style={styles.container}
        colors={[secondary80, secondary100]}
    >
      <Image
      source={{ uri: urlImage}}
      style={styles.avatar}
      />
    </LinearGradient>
    )
}