import './App.css';

import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/Firebase';


// import RecipeInput from './componets/RecipeInput';
// import RecipeTable from './componets/RecipeTable';
import RecipePage from './componets/RecipePage';
import LoginPage from './componets/LoginPage';
import RegisterPage from './componets/RegisterPage';
import Navbar from './componets/Navbar';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
// import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  return (
  <BrowserRouter>
  <Navbar user={user} />
  <Routes>
    <Route path="/" element={<RecipePage />}></Route>
    <Route path="/login" element={<LoginPage />}></Route>
    <Route path="/register" element={<RegisterPage />}></Route>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
