import React, { useState, Component} from "react";
import './App.css';
import ImageMarker, { Marker, MarkerComponentProps } from 'react-image-marker';


class App extends Component {

  render() {
    return (
      <div>
        <Form />
        <Img/>
      </div>
 
    );
  }
}

function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(useState.markers);
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}

function Img() {
  const CustomMarker = (props: MarkerComponentProps) => {
    return (
      <div style={{width: '40px', height: '40px', borderRadius: '25px', background: 'red'}} className="custom-marker"></div>
    );
  };

  const [markers, setMarkers] = useState([{}]);
  const [name, setURL] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
  }

return (
    <div className="App">
     <h1 style={{ margin: '10px', }}> Simple Annotation Tree</h1>
      <h2 style={{ margin: '10px' }} >1. Zuerst fügen Sie die URL ein und klicken Sie auf den Kopf der Personen</h2>

      <form onSubmit={handleSubmit}>
      <label style={{ margin: '10px' }}>
        <a> Fügen Sie die URL hier ein:  </a>
        <input style={{ padding: '5px', width: '50pc'}} type="text" value={name} onChange={e => setURL(e.target.value)}/>
      </label>
    </form>

    <h2 style={{ margin: '10px' }} >2. Klicken Sie auf jeden Kopf den Sie sehen! </h2>
    <ImageMarker
     src={name}
     alt= "Hier erscheint das Bild!"
      markers={markers}
      coordinate={() => console.log('TEST')}
      onAddMarker={(marker: Marker) => setMarkers([...markers, marker])}
      markerComponent={CustomMarker}
      style={{
        cursor: "pointer"
      }}
    />
    <div className="markerInfo"> Das ist die Markierung!</div> 
  </div>
  );
}

export default App;