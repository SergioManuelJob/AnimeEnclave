import './Register.css';

function Register() {
  return (
    <div>
        <form className="registerForm">
            <img src="/logo.png" alt="Logo of the page, a slime"/>
            <h1>AnimeEnclave</h1>
            <label>Username
            <input type='text' placeholder='i.e: My user' name='username' autoComplete='name'></input>
            </label>
            <label>Email
            <input type='text' placeholder='i.e: user@example.com' name='email' autoComplete='email'></input>
            </label>
            <label>Password
            <input type='text' placeholder='i.e: Password123' name='password' autoComplete='new-password'></input>
            </label>
            <button className='registerButton'>Log In!</button>
        </form>
    </div>
  );
}

export default Register;
