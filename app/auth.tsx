import { KeyboardAvoidingView, Platform, View } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";

export default function AuthScreen() {
    return <KeyboardAvoidingView behavior={Platform.OS === "android" ? "padding" : "height"}>
        
                <View>
                    <Text> Create accout</Text>

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

                    <Button mode="contained">Sing Up</Button>
                    <Button mode="contained">Sing Up</Button>
                </View>
                
                
          </KeyboardAvoidingView>
}