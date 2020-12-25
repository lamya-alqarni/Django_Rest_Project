// import React, { Component } from "react";
// import { Table } from "reactstrap";
// import NewStudentModal from "./NewEventModal";

// import ConfirmRemovalModal from "./ConfirmRemovalModal";

// class StudentList extends Component {
//   render() {
//     const students = this.props.students;
//     return (
//       <Table dark>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Document</th>
//             <th>Phone</th>
//             <th>Registration</th>
//             <th></th>
//           </tr>
//         </thead>
//         <tbody>
//           {!students || students.length <= 0 ? (
//             <tr>
//               <td colSpan="6" align="center">
//                 <b>Ops, no one here yet</b>
//               </td>
//             </tr>
//           ) : (
//             students.map(student => (
//               <tr key={student.pk}>
//                 <td>{student.name}</td>
//                 <td>{student.email}</td>
//                 <td>{student.document}</td>
//                 <td>{student.phone}</td>
//                 <td>{student.registrationDate}</td>
//                 <td align="center">
//                   <NewStudentModal
//                     create={false}
//                     student={student}
//                     resetState={this.props.resetState}
//                   />
//                   &nbsp;&nbsp;
//                   <ConfirmRemovalModal
//                     pk={student.pk}
//                     resetState={this.props.resetState}
//                   />
//                 </td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </Table>
//     );
//   }
// }

// export default StudentList;



import React, { Component } from "react";
import { Table } from "reactstrap";
import NewEventModal from "./NewEventModal";
import ConfirmRemovalModal from "./ConfirmRemovalModal";
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 140,
//   },
// });


class EventList extends Component {
  render() {
    
    const events = this.props.events;
    return (
      // <Card >
      // <CardActionArea>
      //   <div>
      // {events.map(event => (
      //     <div key={event.id}>
      //       <div>{event.eventname}</div>
      //     <img src={event.imgs} width="300"/>
      //     </div>
      // ))}
      // </div>
      //   <CardMedia
          
      //     image="/static/images/cards/contemplative-reptile.jpg"
      //     title="Contemplative Reptile"
      //   />
      //   <CardContent>
      //     <Typography gutterBottom variant="h5" component="h2">
      //       Lizard
      //     </Typography>
      //     <Typography variant="body2" color="textSecondary" component="p">
      //       Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
      //       across all continents except Antarctica
      //     </Typography>
      //   </CardContent>
      // </CardActionArea>
      // <CardActions>
        
      // </CardActions>
    
        <Table dark>
        <thead>
          <tr>
            <th>Event Name</th>
            <th>Descrioption</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Location</th>
            <th>Image</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!events || events.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            events.map(event => (
              <tr key={event.id}>
                <td>{event.eventname}</td>
                <td>{event.desc}</td>
                <td>{event.startdate}</td>
                <td>{event.enddate}</td>
                <td>{event.location}</td>
                <td><img src={event.imgs} width="300" /></td>
                <td>{event.status}</td>
                <td align="center">
                  <NewEventModal
                    create={false}
                    event={event}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    id={event.id}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>  
      //</Card>
    );
  }
}

export default EventList;
