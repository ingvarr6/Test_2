import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class Login extends Component {
  state = {
    redirectToPreviousRoute: false,
    form: {
      email: {
        value: "",
        validation: {
          email: true
        },
        valid: false,
        touched: false
      },
      password: {
        value: "",
        validation: {
          required: true,
          minLength: 5,
          maxLength: 12
        },
        valid: false,
        touched: false
      }
    },
    formIsValid: false
  };

  onEnterPress = e => {
    if (e.keyCode === 13 && !this.props.fetching) {
      this.handleSubmit();
    }
  };

  handleChange = e => {
    const updatedForm = {
      ...this.state.form
    };

    const currentElement = e.currentTarget.dataset.fieldName;
    const updatedFormElement = {
      ...updatedForm[currentElement]
    };

    updatedFormElement.value = e.currentTarget.value;
    updatedFormElement.touched = true;
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedForm[currentElement] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedForm) {
      formIsValid = updatedForm[inputIdentifier].valid && formIsValid;
    }

    this.setState({
      form: updatedForm,
      formIsValid: formIsValid
    });
  };

  handleSubmit = e => {
    const emailValue = this.state.form.email.value;
    const passwordValue = this.state.form.password.value;

    const passwordIsValid = this.state.form.password.validation.valid
    if (!passwordIsValid) {
      this.setState(prev => ({
        ...prev,
        
      }))
    }

    this.props.logIn(
      {
        email: emailValue,
        password: passwordValue
      },
      () => {
        this.setState({ redirectToPreviousRoute: true });
      }
    );
  };

  checkValidity(value, rules) {
    let isValid = true;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (rules.email) {
      isValid = re.test(value.toLowerCase());
    }

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    return isValid;
  }

  render() {
    const { location, errMsg, fetching } = this.props;
    const { from } = location.state || { from: { pathname: "/" } };
    const { redirectToPreviousRoute, formIsValid } = this.state;
    const { email, password } = this.state.form;

    if (redirectToPreviousRoute) {
      return <Redirect to={from} />;
    }

    return (
      <div className="column is-4 is-offset-4  box">
        <div className="field">
          <label className="label">Login</label>
          <div className="control has-icons-left">
            <input
              className={`input ${!email.valid && email.touched && "is-danger"} 
              ${email.valid && email.touched && "is-success"}`}
              data-field-name={"email"}
              onChange={this.handleChange}
              type="email"
              placeholder="Email"
              value={email.value}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope" />
            </span>
          </div>
          {!email.valid &&
            email.touched && (
              <p className="help is-danger">Некорректный Email</p>
            )}
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control has-icons-left">
            <input
              className={`input ${!password.valid &&
                password.touched &&
                "is-danger"}`}
              data-field-name={"password"}
              onChange={this.handleChange}
              onKeyDown={this.onEnterPress}
              type="password"
              placeholder="Password"
              value={password.value}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-lock" />
            </span>
          </div>
          {!password.valid &&
            password.touched && (
              <p className="help is-danger">Пароль от 5 до 12 символов</p>
            )}
        </div>
        <div className="field">
          <div className="control">
            {!fetching ? (
            <button onClick={this.handleSubmit} disabled={!formIsValid} className="button is-primary">
                Login
              </button>
            ) : (
              <button disabled className="button is-primary is-loading">
                Login
              </button>
            )}
          </div>
        </div>
        {errMsg && <div className="notification is-danger">{errMsg}</div>}
      </div>
    );
  }
}
