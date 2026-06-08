import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack"
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { COLORS } from "../shared/constants/themes"

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <AuthStack />
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.background,
    },
});

export default AppNavigator;
