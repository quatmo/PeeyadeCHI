import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,map
} from 'react-native';
import MapView from 'react-native-maps';


class ScreenTwo extends Component {
 constructor(props) {
    super(props);
    //const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      //  dataSource: ds.cloneWithRows([]),
         marker:[],
    };
 }
 



  _createMarker (markerInfo) {
    newMarker = {
        latlng: {
            latitude: markerInfo.latlng.latitude+0.01,
            longitude: markerInfo.latlng.longitude+0.01
        }
    }

    markers = this.state.markers.concat([newMarker]);
    this.setState({markers});
}


  render() {
    const { state, navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>{state.params.screen}</Text>

        <View style={{flexDirection:'column'}}>
        <MapView style={{height:365,width:365,}}

mapType="standard"
zoomEnabled={true}
pitchEnabled={true}
showsUserLocation={true}
followsUserLocation={true}
showsCompass={true}
showsBuildings={true}
showsTraffic={true}
showsIndoors={true}
              initialRegion={{
              latitude: 35.704981,
              longitude: 51.416007,
              latitudeDelta: 0.0022,
              longitudeDelta: 0.0021,
            }}>
           {this.state.markers.map((marker, i) => (
  <MapView.Marker
    key={i}
    coordinate={marker.coordinate}
    onPress={(e) => {e.stopPropagation(); this.onMarkerPress(i)}}
  />
))}
      </MapView>



          <View style={{flexDirection:'row'}}>
            <TouchableHighlight
              onPress={() => this.props.navigation.goBack()}
              style={[styles.button, {backgroundColor: '#C56EE0'}]}>
              <Text style={styles.buttonText}>Go Back</Text>
            </TouchableHighlight>

            <TouchableHighlight
              onPress={() => navigate("ScreenThree", { screen: "Screen Three" })}
              style={[styles.button, {backgroundColor: '#8E84FB'}]}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 22
  },
  buttonContainer: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20
  },
  button: {
    borderRadius: 20,
    height: 50,
    flex: 2,
    margin: 10,
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 18
  }
});
export default ScreenTwo;