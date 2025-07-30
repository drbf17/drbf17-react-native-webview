import { Text, View, StyleSheet, Button } from 'react-native';
import { openWebview } from '@drbf17/react-native-webview';

export default function App() {
  const handleOpenWebview = () => {
    openWebview('https://reactnative.dev');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native WebView TurboModule</Text>
      <Text style={styles.description}>
        Test the native WebView functionality
      </Text>
      <Button
        title="Open React Native Website"
        onPress={handleOpenWebview}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center',
    color: '#666',
  },
});
