import React from 'react';

import {Text, TouchableOpacity} from 'react-native';

export const CircleButton = ({text, onPress, textStyle, style}) => {
  return (
    <>
      <TouchableOpacity style={style} onPress={onPress}>
        <Text style={textStyle}>{text}</Text>
      </TouchableOpacity>
    </>
  );
};
