/* eslint-disable jsx-a11y/alt-text */
import L, { LatLng } from 'leaflet';
import PropTypes from 'prop-types';
import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import ReactDistortableImageOverlay from 'react-leaflet-distortable-imageoverlay';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';
import './index.css';

export default class App extends React.Component {
  state = {
    opacity: PropTypes.number,
    editMode: PropTypes.string,
    latLngString: PropTypes.string,
    isOn: PropTypes.boolean,
    corners: PropTypes.array,
    imageUrl: PropTypes.string,
  };

  cornersRef = [];

  constructor(props) {
    super(props);
    this.state = {
      opacity: 0.75,
      editMode: 'none',
      latLngString: '',
      isOn: true,
      // imageUrl: 'https://i.imgur.com/jaRqxHa.jpg',
      imageUrl: 'office.png',
      corners: [
        new L.latLng(43.78710550492949, 15.647438805314396),
        new L.latLng(43.78710550492949, 15.655914504316957),
        new L.latLng(43.78098644922989, 15.647438805314396),
        new L.latLng(43.78098644922989, 15.655914504316957),
      ],
    };
  }

  clickRotate() {
    this.setState({ editMode: 'rotate' });
  }

  clickDistort() {
    this.setState({ editMode: 'distort' });
  }

  clickTranslate() {
    this.setState({ editMode: 'translate' });
  }

  clickScale() {
    this.setState({ editMode: 'scale' });
  }

  clickClose() {
    this.setState({ editMode: 'none' });
  }

  clickOn() {
    this.setState({ isOn: true });
  }

  clickOff() {
    this.setState({ isOn: false });
  }

  onCornersUpdate(corners) {
    console.log(corners);
  }

  onWellKnownTextUpdated(wkt) {
    console.log(wkt);
  }

  handleOpacityChange(value) {
    this.setState({
      opacity: value / 100.0,
    });
  }

  render() {
    const reserialisedLatLng = [
      new LatLng(43.77994068568226, 15.652127265930178),
      new LatLng(43.78420096946275, 15.645453929901125),
      new LatLng(43.78365876838752, 15.655732154846193),
      new LatLng(43.78728367639441, 15.649616718292238),
    ];

    return (
      <div className="map">
        <div className="center tool-container">
          <button
            className={this.state.editMode === 'rotate' ? 'btn enabled' : 'btn'}
            href="#"
            onClick={this.clickRotate.bind(this)}
          >
            <i className="fa fa-refresh"></i>
            <span className="tool-text">Rotate</span>
          </button>
          <button
            className={
              this.state.editMode === 'distort' ? 'btn enabled' : 'btn'
            }
            href="#"
            onClick={this.clickDistort.bind(this)}
          >
            <i className="fa fa-object-group"></i>
            <span className="tool-text">Distort</span>
          </button>
          <button
            className={
              this.state.editMode === 'translate' ? 'btn enabled' : 'btn'
            }
            href="#"
            onClick={this.clickTranslate.bind(this)}
          >
            <i className="fa fa-arrows"></i>
            <span className="tool-text">Translate</span>
          </button>
          <button
            className={this.state.editMode === 'scale' ? 'btn enabled' : 'btn'}
            href="#"
            onClick={this.clickScale.bind(this)}
          >
            <i className="fa fa-expand"></i>
            <span className="tool-text">Scale</span>
          </button>
          <button className="btn" href="#" onClick={this.clickClose.bind(this)}>
            <i className="fa fa-lock"></i>
            <span className="tool-text">Lock</span>
          </button>
          <button
            className="btn"
            onClick={() => {
              this.setState({
                imageUrl: 'office.png',
                corners: [
                  new L.latLng(43.78710550492949, 15.647438805314396), //nw
                  new L.latLng(43.78710550492949, 15.655914504316957), //ne
                  new L.latLng(43.78098644922989, 15.647438805314396), //sw
                  new L.latLng(43.78098644922989, 15.655914504316957), //se
                ],
              });
            }}
          >
            Image 1
          </button>
          <button
            className="btn"
            onClick={() => {
              this.setState({
                imageUrl: 'https://i.imgur.com/qdde4aw.jpeg',
                corners: [
                  new L.latLng(43.78710550482949, 15.667438805314396),
                  new L.latLng(43.78710550482949, 15.655914504316957),
                  new L.latLng(43.78098644922989, 15.667438405314396),
                  new L.latLng(43.78098644922989, 15.655914404316957),
                ],
              });
            }}
          >
            Image 2
          </button>

          {this.state.isOn ? (
            <button className="btn" href="#" onClick={this.clickOff.bind(this)}>
              Off
            </button>
          ) : (
            <button className="btn" href="#" onClick={this.clickOn.bind(this)}>
              On
            </button>
          )}
          <div className="opacity-container">
            <h4>Opacity:</h4>
            <Slider
              min={0}
              max={100}
              value={this.state.opacity * 100.0}
              onChange={this.handleOpacityChange.bind(this)}
            />
          </div>
        </div>

        <Map
          style={{ width: '100%', height: '100vh' }}
          bounds={[
            [43.788434, 15.64461, 0],
            [43.775297, 15.660593, 0],
          ]}
          onClick={(e) => console.log(e.latlng)}
        >
          <TileLayer
            noWrap={true}
            attribution=""
            url="https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
          />

          <ReactDistortableImageOverlay
            corners={reserialisedLatLng}
            url={this.state.imageUrl}
            onCornersUpdated={this.onCornersUpdate.bind(this)}
            onWellKnownTextUpdated={this.onWellKnownTextUpdated.bind(this)}
            opacity={this.state.opacity}
            editMode={this.state.editMode}
          />
        </Map>
      </div>
    );
  }
}
