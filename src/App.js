import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import data from "./mock-data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";

const App = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    email: "",
    projectAttendence: "",
    careerReadiness:"",
    attendence: "",
    bootcampCompletion: "",
    instructorRating: "",
    communicationInterview:"",
    englishPerformance:"",
    comments:"",
    performance:"",
    overAllGrading:""

  });

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    email: "",
    projectAttendence: "",
    careerReadiness: "",
    attendence: "",
    bootcampCompletion: "",
    instructorRating: "",
    communicationInterview:"",
    englishPerformance:"",
    comments:"",
    performance:"",
    overAllGrading:""





  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      email: addFormData.email,
      projectAttendence: addFormData.projectAttendence,
      careerReadiness:addFormData.careerReadiness,
      attendence: addFormData.attendence,
      bootcampCompletion: addFormData.bootcampCompletion,
      instructorRating: addFormData.instructorRating,
      communicationInterview:addFormData.communicationInterview,
      englishPerformance:addFormData.englishPerformance,
      comments:addFormData.comments,
      performance:addFormData.performance,
      overAllGrading:addFormData.overAllGrading



    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      email: editFormData.email,
      projectAttendence: editFormData.projectAttendence,
      careerReadiness:editFormData.careerReadiness,
      attendence: editFormData.attendence,
      bootcampCompletion: editFormData.bootcampCompletion,
      instructorRating:editFormData.instructorRating,
      communicationInterview:editFormData.communicationInterview,
      englishPerformance:editFormData.englishPerformance,
      comments:editFormData.comments,
      performance:editFormData.performance,
      overAllGrading:editFormData.overAllGrading

    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      email: contact.email,
      projectAttendence: contact.projectAttendence,
      careerReadiness:contact.careerReadiness,
      attendence: contact.attendence,
      bootcampCompletion: contact.bootcampCompletion,
      instructorRating:contact.instructorRating,
      communicationInterview:contact.communicationInterview,
      englishPerformance:contact.englishPerformance,
      comments:contact.comments,
      performance:contact.performance,
      overAllGrading:contact.overAllGrading

    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Project Attendence</th>
              <th>Career Readiness</th>
              <th>Attendence</th>
              <th>Bootcamp Completion</th>
              <th>Instructor Rating</th>
              <th>Communication Interview</th>
              <th>English Performance</th>
              <th>Comments</th>
              <th>Performance</th>
              <th>OverAll Grading</th>


              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Add a Contact</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
         <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter an email..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="projectAttendence"
          required="required"
          placeholder="projectAttendence..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="careerReadiness"
          required="required"
          placeholder="Career Readiness..."
          onChange={handleAddFormChange}
        />
          <input
          type="text"
          name="attendence"
          required="required"
          placeholder="Attendence..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="bootcampCompletion"
          required="required"
          placeholder="Bootcamp Completion..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="instructorRating"
          required="required"
          placeholder="Instructor Rating..."
          onChange={handleAddFormChange}
        />
       <input
          type="text"
          name="communicationInterview"
          required="required"
          placeholder="Communication Interview..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="englishPerformance"
          required="required"
          placeholder="English Performance..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="comments"
          required="required"
          placeholder="Comments..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="performance"
          required="required"
          placeholder="Performance..."
          onChange={handleAddFormChange}
        />
         <input
          type="text"
          name="overAllGrading"
          required="required"
          placeholder="OverAll Grading..."
          onChange={handleAddFormChange}
        />


        <button type="submit" >Add</button>
      </form>
    </div>
  );
};

export default App;
