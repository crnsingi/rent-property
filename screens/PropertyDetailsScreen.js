import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import 'tailwind-rn/dist/tailwind.css';

const PropertyDetailsScreen = ({ route }) => {
  const tailwind = useTailwind();
  const { property } = route.params;

  return (
    <View style={tailwind('flex-1 p-4 bg-gray-100')}>
      <Image
        source={{ uri: property.image }}
        style={tailwind('w-full h-60 rounded-lg mb-4')}
      />
      <Text style={tailwind('text-2xl font-bold mb-2')}>{property.title}</Text>
      <Text style={tailwind('text-lg text-gray-600 mb-2')}>{property.location}</Text>
      <Text style={tailwind('text-xl text-blue-500 font-semibold mb-4')}>
        ${property.price}/month
      </Text>
      <Text style={tailwind('text-gray-700 mb-4')}>{property.description}</Text>
      <TouchableOpacity
        style={tailwind('bg-blue-500 p-3 rounded-lg')}
        onPress={() => alert('Contacting property owner...')}
      >
        <Text style={tailwind('text-white text-center font-semibold')}>
          Contact Owner
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PropertyDetailsScreen;