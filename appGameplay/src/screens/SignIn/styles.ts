import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input:{
        width: 200,
        height: 50,
        borderBottomWidth: 2,
        borderColor: '#222'
    },
    image: {
        width: '100%',
        height: 360
    },
    content: {
        marginTop: -40,
        padding: 50
    },
    title: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 16
    },
    subTitle: {
        color: theme.colors.heading,
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 64
    },
})