import { Text, SafeAreaView, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        Журнал Bright
      </Text>
      <Card style={styles.card}>
        <Text style={{ marginBottom: 30, color: 'blue' }} onPress={() => Linking.openURL('http://google.com')}>
          Новости
        </Text>
        <Image style={styles.img}
          source={{
            uri: 'https://cdn.sanity.io/images/uqxwe2qj/production/4ee9fb18bdc214aefebf7859557a6611125c3841-760x426.png?q=80&auto=format&fit=clip&w=760',
          }}>
        </Image>
        <Text style={styles.title}>
          Превращаем стресс в твоего помощника
        </Text>
        <Text style={{ fontSize: 16 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
          took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting.
        </Text>
      </Card>
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
  card: {
    padding: 20,
    margin: 5,
    paddingBottom: 60,
  },
  img: {
    width: 300,
    height: 150,
    marginBottom: 30,
  },
});
