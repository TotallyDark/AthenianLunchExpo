import { Stack, SplashScreen } from 'expo-router';
import { ConvexProvider, ConvexReactClient } from 'convex/react';
import { useFonts } from 'expo-font'
import { useEffect } from 'react';


const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});

export default function RootLayoutNav() {
  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded, error] = useFonts({
    "Merriweather-Bold": require("../assets/fonts/Merriweather-Bold.ttf"),
    "Merriweather-LightItalic": require("../assets/fonts/Merriweather-LightItalic.ttf"),
    "Merriweather-Regular": require("../assets/fonts/Merriweather-Regular.ttf"),
    
  });
useEffect(() => {
  if(error) throw error;
  if(fontsLoaded) SplashScreen.hideAsync();
}, [fontsLoaded, error])

if(!fontsLoaded && !error) return null
  return (
    <ConvexProvider client={convex}>
      <Stack
      screenOptions={{
        headerStyle: {
          
        }
      }}>
        <Stack.Screen 
        name='index'
        options={{
          headerShown: false,
        }}
        />
      </Stack>
    </ConvexProvider>
      
  );
}





