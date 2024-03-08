import React from 'react';
import './App.css';
import teamData from './CollegeBasketballTeams.json'; // Import the JSON data

interface Team {
  school: string;
  name: string;
  city: string;
  state: string;
}

function Heading() {
  return <h1>March Madness - NCAA Basketball Teams</h1>;
}

// Team card component
function TeamCard({ team }: { team: Team }) {
  const { school, name, city, state } = team;

  return (
    <div className="team-card">
      <h2>{school}</h2>
      <p>Mascot: {name}</p>
      <p>
        {' '}
        Location : {city}, {state}
      </p>
    </div>
  );
}

// List of team cards component
function TeamList() {
  return (
    <div className="team-list">
      {teamData.teams.map((team, index) => (
        <TeamCard key={index} team={team} />
      ))}
    </div>
  );
}

// App component
function App() {
  return (
    <div className="App">
      <Heading />
      <TeamList />
    </div>
  );
}

export default App;
