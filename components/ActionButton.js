import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Text } from 'react-native-paper';

const ActionButton = ({ image, label, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.iconWrapper}>
        <Image source={image} style={styles.image} resizeMode="contain" />
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingVertical: 12,
  },
  iconWrapper: {
    backgroundColor: '#e6f0ff',
    borderRadius: 16,
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
  image: {
    width: 32,
    height: 32,
  },
  label: {
    fontSize: 11,
    color: '#333',
    textAlign: 'center',
  },
});

export default ActionButton;
