import './Login.css';

function Login() {
  return (
    <div>
        <form className="loginForm">
            <img src="/logo.png" alt="Logo of the page, a slime"/>
            <h1>AnimeEnclave</h1>
            <label>Username</label>
            <input type='text' placeholder='ExampleUser...'></input>
            <label>Password</label>
            <input type='text' placeholder='Password123...'></input>

            <button className='loginButton'>Log In!</button>
        </form>
    </div>
  );
}

export default Login;
