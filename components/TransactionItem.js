import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Divider } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const TransactionItem = ({ name, amount, date, icon = 'swap-horizontal' }) => {
  const isNegative = amount.startsWith('-');

  return (
    <>
      <View style={styles.container}>
        <View style={styles.iconWrapper}>
          <MaterialCommunityIcons name={icon} size={22} color="#007BFF" />
        </View>
        <View style={styles.details}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
        <Text style={[styles.amount, isNegative ? styles.negative : styles.positive]}>
          {amount}
        </Text>
      </View>
      <Divider style={styles.divider} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  iconWrapper: {
    backgroundColor: '#e6f0ff',
    borderRadius: 10,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
    color: '#222',
  },
  date: {
    fontSize: 11,
    color: '#888',
    marginTop: 2,
  },
  amount: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  negative: {
    color: '#d32f2f',
  },
  positive: {
    color: '#2e7d32',
  },
  divider: {
    marginHorizontal: 16,
  },
});

export default TransactionItem;
