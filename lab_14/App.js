import { Text, SafeAreaView, StyleSheet, Image, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.5, backgroundColor: 'white', justifyContent: 'center' }}>
          <Text style={styles.paragraph}>
            5 книжных новинок октября
          </Text>
        </View>
        <View style={{ flex: 1, backgroundColor: 'lightGrey', justifyContent: 'center' }}>
          <Text style={{ fontSize: 14, textAlign: 'center' }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s
          </Text>
        </View>
        <View style={{ flex: 3, backgroundColor: 'grey', paddingTop: 40 }}>
          <Text style={{ fontSize: 14, textAlign: 'center' }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  img: {
    width: 300,
    height: 150,
    marginBottom: 30,
  },
});
