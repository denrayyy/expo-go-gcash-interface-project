import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { PaperProvider, MD3LightTheme, BottomNavigation, Text } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, StyleSheet } from 'react-native';
import GcashHome from './screens/GcashHome';

const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#007BFF',
    secondary: '#0056b3',
    secondaryContainer: '#e6f0ff',
  },
};

const PlaceholderScreen = ({ title }) => (
  <View style={styles.placeholder}>
    <Text style={styles.placeholderText}>{title}</Text>
  </View>
);

const HomeRoute = () => <GcashHome />;
const PaymentsRoute = () => <PlaceholderScreen title="Payments" />;
const ScanRoute = () => <PlaceholderScreen title="Scan QR" />;
const InboxRoute = () => <PlaceholderScreen title="Inbox" />;
const AccountRoute = () => <PlaceholderScreen title="Account" />;

export default function App() {
  const [index, setIndex] = React.useState(0);

  const routes = [
    { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline' },
    { key: 'payments', title: 'Payments', focusedIcon: 'wallet', unfocusedIcon: 'wallet-outline' },
    { key: 'scan', title: 'Scan', focusedIcon: 'qrcode-scan' },
    { key: 'inbox', title: 'Inbox', focusedIcon: 'email', unfocusedIcon: 'email-outline' },
    { key: 'account', title: 'Account', focusedIcon: 'account', unfocusedIcon: 'account-outline' },
  ];

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    payments: PaymentsRoute,
    scan: ScanRoute,
    inbox: InboxRoute,
    account: AccountRoute,
  });

  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <StatusBar style="light" backgroundColor="#007BFF" />
        <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
          barStyle={styles.bottomBar}
          activeColor="#007BFF"
          inactiveColor="#888"
        />
      </PaperProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  bottomBar: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  placeholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4ff',
  },
  placeholderText: {
    fontSize: 18,
    color: '#888',
  },
});
