// import React from "react";
// import { Button, Form, FormGroup, Input, Label } from "reactstrap";

// import axios from "axios";

// import { API_URL } from "../constants";

// class NewStudentForm extends React.Component {
//   state = {
//     pk: 0,
//     name: "",
//     email: "",
//     document: "",
//     phone: ""
//   };

//   componentDidMount() {
//     if (this.props.student) {
//       const { pk, name, document, email, phone } = this.props.student;
//       this.setState({ pk, name, document, email, phone });
//     }
//   }

//   onChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   createStudent = e => {
//     e.preventDefault();
//     axios.post(API_URL, this.state).then(() => {
//       this.props.resetState();
//       this.props.toggle();
//     });
//   };

//   editStudent = e => {
//     e.preventDefault();
//     axios.put(API_URL + this.state.pk, this.state).then(() => {
//       this.props.resetState();
//       this.props.toggle();
//     });
//   };

//   defaultIfEmpty = value => {
//     return value === "" ? "" : value;
//   };

//   render() {
//     return (
//       <Form onSubmit={this.props.student ? this.editStudent : this.createStudent}>
//         <FormGroup>
//           <Label for="name">Name:</Label>
//           <Input
//             type="text"
//             name="name"
//             onChange={this.onChange}
//             value={this.defaultIfEmpty(this.state.name)}
//           />
//         </FormGroup>
//         <FormGroup>
//           <Label for="email">Email:</Label>
//           <Input
//             type="email"
//             name="email"
//             onChange={this.onChange}
//             value={this.defaultIfEmpty(this.state.email)}
//           />
//         </FormGroup>
//         <FormGroup>
//           <Label for="document">Document:</Label>
//           <Input
//             type="text"
//             name="document"
//             onChange={this.onChange}
//             value={this.defaultIfEmpty(this.state.document)}
//           />
//         </FormGroup>
//         <FormGroup>
//           <Label for="phone">Phone:</Label>
//           <Input
//             type="text"
//             name="phone"
//             onChange={this.onChange}
//             value={this.defaultIfEmpty(this.state.phone)}
//           />
//         </FormGroup>
//         <Button>Send</Button>
//       </Form>
//     );
//   }
// }

// export default NewStudentForm;


import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

class NewEventForm extends React.Component {
  state = {
    id: 0,
    eventname: "",
    desc: "",
    startdate: "",
    enddate: "",
    location: "",
    imgs: "",
    status: "True"
  };

  componentDidMount() {
    if (this.props.event) {
      const {id,eventname,desc,startdate,enddate,location,imgs,status} = this.props.event;
      this.setState({id,eventname,desc,startdate,enddate,location,imgs,status});
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createEvent = e => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editEvent = e => {
    e.preventDefault();
    axios.put(API_URL + this.state.id, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.event ? this.editEvent : this.createEvent}>
        <FormGroup>
          <Label for="eventname">Event Name:</Label>
          <Input
            type="text"
            name="eventname"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.eventname)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="desc">Descrioption:</Label>
          <Input
            type="text"
            name="desc"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.desc)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="startdate">Start Date:</Label>
          <Input
            type="date"
            name="startdate"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.startdate)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="enddate">End Date:</Label>
          <Input
            type="date"
            name="enddate"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.enddate)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="location">Location:</Label>
          <Input
            type="text"
            name="location"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.location)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="imgs">Image Path:</Label>
          <Input
            type="text"
            name="imgs"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.imgs)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="status">Status:</Label>
          <Input
            type="checkbox"
            name="status"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.status)}
          />
        </FormGroup>
        
        
        <Button>ADD</Button>
      </Form>
    );
  }
}

export default NewEventForm;
