import React, { useState } from "react";
import { View, Text, Image, StatusBar } from "react-native";

import IlustrationImg from '../../assets/illustration.png';
import { styles } from "./styles";
import { ButtonIcon } from "../../components/ButtonIcon";
import { useNavigation } from "@react-navigation/native";

export function SignIn() {

    const navigation =useNavigation ()
 
    function handleSignIn() {
        navigation.navigate ('Home')
    }
    return (
        <View style={styles.container}>
            <StatusBar
                barStyle={"light-content"}
                backgroundColor="transparent"
                translucent
            />
            <Image
                source={IlustrationImg}
                style={styles.image}
                resizeMode='stretch'
            />

            <View
                style={styles.content}
            >
                <Text
                    style={styles.title}
                >
                    Conecte-se {`\n`}
                    e organize suas{`\n`}
                    jogatinas
                </Text>

                <Text
                    style={styles.subTitle}
                >
                    Crie grupos para jogar seus games {`\n`}
                    favoritos com seus amigos
                </Text>
                <ButtonIcon
                    title="Entrar no Discord"
                    onPress ={handleSignIn}

                />
            </View>
        </View>
    )
}