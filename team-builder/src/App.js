
import './App.css';
import React, { useState } from 'react';
// import axios from 'axios';

import TeamMemberForm from './components/TeamMemberForm';
import TeamMember from './components/TeamMember';

const initialFormValues = {
  username: '',
  email: '',
  role: '',
}

function App() {
  const [teamMembers, setTeamMembers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue})
  }

  const submitForm = () => {
    const newTeamMember = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }
    if (!newTeamMember.username || !newTeamMember.email || !newTeamMember.role) return
    // axios.post('fakeapi.com', newTeamMember)
    //   .then(res => {
    //     const teamMemberFromBackend = res.data
        setTeamMembers([newTeamMember, ...teamMembers])
        setFormValues(initialFormValues)
  }



  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Lambda</h1>
        <TeamMemberForm
      update={updateForm}
      submit={submitForm}
      values={formValues}
      />

      { 
        teamMembers.map(teamMember => {
          return (
            <TeamMember key={teamMember.id} details={teamMember} />
          )
        })}
      </header>
    </div>
  );
}

export default App;
