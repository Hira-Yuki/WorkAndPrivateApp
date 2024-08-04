import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { theme } from '../color'
import { styles } from '../styles/styleSheet'

interface HeaderSwitchPropsType {
  work: () => void,
  travel: () => void,
  isWorking: boolean,
}

export default function HeaderSwitch({ work, travel, isWorking }: HeaderSwitchPropsType) {

  return (
    <>
      <TouchableOpacity onPress={work}>
        <Text
          style={{
            ...styles.btnText,
            color: isWorking
              ? theme.white
              : theme.darkGrey
          }}
        >
          Work
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={travel}>
        <Text
          style={{
            ...styles.btnText,
            color: isWorking
              ? theme.darkGrey
              : theme.white
          }}
        >
          Travel
        </Text>
      </TouchableOpacity>
    </>
  )
}
