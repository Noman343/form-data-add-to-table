import React from "react";
import './readonly.css';

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td></td>
      <td>{contact.fullName}</td>
      <td>{contact.email}</td>
      <td>{contact.projectAttendence}</td>
      <td>{contact.careerReadiness}</td>
      <td>{contact.attendence}</td>
      <td>{contact.bootcampCompletion}</td>
      <td>{contact.instructorRating}</td>
      <td>{contact.communicationInterview}</td>
      <td>{contact.englishPerformance}</td>
      <td>{contact.comments}</td>
      <td>{contact.performance}</td>
      <td>{contact.overAllGrading}</td>
      
      
      
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
