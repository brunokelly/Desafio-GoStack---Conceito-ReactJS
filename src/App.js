import React, { useState } from "react";
import api from 'services/api'

import "./styles.css";

function App() {
  const [repo, setRepo] = useState([]);

  async function handleAddRepository() {
    
        const ShowRepo = await api.post('repositories', {
          id: 1,
          title: `${Date.now()}`,
          techs: 'Bruno Vieira'
        });

        setRepo([...repo, ShowRepo.data]);
      }

  async function handleRemoveRepository(id) {

        await api.delete(`/repositories/${id}`);

        setRepo(repo.filter(
          data => data.id !== id
        ))
  }

  return (
    <div>
      <ul data-testid="repository-list">
        <li>
          <ul>
          { repo.map(data => <li key={data.id}>{data.title} {data.techs}</li>)}
          </ul>

          <button onClick={() => handleRemoveRepository(repo.id)}>
            Remover
          </button>
        </li>
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
</div>
    
  );
}

export default App;
