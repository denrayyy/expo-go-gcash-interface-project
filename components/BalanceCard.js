import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text, IconButton } from 'react-native-paper';

const BalanceCard = ({ balance = '2,350.00' }) => {
  const [visible, setVisible] = useState(true);

  return (
    <Card style={styles.card}>
      <Card.Content style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.label}>Available Balance</Text>
          <IconButton
            icon={visible ? 'eye-outline' : 'eye-off-outline'}
            iconColor="#fff"
            size={20}
            onPress={() => setVisible(!visible)}
          />
        </View>
        <Text style={styles.balance}>
          {visible ? `₱${balance}` : '₱ ••••••'}
        </Text>
        <Text style={styles.subtitle}>Wallet • Savings</Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#0056b3',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 16,
    elevation: 4,
  },
  content: {
    paddingVertical: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    color: '#cce0ff',
    fontSize: 13,
  },
  balance: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: -4,
  },
  subtitle: {
    color: '#99c2ff',
    fontSize: 12,
    marginTop: 4,
  },
});

export default BalanceCard;
