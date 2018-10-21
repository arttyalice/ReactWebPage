import React from "react";
import mapStyle from  './mapStyle.json'
import { compose, withProps, withStateHandlers } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");
var mapMarker = {
  lat: 13.749892,
  lng: 100.5579092
}
const MyMapComponent = compose(
  withProps({
    googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyDos7SzHEEJuVCIzEITFOSEvw-3ack4u5g&v=3.exp",
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '450px', width: '100%', margin: '0px 0px 30px 0px'}} />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withStateHandlers(() => ({
    isOpen: false,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    })
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    styles = { mapStyle }
    defaultZoom={15}
    ref={props.onMapMounted}
    defaultCenter={{ lat: mapMarker.lat, lng: mapMarker.lng}}
    onBoundsChanged={props.onBoundsChanged}
    onIdle={props.onIdle}
    >
    {props.isMarkerShown && (
      //<Marker position={{ lat: mapMarker.lat, lng: mapMarker.lng }} />
      <Marker
      position={{ lat: mapMarker.lat, lng: mapMarker.lng }}
      onClick={props.onToggleOpen}
    >
      {props.isOpen && 
      <InfoBox
        onCloseClick={props.onToggleOpen}
        options={{ closeBoxURL: ``, enableEventPropagation: true }}
      >
        <div style={{ backgroundColor: `white`, opacity: 1, padding: `12px` }}>
          <div style={{ fontSize: `16px`, fontColor: `black` }}>
            <h3>OrbitsDVL Company Limited.</h3>
            <p><br/>3/12 Floor 3, Chai Sa-Nguan Building,
            <br/>New Petchaburi Road, 
            <br/>Makkasan, Ratchathewi
            <br/><br/><a href="https://www.google.co.th/maps/place/%E0%B8%AD%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%A3%E0%B8%8A%E0%B8%B1%E0%B8%A2%E0%B8%AA%E0%B8%87%E0%B8%A7%E0%B8%99+1/@13.7498284,100.5575338,18.53z/data=!4m12!1m6!3m5!1s0x0:0x2d815fb335c473a0!2z4Lit4Liy4LiE4Liy4Lij4LiK4Lix4Lii4Liq4LiH4Lin4LiZIDE!8m2!3d13.7498588!4d100.5579672!3m4!1s0x0:0x2d815fb335c473a0!8m2!3d13.7498588!4d100.5579672" target="_blank">Open in google map</a>
            </p>
          </div>
        </div>
      </InfoBox>}
    </Marker>
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