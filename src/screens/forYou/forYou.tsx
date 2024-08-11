import React from 'react';
import {View, Text, FlatList} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faMapPin} from '@fortawesome/free-solid-svg-icons/faMapPin'

import Screen from '~components/screen/screen';
import Images from '~images/images';
import fonts from '~theme/fonts';

import styles from './styles';
import Tile from '~components/tile/Tile';

const events = [
  { imageSrc: Images.snoop_dog, title: 'Snoop Dogg', subtitles: ['Concert at Oracle Park', 'Sat. Dec 18']},
  { imageSrc: Images.dua_lipa, title: 'Dua Lipa', subtitles: ['Concert at Chase Center', 'Sat. Dec 18']},
]

const ForYouPage = () => {
  return (
    <Screen>
        <View style={styles.titleRow}>
          <Text style={fonts.h1}>For you</Text>
          <Text><FontAwesomeIcon icon={faMapPin} /> Viña del Mar</Text>
        </View>
        <FlatList keyExtractor={(item) => item.title} showsVerticalScrollIndicator={false} data={events} renderItem={({item}) => (<Tile {...item} />)} />
    </Screen>
  )
}

export default ForYouPage;