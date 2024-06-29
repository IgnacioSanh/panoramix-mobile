import { View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faMagnifyingGlassLocation} from '@fortawesome/free-solid-svg-icons/faMagnifyingGlassLocation'
import {faPerson} from '@fortawesome/free-solid-svg-icons/faPerson'
import {faMapLocationDot} from '@fortawesome/free-solid-svg-icons/faMapLocationDot'

interface TabIconProps {
  focused: boolean,
  color: string,
  size: number,
}

export const ExploreIcon = ({focused, color, size}: TabIconProps) => {
  return (
    <View>
      <FontAwesomeIcon icon={faMagnifyingGlassLocation} color={color} size={size} />
    </View>
  )
}

export const MapIcon = ({focused, color, size}: TabIconProps) => {
  return (
    <View>
      <FontAwesomeIcon icon={faMapLocationDot} color={color} size={size} />
    </View>
  )
}
export const ForYouIcon = ({focused, color, size}: TabIconProps) => {
  return (
    <View>
      <FontAwesomeIcon icon={faPerson} color={color} size={size} />
    </View>
  )
}
