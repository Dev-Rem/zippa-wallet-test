import { useFonts } from 'expo-font';
import 'react-native-reanimated';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './(landing)/splash';
import RegistrationScreen from './(landing)/register';
import LoginScreen from './(landing)/login';
import BottomTabNavigator from './(home)/bottom_nav';
import { useColorScheme } from '@/hooks/useColorScheme';

const Stack = createStackNavigator();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });


  return (
   <Stack.Navigator>
      <Stack.Screen name="(landing)/splash" component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name="(landing)/register" component={RegistrationScreen} options={{ headerShown: false }} />
      <Stack.Screen name="(landing)/login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="(home)/bottom_nav" component={BottomTabNavigator} options={{ headerShown: false }} />      
        {/* <Stack.Screen name="+not-found" /> */}
      </Stack.Navigator>
      
  );
}
