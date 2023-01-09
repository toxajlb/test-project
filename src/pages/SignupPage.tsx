import { ChangeEvent, FormEvent, MouseEvent, useState } from 'react';
import { IAuth } from "../models/models";
import { useAppDispatch } from "../hooks/redux";
import { login } from "../store/actions/loginActions";
import { register } from "../store/actions/registerActions";
import { useNavigate } from "react-router-dom";

export function SignupPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState<IAuth>({
    login: '',
    password: '',
  });

  const isFormValid = () => {
    return form.password.trim().length && form.login.trim().length;
  }

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (isFormValid()) {
      dispatch(register(form));
      navigate('/');
    } else {
      alert('Form is invalid!');
    }
  }

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({...prev, [event.target.name]: event.target.value}));
  }

  const loginHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (isFormValid()) {
      dispatch(login(form));
      navigate('/');
    } else {
      alert('Form is invalid!');
    }
  }

  return (
    <form
      className=""
      onSubmit={submitHandler}
    >
      <div>
        <div>
          <label htmlFor="username" className="">Username</label>
          <input type="text" id="username" className="" name="username" onChange={changeHandler} />
        </div>

        <div className="">
          <label htmlFor="password" className="">Password</label>
          <input
            type="password"
            id="password"
            className=""
            name="password" onChange={changeHandler} />
        </div>

        <button
          type="submit"
          className=""
        >
          Register
        </button>

        <button
          type="button"
          className=""
          onClick={loginHandler}
        >
          Login
        </button>
      </div>
    </form>
  )
}
