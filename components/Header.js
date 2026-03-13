import React from 'react';
import { View, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { Appbar, Avatar, Text } from 'react-native-paper';

const Header = ({ username = 'Juan Dela Cruz' }) => {
  return (
    <Appbar.Header style={styles.header}>
      <View style={styles.left}>
        <TouchableOpacity
          onPress={() =>
            Alert.alert(
              'My Profile',
              `Logged in as ${username}`,
              [{ text: 'OK' }]
            )
          }
          activeOpacity={0.7}
        >
          <Avatar.Image size={40} source={require('../assets/profile.jpg')} />
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.greeting}>Hello,</Text>
          <Text style={styles.username}>{username}</Text>
        </View>
      </View>
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#007BFF',
    elevation: 0,
    paddingHorizontal: 8,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    marginLeft: 12,
  },
  greeting: {
    color: '#cce0ff',
    fontSize: 12,
  },
  username: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Header;
