import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShoppingPage from '../screens/shoppingPage/ShoppingPage';
import Home from '../screens/cartPage/Home';
import SearchIcon from '../assets/images/search.png';
import WishlistIcon from '../assets/images/love.png';
import cartIcon from '../assets/images/cart.png'

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
          }}
        />
        <Stack.Screen
          name="ShoppingPage"
          component={ShoppingPage}
          options={({ navigation }) => ({
            title: 'Women',
            headerRight: () => (
              <View style={styles.headerRightContainer}>
                <TouchableOpacity onPress={() => console.log('Search pressed')}>
                  <Image
                    source={SearchIcon}
                    style={styles.icon}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('Wishlist pressed')}>
                  <Image
                    source={WishlistIcon}
                    style={[styles.icon, { marginLeft: 10 }]}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('Wishlist pressed')}>
                  <Image
                    source={cartIcon}
                    style={[styles.icon, { marginLeft: 10 }]}
                  />
                </TouchableOpacity>
              </View>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  headerRightContainer: {
    flexDirection: 'row',
    marginRight: 5,
    gap: 10
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});
