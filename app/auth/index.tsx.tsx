import { KeyboardAvoidingView, Platform, View, StyleSheet } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import { useState } from "react";

export default function AuthScreen() {
    const [isSingUp, setIsSingUp] = useState<boolean>(true);

    const handleSwitchMode = () => {
        setIsSingUp((prev) => !prev);
    }
    return <KeyboardAvoidingView 
        behavior={Platform.OS === "android" ? "padding" : "height"}
        style={styles.container}
    >
        
                <View style={styles.contant}>
                    <Text style={styles.title} variant="headlineMedium">
                        {isSingUp ? "Create accout" : "Welcome Back"}
                    </Text>

                    <TextInput 
                        label="Email"
                        autoCapitalize="none"
                        keyboardType="email-address"
                        placeholder="exemple@gamil.com"
                        mode="outlined"
                        style={styles.input}
                        />

                    <TextInput 
                        label="Password"
                        autoCapitalize="none"
                        placeholder="Your password..."
                        mode="outlined"
                        style={styles.input}
                        />

                    <Button mode="contained" style={styles.button}>
                        {isSingUp ? "Sing Up" : "Sing In"}
                    </Button>
                    <Button mode="text" onPress = {handleSwitchMode} style={styles.switchModeButton}>
                      {isSingUp 
                        ? "Already have an account? Sign In"
                        : "Don't have an account? Sing Up"}
                    </Button>
                </View>
                
                
          </KeyboardAvoidingView>
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },

    contant: {
        flex: 1,
        padding: 16,
        justifyContent: "center",
    },


    title: {
        textAlign: "center",
        marginBottom: 24,
    },

    input: {
        marginBottom: 16,
    },

    button: {
        marginTop: 8,
    },

    switchModeButton: {
        marginTop: 16,
    },
})