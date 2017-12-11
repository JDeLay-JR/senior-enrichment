// import React, { Component } from 'react';
// import axios from 'axios'

// export default class NewCampus extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name:'',
//       description: '',
//       id: 0
//     }
//     this.handleNameChange = this.handleNameChange.bind(this);
//     this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleNameChange(event) {
//     const value = event.target.value
//     this.setState({name: value})
//   }

//   handleDescriptionChange(event) {
//     const value = event.target.value
//     this.setState({description: value})
//   }

//   handleSubmit(event) {
//     event.preventDefault();

//     const addCampus = this.props.addCampus;
//     addCampus(this.state);
//     this.setState({campusName: '', campusDescription: ''})
//   }

//   render() {
//     return (
//       <div>
//         <h1>New Campus</h1>
//           <form>
//             <p>Campus Name</p>
//             <input type="text" value={this.state.campusName} onChange={this.handleNameChange}></input>
//             <p>Description</p>
//             <input type="text" value={this.state.campusDescription} onChange={this.handleDescriptionChange}></input>
//             <input type="submit" value="Submit">
//             </input>
//           </form>
//       </div>
//     )
//   }
// }
