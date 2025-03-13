import { Text, SafeAreaView, StyleSheet, Image, View } from 'react-native';
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        Экобиот
      </Text>
      <Card style={styles.card}>
        <Text style={{ marginBottom: 30, color: 'blue' }} onPress={() => Linking.openURL('http://google.com')}>
          Новости
        </Text>
        <Text style={styles.title}>
          Технологии для здоровья человека
        </Text>
        <Text style={{ fontSize: 16 }}>
          Проект "Интерактивная карта" химического состава локальных продуктов питания
          <br></br>
          добываемых посредниками самостоятельно.
        </Text>
        <Image style={styles.img}
          source={{
            uri: 'https://primamediamts.servicecdn.ru/f/big/482/481143.jpg?df9015093f7bfa68375d11cba980a31c',
          }}>
        </Image>
        <View style={{ flex: 3, backgroundColor: 'grey' }}>
          <Text style={{ fontSize: 14, textAlign: 'center' }}>
            Руководитель: Сорокина Татьяна Юрьевна
          </Text>
          <Text style={{ fontSize: 14, textAlign: 'center' }}>
            Тимлид от команды разработчиков ПО: <br></br> Выговская Наталья Владимировна
          </Text>
        </View>
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
