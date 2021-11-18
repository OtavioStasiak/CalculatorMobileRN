import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { styles } from "./styles";


export default props => {
    return (
        <View style={styles.Display}>
            <Text style={styles.DisplayValue} numberOfLines={1}>
            {props.value}
            </Text>
        </View>
    )
    
}

