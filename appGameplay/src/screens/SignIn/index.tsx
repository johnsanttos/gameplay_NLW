import React, { useState } from "react";
import { View, Text, Image } from "react-native";

import IlustrationImg from '../../assets/illustration.png';
import { styles } from "./styles";

export function SignIn() {

    const [text, setText] = useState('')


    return (
        <View style={styles.container}>

        <Image 
        source={IlustrationImg}
        style={styles.image}
        resizeMode= 'stretch'
        />

        <View
        style={styles.content}
        >
            <Text
            style={styles.title}
            >
                Organize {`\n`} 
                suas jogatinas {`\n`}
                facilmente
            </Text> 

            <Text
            style={styles.subTitle}
            >
               Crie grupos para jogar seus games {`\n`}
               favoritos com seus amigos 
            </Text>
        </View>
        </View>
    )
}