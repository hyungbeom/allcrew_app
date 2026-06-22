import 'react-native-gesture-handler';

import { Provider } from '@ant-design/react-native';
import { useFonts } from 'expo-font';
import { DarkTheme, DefaultTheme, ThemeProvider, Tabs } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
    const colorScheme = useColorScheme();
    const [fontsLoaded] = useFonts({
        antoutline: require('@ant-design/icons-react-native/fonts/antoutline.ttf'),
        antfill: require('@ant-design/icons-react-native/fonts/antfill.ttf'),
    });

    useEffect(() => {
        if (fontsLoaded) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <Provider>
            <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
                <Tabs
                    screenOptions={{
                        headerShown: true,
                        tabBarStyle: {
                            height: 60,
                            paddingBottom: 8,
                            paddingTop: 8,
                            backgroundColor: colorScheme === 'dark' ? '#121212' : '#ffffff',
                        },
                        tabBarLabelStyle: {
                            fontSize: 12,
                            lineHeight: 14,
                            fontWeight: '500',
                            textAlign: 'center',
                        },
                    }}
                >
                    <Tabs.Screen
                        name="index"
                        options={{
                            title: 'Home',
                        }}
                    />
                    <Tabs.Screen
                        name="explore"
                        options={{
                            title: 'Explore',
                        }}
                    />
                </Tabs>
            </ThemeProvider>
        </Provider>
    );
}
