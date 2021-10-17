import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [user, setUser] = useState('');
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [hasAccount, setHasAccount] = useState(false);

  

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
