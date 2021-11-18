import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    button: { 
    height: Dimensions.get('window').width /4,
    width: Dimensions.get('window').width /4,
    backgroundColor: '#f0f0f0',
    borderWidth:1,
    borderColor:'#888',
    alignItems: 'center',
    padding: 18
    },
    Text: {
        color: '#888',
        fontSize: 40,
        
    },
    operationButton: {
        color: '#fff',
        backgroundColor: '#faB231',
    },
    buttonDouble: {
        width: (Dimensions.get('window').width /4) * 2,
    },
    buttonTriple: {
        width: (Dimensions.get('window').width /4) * 3,
    }


})