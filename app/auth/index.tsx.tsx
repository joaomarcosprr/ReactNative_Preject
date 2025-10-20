import { KeyboardAvoidingView, Platform, View } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import { useState } from "react";

export default function AuthScreen() {
    const [isSingUp, setIsSingUp] = useState<boolean>(true);

    const handleSwitchMode = () => {
        setIsSingUp((prev) => !prev);
    }
    return <KeyboardAvoidingView behavior={Platform.OS === "android" ? "padding" : "height"}>
        
                <View>
                    <Text>{isSingUp ? "Create accout" : "Welcome Back"}</Text>

                    <TextInput 
                        label="Email"
                        autoCapitalize="none"
                        keyboardType="email-address"
                        placeholder="exemple@gamil.com"
                        mode="outlined"
                        />

                    <TextInput 
                        label="Password"
                        autoCapitalize="none"
                        placeholder="Your password..."
                        mode="outlined"
                        />

                    <Button mode="contained">{isSingUp ? "Sing Up" : "Sing In"}</Button>
                    <Button mode="text" onPress = {handleSwitchMode}>
                      {isSingUp 
                        ? "Already have an account? Sign In"
                        : "Don't have an account? Sing Up"}
                    </Button>
                </View>
                
                
          </KeyboardAvoidingView>
}