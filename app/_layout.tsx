import { Stack, Link } from 'expo-router';
import { Text } from 'react-native';
import { ConvexProvider, ConvexReactClient } from 'convex/react';

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});

export default function RootLayoutNav() {
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
          headerTitle: "My Chats",
        }}
        />
      </Stack>
    </ConvexProvider>
      
  );
}
