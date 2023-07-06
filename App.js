import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import LoginPage from './screens/LoginPage'; // Import the login page component
import ForgotPasswordScreen from './screens/ForgotPasswordScreen'; // Import the "Forgot Password" page component';
import FillUserDetails from './screens/Fill_User_Details';
import OtpScreen from './screens/OtpScreen';
import SetPasswordScreen from './screens/SetPasswordScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import SearchScreen from './screens/SearchScreen';
import WishListScreen from './screens/WishListScreen';
import Regions from './screens/Regions';
import NewToOldest from './screens/NewToOldest';
import Variety from './screens/Variety';

import {useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import DrawerScreen from './screens/DrawerScreen';
import {Text, TouchableOpacity, View, StyleSheet, Image} from 'react-native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={LoginPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#52850f',
            },
            headerTitleStyle: {
              color: 'white',
            },
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            title: 'Forgot Password',
          }}
        />
        <Stack.Screen
          name="Fill_User_Details"
          component={FillUserDetails}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#52850f',
            },
            headerTitleStyle: {
              color: 'white',
            },
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            title: 'Fill User Details',
          }}
        />
        <Stack.Screen
          name="Otp"
          component={OtpScreen}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#52850f',
            },
            headerTitleStyle: {
              color: 'white',
            },
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            title: 'OTP',
          }}
        />
        <Stack.Screen
          name="SetPassword"
          component={SetPasswordScreen}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#52850f',
            },
            headerTitleStyle: {
              color: 'white',
            },
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            title: 'Set Password',
          }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={DrawerNavigator}
          options={{
            headerShown: false,
          }}
        />
        {/* <Stack.Screen
          name="DrawerScreen"
          component={HomeTabNavigator}
          options={{
            headerShown: false,
          }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeTabNavigator = () => {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#9ACD32',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {
          fontSize: 15,
          alignItems: 'center',
        },
        tabBarStyle: {
          height: 60,
          padding: 5,
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarItemStyle: {
          marginVertical: 0,
        },
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Icon
                name="home"
                color={focused ? '#9ACD32' : 'gray'}
                size={focused ? 30 : 25}
              />
            </TouchableOpacity>
          ),
          headerShown: false,
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: focused ? 18 : 15,
                fontWeight: focused ? 'bold' : 'normal',
              }}>
              Home
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({focused}) => (
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
              <Icon
                name="search"
                color={focused ? '#9ACD32' : 'gray'}
                size={focused ? 25 : 20}
              />
            </TouchableOpacity>
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: focused ? 18 : 15,
                fontWeight: focused ? 'bold' : 'normal',
              }}>
              Search
            </Text>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={WishListScreen}
        options={{
          tabBarLabel: 'Wishlist',
          tabBarIcon: ({focused}) => (
            <TouchableOpacity onPress={() => navigation.navigate('Wishlist')}>
              <Icon
                name="heart"
                color={focused ? '#9ACD32' : 'gray'}
                size={focused ? 25 : 20}
              />
            </TouchableOpacity>
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: focused ? 18 : 15,
                fontWeight: focused ? 'bold' : 'normal',
              }}>
              Wishlist
            </Text>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused}) => (
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Icon
                name="user"
                color={focused ? '#9ACD32' : 'gray'}
                size={focused ? 25 : 20}
              />
            </TouchableOpacity>
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: focused ? 18 : 15,
                fontWeight: focused ? 'bold' : 'normal',
              }}>
              Profile
            </Text>
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const CustomDrawerContent = ({navigation, ...props}) => {
  const handleButtonPress = () => {
    // Handle the button press action here
    console.log('Button Pressed');
    navigation.navigate('login');
  };
  return (
    <DrawerContentScrollView {...props}>
      <View>
        <View style={styles.Loginhandler}>
          <TouchableOpacity
            style={styles.LoginButton}
            onPress={handleButtonPress}>
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.line} />
        <DrawerItemList {...props} />
        <View style={styles.bottomline} />
        <Image
          style={styles.img}
          source={require('./assets/images/logo1.png')}
        />
        <Text style={styles.testversion}>Version Test 4</Text>
      </View>
    </DrawerContentScrollView>
  );
};
const styles = StyleSheet.create({
  Loginhandler: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  LoginButton: {
    backgroundColor: '#52850f',
    width: 160,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    borderRadius: 20,
    marginBottom: 15,
    marginTop: 30,
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
  line: {
    borderWidth: 1,
    marginHorizontal: 5,
    marginVertical: 10,
  },
  bottomline: {
    borderWidth: 0.2,
    marginVertical: 5,
    opacity: 0.2,
  },
  img: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 0,
  },
  testversion: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '700',
    marginTop: -15,
  },
});
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: '700',
        },
        drawerItemStyle: {
          backgroundColor: 'skyblue',
          paddingHorizontal: 10,
          marginVertical: 8,
          height: 55,
        },
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeTabNavigator} />
      <Drawer.Screen
        name="Regions"
        component={Regions}
        options={{
          title: 'Regions/Origins',
        }}
      />
      <Drawer.Screen name="Variety" component={Variety} options={{}} />
      <Drawer.Screen
        name="NewToOldest"
        component={NewToOldest}
        options={{
          title: 'New To Oldest',
        }}
      />
    </Drawer.Navigator>
  );
};
