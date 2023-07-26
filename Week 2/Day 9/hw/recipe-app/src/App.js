import './App.css';

import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/Firebase';


import RecipePage from './componets/RecipePage';
import LoginPage from './componets/LoginPage';
import RegisterPage from './componets/RegisterPage';
import Navbar from './componets/Navbar';
import RequireAuth from './componets/Day 11 componets/RequireAuth';
import Spinner from './componets/Day 11 componets/Spinner';




import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
// import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  const [user, setUser] = useState(null);
  const [isUserUpdated, setIsUserUpdated] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsUserUpdated(true);
    });
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  return (
  <BrowserRouter>
  <Navbar user={user} />
  { isUserUpdated ? (
    <Routes>
    <Route
      path="/"
      element={
        <RequireAuth user={user}>
          <RecipePage user={user} />
        </RequireAuth>
      }
    ></Route>
    <Route path="/login" element={<LoginPage />}></Route>
    <Route path="/register" element={<RegisterPage />}></Route>
  </Routes>
  ) : (
    <div className="mt-5 text-center">
          <Spinner></Spinner>
        </div>
  ) }
  {/* <Routes>
    <Route path="/" element={<RecipePage />}></Route>
    <Route path="/login" element={<LoginPage />}></Route>
    <Route path="/register" element={<RegisterPage />}></Route>
  </Routes> */}
  </BrowserRouter>
  );
}

export default App;
