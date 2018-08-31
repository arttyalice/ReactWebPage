import React from "react";
import mapStyle from  './mapStyle.json'
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

var mapMarker = {
  lat: 18.792032,
  lng: 98.982370
}



const MyMapComponent = compose(
  withProps({
    googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyDos7SzHEEJuVCIzEITFOSEvw-3ack4u5g&v=3.exp",
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '100%', width: '100%', margin: '0px 0px 0px 0px'}} />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    styles = { mapStyle }
    defaultZoom={15}
    ref={props.onMapMounted}
    defaultCenter={{ lat: 18.789301, lng: 98.983585 }}
    onBoundsChanged={props.onBoundsChanged}
    onIdle={props.onIdle}
    >
    {props.isMarkerShown && (
      <Marker position={{ lat: mapMarker.lat, lng: mapMarker.lng }} defaultIcon={ require('./img/house.png') } />
    )}
  </GoogleMap>
));


class MapCom extends React.PureComponent {
    state = {
      isMarkerShown: false
    }
  

  componentDidMount() {
    this.deleyedShow()
  }

  deleyedShow() {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 1000);
  }

  handleMarkerClick() {
    this.setState({ isMarkerShown: false })
    this.deleyedShow()
  }

  render() {
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    )
  }
}

export default MapCom