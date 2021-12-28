import React, { useState } from "react";
import ImageMarker  from 'react-image-marker';
import Marker  from 'react-image-marker';

// const [markers, setMarkers] = useState('');

// const [markers, setMarkers] =
//     useState <
//     Array <
//     Marker >>
//         [
//             {
//                 top: 10,
//                 left: 50, //50% of the image relative size from left
//             },
//         ];


  // const CustomMarker = (props: MarkerComponentProps) => {
  //         return (
  //             <p className="custom-marker">My custom marker - {props.itemNumber}</p>
  //         );
  //     };  

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      value: ''
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  
  onChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <h1 style={{ margin: '10px', }}> Simple Annotation Tree</h1>
        <h2 style={{ margin: '10px' }} >1. Zuerst fügen Sie die URL ein und klicken Sie auf den Kopf der Personen</h2>
        <form onSubmit={this.handleSubmit}>
        <label style={{ margin: '10px' }}>
          <a> Fügen Sie die URL hier ein:  </a>
          <input style={{ padding: '5px', width: '50pc'}} type="text" value={this.state.value} onChange={this.onChange} />
        </label>
      </form>
        <div style={{ margin: '10px' }}> 
        {/* <ImageMarker
             src={this.state.value}
             markers={markers}
             onAddMarker={(marker: Marker) => setMarkers([...markers, marker])}
             markerComponent={CustomMarker}
        /> */}
          <img style={{ width: '90%', height: '90%' }} src={this.state.value} alt={this.state.value}/>
        </div>
      </div>
    );
  }
}

export default App;