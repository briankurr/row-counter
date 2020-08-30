import React from 'react';
import {View} from 'react-native';

export const Dots = ({currentRepeat, totalRepeats}) => {
  const dots = [...Array(totalRepeats + 1).keys()].map((repeat) => {
    let dotStyle = styles.todo;
    if (repeat < currentRepeat) {
      dotStyle = styles.done;
    }
    if (repeat === currentRepeat) {
      dotStyle = styles.doing;
    }
    return <Dot key={repeat} style={dotStyle} />;
  });

  // remove 0th index - real people dont start counting at 0
  dots.splice(0, 1);

  return <>{dots}</>;
};

const Dot = ({style}) => {
  return <View style={{...styles.base, ...style}}></View>;
};

const styles = {
  base: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginHorizontal: 12,
    marginVertical: 6,
  },
  done: {backgroundColor: '#F4327F'},
  doing: {backgroundColor: '#6C2159', borderColor: '#F4327F', borderWidth: 4},
  todo: {backgroundColor: '#FFF', opacity: 0.5},
};
