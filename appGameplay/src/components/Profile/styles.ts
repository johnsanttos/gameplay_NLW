import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    user: {
        flexDirection: 'row'
    },
    greenting: {
        fontSize: 24,
        color: theme.colors.heading,
        marginRight: 5
    },
    username: {
fontSize: 24,
color: theme.colors.heading,
fontWeight: 'bold'
    },
    message: {
fontSize: 16,
color: theme.colors.highlight
    },

})