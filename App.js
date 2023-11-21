import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

export default function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/people/');
        setCharacters(response.data.results);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchCharacters();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.characterName}>{item.name}</Text>
      <View style={styles.detailsContainer}>
        <Ionicons name="ios-body" size={24} color="#FFE81F" />
        <Text style={styles.detailText}>Height: {item.height}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Ionicons name="ios-barbell" size={24} color="#FFE81F" />
        <Text style={styles.detailText}>Mass: {item.mass}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Ionicons name="ios-cut" size={24} color="#FFE81F" />
        <Text style={styles.detailText}>Hair: {item.hair_color}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Ionicons name="ios-color-palette" size={24} color="#FFE81F" />
        <Text style={styles.detailText}>Skin: {item.skin_color}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Ionicons name="ios-eye" size={24} color="#FFE81F" />
        <Text style={styles.detailText}>Eye: {item.eye_color}</Text>
      </View>
      <Text style={styles.detailText}>Birth Year: {item.birth_year}</Text>
      <Text style={styles.detailText}>Gender: {item.gender}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Star Wars, Lista de Personagens</Text>
      <FlatList
        data={characters}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#FFE81F',
  },
  item: {
    padding: 20,
    marginVertical: 10,
    backgroundColor: '#333',
    borderRadius: 10,
  },
  characterName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFE81F',
    marginBottom: 10,
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  detailText: {
    marginLeft: 10,
    color: '#FFE81F',
  },
});
