import React from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import {Product} from '../Components/Product';
import BlockMenuIcon from '../assets/image/menu-block.png';

import {data} from '../API/mockAPI';

const Spacing = () => {
  return <View style={styled.emptyItem} />;
};

export function Home() {
  return (
    <View style={styled.screen}>
      <View style={styled.subtitle}>
        <Text style={styled.text}>
          Faça um acordo! com as pessoas da região
        </Text>
        <TouchableOpacity onPress={() => {}}>
          <Image source={BlockMenuIcon} />
        </TouchableOpacity>
      </View>

      <View style={styled.container}>
        <FlatList
          data={data}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <Product img={item.image} title={item.title} price={item.uPrice} />
          )}
          ListFooterComponent={<Spacing />}
        />
      </View>
    </View>
  );
}

const styled = StyleSheet.create({
  screen: {
    marginVertical: 25,
  },
  subtitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginBottom: 15,
  },
  text: {
    fontSize: 14,
  },
  emptyItem: {
    height: 56,
  },
  container: {
    marginHorizontal: 6,
  },
});
