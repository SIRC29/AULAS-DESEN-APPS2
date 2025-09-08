import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';

function Perfil(){
  return(
  <View style={{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  }}>
    <Image
      source={{uri: 'https://i1.sndcdn.com/artworks-s4h81jhiJTKbkNVs-Nc7W6g-t1080x1080.jpg'}}
      style={styles.image}
      />
  </View>
  )
}
function PerfilProduto(){
  return(
  <View style={{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  }}>
    <Image
      source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpWXnrFiGmsu8pfSJL5vKP4W92AwoTaBMP7g&s'}}
      style={styles.image}
      />
  </View>
  )
}
function PerfilProduto2(){
  return(
  <View style={{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  }}>
   <Text style={styles.Nome}>Nozarashi</Text>
   <Text style={styles.PerfilP2}>$500000</Text>
  </View>
  )
}
function Botoes(){
  return(
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    }}>
      <TouchableOpacity style= {styles.customButtonSeguir} onPress={() => Alert.alert('Você está seguindo Kenpachi Zaraki!')}>
        <Text style={styles.buttonText}>Seguir</Text>
      </TouchableOpacity>
      <TouchableOpacity style= {styles.customButtonMensagem} onPress={() => Alert.alert('Você está conversando com Kenpachi Zaraki!')}>
        <Text style={styles.buttonTextMsg}>Mensagem</Text>
      </TouchableOpacity>
    </View>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      {Perfil()}
      <Text style={styles.Texto}>Zaraki</Text>
      <Text style={styles.Bio}>Eu sou Kenpachi Zaraki, o mais forte dos capiães</Text>
      {Botoes()}
      {PerfilProduto()}
      {PerfilProduto2()}
      <TouchableOpacity style= {styles.customButtonComprar} onPress={() => Alert.alert('Você comprou Nozarashi!')}>
        <Text style={styles.buttonText}>Comprar</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    margin: 15,
  },
  Texto: {
    color: 'black',
    fontSize: 50,
    fontWeight: 'bold',
    margin: 20,
  },
  Bio: {
    flexDirection: 'column',
    color: 'gray',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
  },
  customButtonSeguir: {
    backgroundColor: '#4aa7f2',
    color: 'white',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    fontSize: 20,
  },
  customButtonMensagem: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonTextMsg: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  PerfilP2: {
    color: 'green',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    textAlign: 'center',
  },
  Nome: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    marginRight: 10,
  },
  customButtonComprar: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
