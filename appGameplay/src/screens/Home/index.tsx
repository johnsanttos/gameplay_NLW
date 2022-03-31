import React, { useState } from "react";
import { Text, View } from "react-native";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { Profile } from "../../components/Profile";
import styles from "./styles";

export function Home() {
    const [category,setCategory]=useState('')
    return (
        <View style={styles.container} >
            <View style={styles.header} >
                <Profile />
                <ButtonAdd/>
            
            </View>
<View>
    <CategorySelect
    categorySelected={category}
    
    />


</View>
        </View>
    )
}