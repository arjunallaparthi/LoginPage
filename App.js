/*import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
} from 'react-native';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === '' || password === '') {
      alert('Please fill all fields');
    } else {
      alert(`Username: ${username}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});
*/
import React, {useState} from 'react';
import {View,Text,TextInput,Pressable,StyleSheet} from 'react-native';
export default function App(){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    if (username === '' || password === '') {
      alert('Please fill all fields');
    } else {
      alert(`Username: ${username}`);
    }
  };
  return(
    <View style ={styles.container}>
    <Text style ={styles.title}> Login </Text>
    <TextInput 
     style = {styles.input}
     placeholder='Username'
     value = {username}
     onChangeText={setUsername}>
    </TextInput>
    <TextInput
     style = {styles.input}
     placeholder='Password'
     value={password}
     onChangeText={setPassword}
     secureTextEntry >
    </TextInput>
    <Pressable style = {styles.button} onPress ={handleLogin}>
     <Text style = {styles.buttonText}> Login </Text>
    </Pressable>
  </View>
  );
}
const styles  = StyleSheet.create({
  container :{
    flex : 1,
    justifyContent : 'center',
    padding : 20,
  },
  title :{
    color :'blue',
    fontSize : 24,
    textAlign:'center',
    marginBottom : 20,
  },
  input :{
    fontSize :20,
    borderWidth : 1,
    borderColor : 'black',
    borderRadius : 5,
    padding : 10,
    marginBottom : 10,
  },
  button :{
    padding : 15,
    backgroundColor: 'blue',
    borderRadius : 5,
    marginTop : 50,
  },
  buttonText : {
    textAlign : 'center',
    color :'white',
    fontSize : 20,
  },
});