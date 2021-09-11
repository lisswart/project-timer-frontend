import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const baseURL = "https://young-dusk-40321.herokuapp.com/";
  const [ projects, setProjects ] = useState([]);
  const [ labels, setLabels ] = useState([]);

  useEffect(() => {
    fetch(`${baseURL}projects`)
      .then(r => r.json())
      .then(promisedProj => {
        console.log(promisedProj);
        setProjects(promisedProj);
      })
  }, []);

  useEffect(() => {
    fetch(`${baseURL}labels`)
      .then(r => r.json())
      .then(promisedLabels => {
        console.log(promisedLabels);
        setLabels(promisedLabels);
      })
  }, []);

  const projList = projects.map(project => {
    return (
      <div key={project.id}>
        {project.name} - {project.status} - 
        {
          project.timers !== []
          ? project.timers.map(timer => {
              return (
                <div key={timer.id}>
                    {timer.length} minutes - label: {timer.label_id}
                </div>
              );
            })
          : <>0 minute</>
        }
      </div>
    );
  });

  const labelList = labels.map(label => <p key={label.id}>{label.name}</p>);

  return (
    <div className="App">
      {projList}
      {labelList}
    </div>
  );
}

export default App;
