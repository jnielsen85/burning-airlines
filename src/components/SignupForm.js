import React, {PureComponent as Component} from 'react';


class SignupForm extends Component{

  constructor(props)
  {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange (e){
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit(e){
    e.preventDefault();
    if (this.state.password === "chicken")
    {
        if (this.state.username === "Jose")
        {
          window.location.href = "http://localhost:3000/#/jose";
        }

        if (this.state.username === "Maddi")
        {
          window.location.href = "http://localhost:3000/#/maddi";
        }

        if (this.state.username === "Craigsy")
        {
          window.location.href = "http://localhost:3000/#/craigsy";
        }
    }

    else {
      window.location.href = "http://localhost:3000";
    }

  }


  render(){
    return (
      <form onSubmit = {this.onSubmit} className="login" >
        <div className="login-field">
        <label className="login-label">Username</label>
        <input
          className="search-user"
          value = {this.state.username}
          onChange = {this.onChange}
          type = "text"
          name = "username"
        />
        </div>

        <div className="login-field">
        <label className="login-label">Password</label>
        <input
          className="search-user"
          value = {this.state.password}
          onChange = {this.onChange}
          type = "password"
          name = "password"
        />
        </div>

        <div>
          <button className="res-button login-button">
           Sign In
          </button>
        </div>
      </form>
    );
  }
}

export default SignupForm;
