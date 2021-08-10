/* eslint-disable jsx-a11y/alt-text */
import L, { LatLng } from "leaflet";
import PropTypes from "prop-types";
import React from "react";
import {
  Map,
  TileLayer,
  FeatureGroup,
  Popup,
  Circle,
  Rectangle,
  Marker,
} from "react-leaflet";
import ReactDistortableImageOverlay from "react-leaflet-distortable-imageoverlay";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
import "./index.css";

export default class App extends React.Component {
  state = {
    opacity1: PropTypes.number,
    opacity2: PropTypes.number,
    opacity3: PropTypes.number,
    editMode1: PropTypes.string,
    editMode2: PropTypes.string,
    editMode3: PropTypes.string,
    latLngString: PropTypes.string,
    isOn: PropTypes.boolean,
    corners: PropTypes.array,
    imageUrl1: PropTypes.string,
    imageUrl2: PropTypes.string,
    imageUrl3: PropTypes.string,
  };

  cornersRef = [];

  constructor(props) {
    super(props);
    this.state = {
      opacity1: 0.75,
      opacity2: 0.75,
      opacity3: 0.75,
      editMode: "none",
      latLngString: "",
      isOn: true,
      imageUrl1: "https://i.imgur.com/jaRqxHa.jpg",
      imageUrl2: "./world.svg",
      imageUrl3: "./trust.png",
      // imageUrl: "./world.svg",
      corners: [
        new L.latLng(43.78710550492949, 15.647438805314396),
        new L.latLng(43.78710550492949, 15.655914504316957),
        new L.latLng(43.78098644922989, 15.647438805314396),
        new L.latLng(43.78098644922989, 15.655914504316957),
      ],
    };
  }

  clickRotate1() {
    this.setState({ editMode1: "rotate" });
  }

  clickRotate2() {
    this.setState({ editMode2: "rotate" });
  }

  clickRotate3() {
    this.setState({ editMode3: "rotate" });
  }

  clickDistort1() {
    this.setState({ editMode1: "distort" });
  }

  clickDistort2() {
    this.setState({ editMode2: "distort" });
  }

  clickDistort3() {
    this.setState({ editMode3: "distort" });
  }

  clickTranslate1() {
    this.setState({ editMode1: "translate" });
  }

  clickTranslate2() {
    this.setState({ editMode2: "translate" });
  }

  clickTranslate3() {
    this.setState({ editMode3: "translate" });
  }

  clickScale1() {
    this.setState({ editMode1: "scale" });
  }

  clickScale2() {
    this.setState({ editMode2: "scale" });
  }

  clickScale3() {
    this.setState({ editMode3: "scale" });
  }

  clickClose1() {
    this.setState({ editMode1: "none" });
  }

  clickClose2() {
    this.setState({ editMode2: "none" });
  }

  clickClose3() {
    this.setState({ editMode3: "none" });
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

  handleOpacityChange1(value) {
    this.setState({
      opacity1: value / 100.0,
    });
  }

  handleOpacityChange2(value) {
    this.setState({
      opacity2: value / 100.0,
    });
  }

  handleOpacityChange3(value) {
    this.setState({
      opacity3: value / 100.0,
    });
  }

  render() {
    const reserialisedLatLng = [
      new LatLng(23.362224, 70.059919), //23.362224, 70.059919
      new LatLng(23.374224, 70.049919), //23.374224, 70.049919
      new LatLng(23.373224, 70.059919), //23.373224, 70.059919
      new LatLng(23.377224, 70.049919), //23.377224, 70.049919
    ];
    const purpleOptions = { color: "purple" };
    const rectangle = [
      [23.362224, 70.059919], //23.362224, 70.059919
      [23.364, 70.08],
    ];

    return (
      <div className="map">
        <div className="center tool-container">
          <button
            className={this.state.editMode === "rotate" ? "btn enabled" : "btn"}
            href="#"
            onClick={this.clickRotate1.bind(this)}
          >
            <i className="fa fa-refresh"></i>
            <span className="tool-text">Rotate1</span>
          </button>
          <button
            className={this.state.editMode === "rotate" ? "btn enabled" : "btn"}
            href="#"
            onClick={this.clickRotate2.bind(this)}
          >
            <i className="fa fa-refresh"></i>
            <span className="tool-text">Rotate2</span>
          </button>
          <button
            className={this.state.editMode === "rotate" ? "btn enabled" : "btn"}
            href="#"
            onClick={this.clickRotate3.bind(this)}
          >
            <i className="fa fa-refresh"></i>
            <span className="tool-text">Rotate3</span>
          </button>
          <button
            className={
              this.state.editMode === "distort" ? "btn enabled" : "btn"
            }
            href="#"
            onClick={this.clickDistort1.bind(this)}
          >
            <i className="fa fa-object-group"></i>
            <span className="tool-text">Distort1</span>
          </button>
          <button
            className={
              this.state.editMode === "distort" ? "btn enabled" : "btn"
            }
            href="#"
            onClick={this.clickDistort2.bind(this)}
          >
            <i className="fa fa-object-group"></i>
            <span className="tool-text">Distort2</span>
          </button>
          <button
            className={
              this.state.editMode === "distort" ? "btn enabled" : "btn"
            }
            href="#"
            onClick={this.clickDistort3.bind(this)}
          >
            <i className="fa fa-object-group"></i>
            <span className="tool-text">Distort3</span>
          </button>
          <button
            className={
              this.state.editMode === "translate" ? "btn enabled" : "btn"
            }
            href="#"
            onClick={this.clickTranslate1.bind(this)}
          >
            <i className="fa fa-arrows"></i>
            <span className="tool-text">Translate1</span>
          </button>
          <button
            className={
              this.state.editMode === "translate" ? "btn enabled" : "btn"
            }
            href="#"
            onClick={this.clickTranslate2.bind(this)}
          >
            <i className="fa fa-arrows"></i>
            <span className="tool-text">Translate2</span>
          </button>
          <button
            className={
              this.state.editMode === "translate" ? "btn enabled" : "btn"
            }
            href="#"
            onClick={this.clickTranslate3.bind(this)}
          >
            <i className="fa fa-arrows"></i>
            <span className="tool-text">Translate3</span>
          </button>
          <button
            className={this.state.editMode === "scale" ? "btn enabled" : "btn"}
            href="#"
            onClick={this.clickScale1.bind(this)}
          >
            <i className="fa fa-expand"></i>
            <span className="tool-text">Scale1</span>
          </button>
          <button
            className={this.state.editMode === "scale" ? "btn enabled" : "btn"}
            href="#"
            onClick={this.clickScale2.bind(this)}
          >
            <i className="fa fa-expand"></i>
            <span className="tool-text">Scale2</span>
          </button>
          <button
            className={this.state.editMode === "scale" ? "btn enabled" : "btn"}
            href="#"
            onClick={this.clickScale3.bind(this)}
          >
            <i className="fa fa-expand"></i>
            <span className="tool-text">Scale3</span>
          </button>
          <button
            className="btn"
            href="#"
            onClick={this.clickClose1.bind(this)}
          >
            <i className="fa fa-lock"></i>
            <span className="tool-text">Lock1</span>
          </button>
          <button
            className="btn"
            href="#"
            onClick={this.clickClose2.bind(this)}
          >
            <i className="fa fa-lock"></i>
            <span className="tool-text">Lock2</span>
          </button>
          <button
            className="btn"
            href="#"
            onClick={this.clickClose3.bind(this)}
          >
            <i className="fa fa-lock"></i>
            <span className="tool-text">Lock3</span>
          </button>
          <div className="opacity-container">
            <h4>Opacity1:</h4>
            <Slider
              min={0}
              max={100}
              value={this.state.opacity1 * 100.0}
              onChange={this.handleOpacityChange1.bind(this)}
            />
            <h4>Opacity2:</h4>
            <Slider
              min={0}
              max={100}
              value={this.state.opacity2 * 100.0}
              onChange={this.handleOpacityChange2.bind(this)}
            />
            <h4>Opacity3:</h4>
            <Slider
              min={0}
              max={100}
              value={this.state.opacity3 * 100.0}
              onChange={this.handleOpacityChange3.bind(this)}
            />
          </div>
        </div>

        <Map
          style={{ width: "100%", height: "100vh" }}
          bounds={[
            [23.362224, 70.059919, 0],
            [23.362224, 70.059919, 0],
          ]}
          onClick={(e) => console.log(e.latlng)}
        >
          <TileLayer
            noWrap={true}
            attribution=""
            url="https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
          />
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <FeatureGroup pathOptions={purpleOptions}>
            <Circle center={[23.37, 70.059919]} radius={200} />
            <Rectangle bounds={rectangle} />
          </FeatureGroup>
          <Marker position={[23.367, 70.059919]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>

          <ReactDistortableImageOverlay
            corners={reserialisedLatLng}
            url={this.state.imageUrl1}
            onCornersUpdated={this.onCornersUpdate.bind(this)}
            onWellKnownTextUpdated={this.onWellKnownTextUpdated.bind(this)}
            opacity={this.state.opacity1}
            editMode={this.state.editMode1}
          />
          <ReactDistortableImageOverlay
            corners={reserialisedLatLng}
            url={this.state.imageUrl2}
            onCornersUpdated={this.onCornersUpdate.bind(this)}
            onWellKnownTextUpdated={this.onWellKnownTextUpdated.bind(this)}
            opacity={this.state.opacity2}
            editMode={this.state.editMode2}
          />
          <ReactDistortableImageOverlay
            corners={reserialisedLatLng}
            url={this.state.imageUrl3}
            onCornersUpdated={this.onCornersUpdate.bind(this)}
            onWellKnownTextUpdated={this.onWellKnownTextUpdated.bind(this)}
            opacity={this.state.opacity3}
            editMode={this.state.editMode3}
          />
        </Map>
      </div>
    );
  }
}
