import React, {useState} from 'react';
import {
  Dimensions,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

import {Text} from 'react-native-paper';

const getPixel = function (px: number) {
  return (px * Dimensions.get('window').width) / 360;
};

const getHeightPixel = function (px: number) {
  return (px * Dimensions.get('window').height) / 740;
};

interface Product {
  img: string;
  title: string;
  price: string;
}

export function Product({img, price, title}: Product) {
  const [favorite, setFavorite] = useState(false);
  const [iconColor, setIconColor] = useState('#fff');

  const toggleFavorite = () => {
    setFavorite(!favorite);

    if (favorite) {
      setIconColor('#fff');
    } else {
      setIconColor('#f87171');
    }
  };

  return (
    <View style={styled.container}>
      <TouchableOpacity
        onPress={() => {}}
        disabled={true}
        style={styled.productContainer}>
        <View style={styled.header}>
          <Image
            source={{uri: img!}}
            resizeMethod="resize"
            style={[styled.productImage]}
          />

          <TouchableOpacity style={styled.likeButton} onPress={toggleFavorite}>
            {iconColor === '#fff' ? (
              <IconFontAwesome name="heart-o" size={20} color={iconColor} />
            ) : (
              <IconFontAwesome name="heart" size={20} color={iconColor} />
            )}
          </TouchableOpacity>
        </View>
        <View style={styled.content}>
          <Text numberOfLines={2} style={styled.title}>
            {title}
          </Text>

          <Text style={styled.price}>{price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styled = StyleSheet.create({
  container: {
    paddingVertical: getPixel(6),
  },
  content: {
    paddingHorizontal: getPixel(10),
    paddingVertical: getPixel(12),
  },
  title: {
    fontWeight: '400',
  },
  price: {
    fontWeight: '700',
    fontSize: 15,
    color: '#2563eb',
    marginTop: getPixel(8),
  },
  favoriteButton: {
    position: 'absolute',
    left: 8,
    top: 8,
  },
  header: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: getPixel(10),
    height: getPixel(96),
  },
  productImage: {
    width: getPixel(164),
    height: getPixel(96),
    borderTopLeftRadius: getPixel(15),
    borderTopRightRadius: getPixel(15),
  },
  productContainer: {
    flexDirection: 'column',
    width: getPixel(164),
    minHeight: 184,
    marginHorizontal: getPixel(6),
    marginBottom: getHeightPixel(8),
    backgroundColor: '#ffffff',
    borderRadius: getPixel(15),
  },
  likeButton: {
    position: 'absolute',
    left: 8,
    top: 8,
  },
  emptyItem: {
    height: 56,
  },
});
