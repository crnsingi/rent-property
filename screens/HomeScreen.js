import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTailwind } from 'tailwind-rn';
import 'tailwind-rn/dist/tailwind.css';
import { getProperties } from '../api';

const HomeScreen = () => {
  const tailwind = useTailwind();
  const navigation = useNavigation();
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchProperties = async () => {
      const data = await getProperties();
      setProperties(data);
      setFilteredProperties(data);
    };
    fetchProperties();
  }, []);

  const handleSearch = (text) => {
    setSearchQuery(text);
    const filtered = properties.filter((property) =>
      property.location.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredProperties(filtered);
  };

  const renderProperty = ({ item }) => (
    <TouchableOpacity
      style={tailwind('bg-white p-4 mb-2 rounded-lg shadow')}
      onPress={() => navigation.navigate('PropertyDetails', { property: item })}
    >
      <Image
        source={{ uri: item.image }}
        style={tailwind('w-full h-40 rounded-lg mb-2')}
      />
      <Text style={tailwind('text-lg font-bold')}>{item.title}</Text>
      <Text style={tailwind('text-gray-600')}>{item.location}</Text>
      <Text style={tailwind('text-blue-500 font-semibold')}>${item.price}/month</Text>
    </TouchableOpacity>
  );

  return (
    <View style={tailwind('flex-1 p-4 bg-gray-100')}>
      <TextInput
        style={tailwind('border border-gray-300 p-2 mb-4 rounded-lg')}
        placeholder="Search by location..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredProperties}
        renderItem={renderProperty}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;