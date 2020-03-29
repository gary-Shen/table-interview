import React, { useState, useEffect } from 'react';
import request from 'umi-request';
import { Button } from 'antd';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchUsers() {
      setUsers(await request.get('/api/users'));
    }

    fetchUsers();
  }, []);

  return (
    <div className="App">
        <h1>用户列表</h1>
        <pre style={{ textAlign: 'left' }}>
          {JSON.stringify(users, null, 2)}
        </pre>
      <Button>开始吧</Button>
    </div>
  );
}

export default App;
