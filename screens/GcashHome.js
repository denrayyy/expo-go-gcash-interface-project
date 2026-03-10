import React from 'react';
import { View, FlatList, StyleSheet, ScrollView, Alert } from 'react-native';
import { Text, Card, Button } from 'react-native-paper';
import Header from '../components/Header';
import BalanceCard from '../components/BalanceCard';
import ActionButton from '../components/ActionButton';
import ServiceCard from '../components/ServiceCard';
import TransactionItem from '../components/TransactionItem';

const quickActions = [
  { image: require('../assets/send-money.png'), label: 'Send Money' },
  { image: require('../assets/pay-bills.png'), label: 'Pay Bills' },
  { image: require('../assets/buy-load.png'), label: 'Buy Load' },
  { image: require('../assets/bank-transfer.png'), label: 'Bank Transfer' },
];

const services = [
  { icon: 'cash-plus', label: 'Cash In' },
  { icon: 'piggy-bank-outline', label: 'GSave' },
  { icon: 'chart-line', label: 'GInvest' },
  { icon: 'shield-check-outline', label: 'Insurance' },
  { icon: 'credit-card-outline', label: 'GCredit' },
  { icon: 'star-outline', label: 'A+ Rewards' },
];

const transactions = [
  { id: '1', name: 'Send to Maria Santos', amount: '-₱500.00', date: 'Mar 9, 2026', icon: 'arrow-up-circle-outline' },
  { id: '2', name: 'Cash In via BPI', amount: '+₱3,000.00', date: 'Mar 8, 2026', icon: 'arrow-down-circle-outline' },
  { id: '3', name: 'Pay Bills - Meralco', amount: '-₱1,250.00', date: 'Mar 7, 2026', icon: 'lightning-bolt-outline' },
  { id: '4', name: 'Buy Load - Globe', amount: '-₱100.00', date: 'Mar 6, 2026', icon: 'cellphone' },
  { id: '5', name: 'Received from Jose Rizal', amount: '+₱750.00', date: 'Mar 5, 2026', icon: 'arrow-down-circle-outline' },
  { id: '6', name: 'GInvest Deposit', amount: '-₱1,000.00', date: 'Mar 4, 2026', icon: 'chart-line' },
];

const GcashHome = () => {
  return (
    <View style={styles.screen}>
      <Header />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Balance Card */}
        <BalanceCard />

        {/* Quick Actions */}
        <Card style={styles.actionsCard}>
          <Card.Content>
            <View style={styles.actionsRow}>
              {quickActions.map((action, index) => (
                <ActionButton
                  key={index}
                  image={action.image}
                  label={action.label}
                  onPress={() =>
                    Alert.alert(
                      action.label,
                      'Coming Soon! This feature is not yet available.',
                      [{ text: 'OK' }]
                    )
                  }
                />
              ))}
            </View>
          </Card.Content>
        </Card>

        {/* Services Grid */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Financial Services</Text>
          <View style={styles.servicesGrid}>
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                label={service.label}
                onPress={() =>
                  Alert.alert(
                    service.label,
                    'Coming Soon! This feature is not yet available.',
                    [{ text: 'OK' }]
                  )
                }
              />
            ))}
          </View>
        </View>

        {/* Recent Transactions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Transactions</Text>
          <Card style={styles.transactionsCard}>
            <FlatList
              data={transactions}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TransactionItem
                  name={item.name}
                  amount={item.amount}
                  date={item.date}
                  icon={item.icon}
                />
              )}
              scrollEnabled={false}
            />
            <Button
              mode="outlined"
              onPress={() =>
                Alert.alert('Transaction History', 'Full history coming soon!', [{ text: 'OK' }])
              }
              style={styles.viewAllButton}
              textColor="#007BFF"
            >
              View All Transactions
            </Button>
          </Card>
        </View>

        {/* Bottom spacing */}
        <View style={{ height: 24 }} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f0f4ff',
  },
  scrollView: {
    flex: 1,
  },
  actionsCard: {
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 16,
    backgroundColor: '#fff',
    elevation: 2,
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  section: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 12,
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  transactionsCard: {
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    overflow: 'hidden',
  },
  viewAllButton: {
    margin: 12,
    borderColor: '#007BFF',
    borderRadius: 8,
  },
});

export default GcashHome;
