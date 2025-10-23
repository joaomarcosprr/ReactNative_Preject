import { Slot, Stack, useRouter } from "expo-router";
import { useEffect } from "react";

function RouteGuard( { children }: { children: React.ReactNode } ) {
  const router = useRouter();
  const isAuth = false; // Replace with actual authentication logic

  useEffect(() => {
    if (!isAuth) {
      router.replace("/auth/index.tsx");
    }
  }, []); //Execute only once when component is mounted
return <>{children}</>;
}

export default function RootLayout() {
  return (
    <RouteGuard>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
     
    </RouteGuard>
  );
}
