import React from 'react';
import { View, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { Appbar, Avatar, Text, TextInput } from 'react-native-paper';

const Header = ({ username = 'Juan Dela Cruz' }) => {
  const initials = username
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <View style={styles.wrapper}>
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
            <Avatar.Text size={40} label={initials} style={styles.avatar} />
          </TouchableOpacity>
          <View style={styles.textContainer}>
            <Text style={styles.greeting}>Hello,</Text>
            <Text style={styles.username}>{username}</Text>
          </View>
        </View>
        <Appbar.Action
          icon="bell-outline"
          color="#fff"
          onPress={() =>
            Alert.alert(
              'Notifications',
              'No new notifications.',
              [{ text: 'OK' }]
            )
          }
        />
      </Appbar.Header>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search services"
          mode="outlined"
          left={<TextInput.Icon icon="magnify" />}
          style={styles.searchInput}
          outlineStyle={styles.searchOutline}
          dense
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#007BFF',
  },
  header: {
    backgroundColor: '#007BFF',
    elevation: 0,
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    backgroundColor: '#0056b3',
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
  searchContainer: {
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  searchInput: {
    backgroundColor: '#fff',
    height: 38,
    fontSize: 14,
  },
  searchOutline: {
    borderRadius: 20,
    borderColor: '#fff',
  },
});

export default Header;
