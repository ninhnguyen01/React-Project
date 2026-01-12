function userGreeting(props) {

    const welcomeMsg = <h2 className="welcome-msg">Welcome {props.username}</h2>;
    const loginPrompt = <h2 className="login-prompt">Please login to continue</h2>;

    return (props.isLoggedIn ? welcomeMsg : loginPrompt);
}

export default userGreeting