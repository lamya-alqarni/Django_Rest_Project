// import React, { Component } from "react";
// import { Col, Container, Row } from "reactstrap";
// import StudentList from "./StudentList";
// import NewStudentModal from "./NewStudentModal";

// import axios from "axios";

// import { API_URL } from "../constants";

// class Home extends Component {
//   state = {
//     students: []
//   };

//   componentDidMount() {
//     this.resetState();
//   }

//   getStudents = () => {
//     axios.get(API_URL).then(res => this.setState({ students: res.data }));
//   };

//   resetState = () => {
//     this.getStudents();
//   };

//   render() {
//     return (
//       <Container style={{ marginTop: "20px" }}>
//         <Row>
//           <Col>
//             <StudentList
//               students={this.state.students}
//               resetState={this.resetState}
//             />
//           </Col>
//         </Row>
//         <Row>
//           <Col>
//             <NewStudentModal create={true} resetState={this.resetState} />
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// }

// export default Home;



import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import EventList from "./EventList";
import NewEventModal from "./NewEventModal";

import axios from "axios";

import { API_URL } from "../constants";

class Home extends Component {
  state = {
    events: []
  };

  componentDidMount() {
    this.resetState();
  }

  getEvents = () => {
    axios.get('http://localhost:8000/api/events/').then(res => this.setState({ events: res.data }));
  };

  resetState = () => {
    this.getEvents();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <EventList
              events={this.state.events}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewEventModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
