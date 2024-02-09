import { Routes, Route } from 'react-router-dom';

// imports start here 
import StudentHome from './pages/Student/Home/Home';
import Login from './pages/auth/Login';

function App() {
  
  return (
    <div className="App">
      {/* <h1>Naga Shreya</h1> */} 
      {/* {  <h1>Naga Sri</h1> }  --> team lead */}
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/auth/Login" element={<Login />} />
            <Route path="/student/Home" element={<StudentHome />} />
        </Routes>
    </div>
  );
}

export default App;
