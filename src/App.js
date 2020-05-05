
import './App.css';
import React, { Component } from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import "bootstrap/dist/css/bootstrap.min.css";

const MapComponent = withScriptjs(withGoogleMap(props => (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: 33.5265111, lng: -86.7270792 }}>
      {props.isMarkerShown && (
        <Marker position={{ lat: 33.5265111, lng: -86.7270792 }} />
      )}
    </GoogleMap>
  ))
);

class App extends Component {
  render() {
    return (
      <div>
        <div className="text-center">
          <h1>GOOGLE MAPS API with REACT JS</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              MAPS
              <div className="shadow" style={{border: "2px solid black"}}>
                <MapComponent
                  isMarkerShown
                  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAN7mwyR_B3NDDLnuwkLds1RU9IUSBklc8&v=3.exp&libraries=geometry,drawing,places"
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div style={{ height: `400px` }} />}
                  mapElement={<div style={{ height: `100%` }} />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
