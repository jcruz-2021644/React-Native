import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from "react-native";
import { COLORS, SPACING, FONT_SIZE } from "../../constants/themes";

const Button = ({
    tittle,
    onPress,
    loading,
    variant = "primary",
    styles,
    ...props
}) => {
    const isSecundary = variant === "secundary"
    return (
        <TouchableOpacity
            style={[
                styles.button,
                isSecundary ? styles.secundary : styles.primary,
                loading && styles.buttonDisable,
                style
            ]}
            onPress={onPress}
            disable={loading}
            activeOpacity={0.8}
            {...props}
        >
            {loading ? (
                <ActivityIndicator
                    color={isSecundary ? COLORS.primary : COLORS.surface}
                />
            ) : (
                <Text
                    style={[
                        styles.text,
                        isSecundary ? styles.textSecundary : styles.textPrimary
                    ]}
                >
                    {title}
                </Text>
            )}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: SPACING.md,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },
    buttonPrimary: {
        backgroundColor: COLORS.primary,
    },
    buttonSecondary: {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: COLORS.primary,
    },
    buttonDisabled: {
        opacity: 0.6,
    },
    text: {
        fontSize: FONT_SIZE.md,
        fontWeight: "700",
    },
    textPrimary: {
        color: COLORS.surface,
    },
    textSecondary: {
        color: COLORS.primary,
    },
});
export default Button;