import './App.css';

function App() {

  const users = [
    { name: "Randy Cox", id: 1 },
    { name: "Cody Thaller", id: 2 },
    { name: "Michelle Hoelzer", id: 3 }
  ];

  return (
    <div>
      <h1>User names</h1>
      <ul>
        { users.map(u => <li>{u.name}</li> )  }
      </ul>
    </div>
  );
}

export default App;
