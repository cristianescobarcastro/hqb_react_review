import React, { useRef, useState } from "react";

function Login() {
  const input1 = useRef<any>(null);
  const input2 = useRef<any>(null);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
    
  const handlerChangeEmail = (event: any) => {
      const value = event.target.value;
      setEmail(value);
  }

  const handlerChangePassword = (event: any) => {
      const value = event.target.value;
      setPassword(value);
  }

  const handleBtnLogin = () => {

    if (email.length == 0)
    {
        input1.current.focus();
        return;
    }        
    else if (password.length == 0){
        input2.current.focus();
        return;
    }    
  }; 
  return (
    <div className="App">
      <div>
        <input ref={input1} type="text" name="email" id="email" placeholder="Email" onChange={handlerChangeEmail} value={email} />
      </div>
      <div>
        <input ref={input2}  type="text" name="password" id="password" placeholder="Contraseña" onChange={handlerChangePassword} value={password} />
      </div>
      <button onClick={handleBtnLogin}>Login</button>     
    </div>
  );
}

export default function App() {
  return (
    <>
      <Login />
    </>
  );
}