import React from 'react';
import { FlatList, ImageSourcePropType, View } from 'react-native';
import Card from '../card/card';
import Images from '../../images/images';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { ScreenNames } from '../../types/screen';

interface CategoryCard {
  label: string;
  image: ImageSourcePropType;
}

const categories: CategoryCard[] = [
  { label: 'Comedy', image: Images.comedy },
  { label: 'Dance', image: Images.dance },
  { label: 'Flea Market', image: Images.flea_market },
  { label: 'Live Music', image: Images.live_music },
  { label: 'Outdoor', image: Images.outdoor },
];

const ItemSeparator = () => <View style={styles.itemSeparator} />;

const CardsDisplay = () => {
  const navigation = useNavigation();
  return (
    <FlatList
      keyExtractor={({ label }) => label}
      data={categories}
      columnWrapperStyle={styles.columnWrapper}
      renderItem={({ item: { label, image } }) => (
        // @ts-ignore
        <Card key={label} image={image} title={label}  onPress={() => navigation.navigate(ScreenNames.EVENT_DETAIL)}/>
      )}
      ItemSeparatorComponent={ItemSeparator}
      numColumns={2}
    />
  );
};

export default CardsDisplay;
