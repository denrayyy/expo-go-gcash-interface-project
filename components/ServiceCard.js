import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ServiceCard = ({ icon, label, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.7}>
      <MaterialCommunityIcons name={icon} size={28} color="#007BFF" />
      <Text style={styles.label} numberOfLines={2}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '30%',
    alignItems: 'center',
    backgroundColor: '#f8faff',
    borderRadius: 12,
    paddingVertical: 16,
    marginBottom: 12,
    elevation: 1,
  },
  label: {
    fontSize: 11,
    color: '#333',
    marginTop: 8,
    textAlign: 'center',
  },
});

export default ServiceCard;
