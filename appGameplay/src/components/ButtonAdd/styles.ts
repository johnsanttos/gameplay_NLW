import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";


export default StyleSheet.create ({
container: {
    height: 48,
    width: 48,
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
   alignItems: 'center'
},

text :{
    fontSize: 32,
    color: theme.colors.heading
}

   
})