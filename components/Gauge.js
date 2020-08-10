import React from 'react';
import {Circle, Text} from 'react-native-svg';
import {VictoryPie, VictoryContainer} from 'victory-native';

export const Gauge = ({row, rows, handleAddRow, handleSubtractRow}) => {
  return (
    <>
      <VictoryContainer>
        <Text
          onPress={() => handleAddRow()}
          x={125}
          y={135}
          fontSize={88}
          fontWeight="500"
          textAnchor="middle"
          fill="#FFF">
          {row}
        </Text>
        <Text
          onPress={() => handleAddRow()}
          x={125}
          y={170}
          fontSize={24}
          fontWeight="500"
          textAnchor="middle"
          fill="#FFF">
          {`of ${rows}`}
        </Text>
        <VictoryPie
          events={[
            {target: 'data', eventHandlers: {onClick: () => handleAddRow()}},
          ]}
          startAngle={0}
          endAngle={360}
          padAngle={0}
          // used to hide labels
          labels={() => null}
          innerRadius={100}
          width={250}
          height={250}
          data={[
            {x: '', y: 33},
            {x: '', y: 100 - 33},
          ]}
          colorScale={['black', '#EEEEEE']}
        />
        <Circle cx={30} cy={230} r={30} fill="#FFF" />
        <Text
          x={32}
          y={250}
          fontSize={72}
          fontWeight="500"
          textAnchor="middle"
          //fill={'#F4327F'}>
          fill="#F4327F">
          -
        </Text>
      </VictoryContainer>
    </>
  );
};
