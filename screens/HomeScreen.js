// /screens/HomeScreen.js
import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { fetchTodos, fetchCities } from '../services/api';
import { db } from '../services/firebase';
import Card from '../components/Card';
import HeaderButtons from '../components/HeaderButtons';

const HomeScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchTodos().then(response => {
      setData(response.data);
    });
  }, []);

  const replaceWithCities = async () => {
    const cities = await fetchCities();
    const newData = data.map((item, index) => {
      const city = cities[index % cities.length];
      return { ...item, title: `${city.name} (${city.temp}°C)` };
    });
    setData(newData);
  };

  const saveData = async () => {
    const user = firebase.auth().currentUser;
    if (user) {
      await db.collection('users').doc(user.uid).set({ todos: data });
    }
  };

  const retrieveData = async () => {
    const user = firebase.auth().currentUser;
    if (user) {
      const doc = await db.collection('users').doc(user.uid).get();
      if (doc.exists) {
        setData(doc.data().todos);
      }
    }
  };

  return (
    <View style={styles.container}>
      <HeaderButtons
        onReplace={replaceWithCities}
        onSave={saveData}
        onRetrieve={retrieveData}
      />
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <Card title={item.title} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default HomeScreen;
