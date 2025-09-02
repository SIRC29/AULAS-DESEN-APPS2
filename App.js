import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Alert } from 'react-native';

function Card({texto}){
  return(
    <View style={styles.card}>
      <Text style={styles.cardText}>{texto}</Text>
    </View>
  )
}

export default function App() {
const handleButtonPress = () => {
  Alert.alert('Eu sou ichigo kurosaki, o ceifero de almas substituto!', 'Você pressionou o Botão!');
};

const handleTouchPress = () => {
  Alert.alert('Bem vindo ao mundo dos shinigamis! BANKAI!', 'Você tocou no botão!');
}
const TouchableOpacityExample = () => {
  Alert.alert('Você tocou no botão!');
}
const MeuApp = () => {
  return (
    <View>
      <Text style={styles.TextoMeu}>Meu App</Text>
    </View>
  );
}

return (
    <View style={styles.container}>
      {MeuApp()}
      <Text style={styles.Texto}>Bem Vindo a Soul Society</Text>
      <Image
      source={{uri: 'https://static.wikia.nocookie.net/bleach/images/7/72/Ichigo_e_Bankai.png/revision/latest?cb=20220728105832&path-prefix=pt-br'}}
      style={styles.image}
      />
      <Button title="Pressione-me" onPress={handleButtonPress} />
      <TouchableOpacity style= {styles.customButton} onPress={handleTouchPress}>
        <Text style={styles.buttonText}>Toque aqui</Text>
      </TouchableOpacity>
      <TouchableOpacity style= {styles.customButtonExample} onPress={TouchableOpacityExample}>
        <Text style={styles.buttonText}>Toque aqui também</Text>
      </TouchableOpacity>
      <Card texto="Eu sou o mais forte dos shinigamis" />
      <Card texto="Aqui é o lugar onde as almas descansam." />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Texto: {
    color: 'blue',
    fontSize: 30,
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 200,
    margin: 20,
    borderRadius: 100,
  },  
  customButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#ccc', 
  },  
  cardText: {
    fontSize: 16,
    color: '#333',
  },
  customButtonExample: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 25,
    marginTop: 20,
  },
  TextoMeu: {
    color: 'darkblue',
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 20,
  },    
});
