// eslint-disable-next-line prefer-regex-literals
export const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
// eslint-disable-next-line prefer-regex-literals
export const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');

// import React, { useState } from 'react';
// import { validEmail, validPassword } from './regex.js';

// const App = () => {
//    const [email, setEmail] = useState('');
//    const [password, setPassword] = useState('');
//    const [emailErr, setEmailErr] = useState(false);
//    const [pwdError, setPwdError] = useState(false);
//    const validate = () => {
//       if (!validEmail.test(email)) {
//          setEmailErr(true);
//       }
//       if (!validPassword.test(password)) {
//          setPwdError(true);
//       }
//    };
//    return (
//       <div>
//          <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//          />
//          <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//          />
//          <div>
//             <button onClick={validate}>Validate
//          </div>
//          {emailErr && <p>Your email is invalid</p>}
//          {pwdError && <p>Your password is invalid</p>}
//       </div>
//    );
// };
// export default App;
