//import React from 'react';
import Swipeable from 'react-native-swipeable';

const leftContent = <Text>Pull to activate</Text>;

const rightButtons = [
  <TouchableHighlight><Text>Button 1</Text></TouchableHighlight>,
  <TouchableHighlight><Text>Button 2</Text></TouchableHighlight>
];

function MyListItem() {
  return (
    <Swipeable leftContent={leftContent} rightButtons={rightButtons}>
      <Text>My swipeable content</Text>
    </Swipeable>
  );
}