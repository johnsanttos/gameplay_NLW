import React from "react";
import { ScrollView } from "react-native";
import { categories } from "../../utils/categories";
import { Category } from "../Category";


import styles from './styles'

type Props = {
    categorySelected: string
}

export function CategorySelect({ categorySelected }: Props) {
    return (

        <ScrollView
            horizontal // para a rolagem ser horizon tal
            style={styles.container}
            showsHorizontalScrollIndicator={false} //para nao aparecer o indicador do scrown
            contentContainerStyle={{ paddingRight: 40 }}
        >
            {
                categories.map(category => (
                    <Category
                        key={category.id}
                        title={category.title}
                        icon={category.icon}
                        checked={category.id === categorySelected}
                    />
                ))
            }
        </ScrollView>


    )
}