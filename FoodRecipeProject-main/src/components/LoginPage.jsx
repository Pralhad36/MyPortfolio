import React, { useState, useRef } from "react";
import Header from "./Header";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/userSlice";
import { BACKGROUND_IMG } from "../../utils/constants";
import { validCheck } from "../../utils/validate";
import { auth } from "../../utils/firebase";

const LoginPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);

  const password = useRef(null);

  const submitHandler = () => {
    const message = validCheck(email.current.value, password.current.value);

    setErrorMessage(message);

    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);

          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              console.log(auth.currentUser);
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                })
              );
            })

            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorCode + "_" + errorMessage);

          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage("wrong email or password");
        });
    }
  };

  const clickHandler = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div className=" flex justify-center ">
      {/* <Header /> */}
      <form
        className="md:w-3/12 w-8/12 absolute text-black bg-[#FFA21B] opacity-90 mx-auto right-0 left-0 px-8 my-32 py-8"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className=" font-bold text-black text-xl py-2">
          {isSignIn ? "Sign In" : "Sign up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="name"
            className=" w-full p-2 my-2 border bg-amber-300"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="email"
          className=" w-full p-2 my-2 border bg-amber-300"
        />
        <input
          ref={password}
          type="password"
          placeholder="password"
          className=" w-full p-2 my-2 border bg-amber-300 "
        />
        <button
          onClick={submitHandler}
          className=" bg-red-700 w-full p-2 my-1 text-lg font-bold text-black"
        >
          submit
        </button>
        <p onClick={clickHandler} className=" cursor-pointer my-2 text-black font-semibold">
          {!isSignIn
            ? "Already user? Please sign in "
            : "Not user? Please Sign up"}
        </p>
        
        <p className=" text-red-600 font-bold text-lg">{errorMessage}</p>
      </form>
      <img className=" md:h-screen h-dvh w-full object-fill" src={BACKGROUND_IMG} alt="bgImage" />
    </div>
  )
};

export default LoginPage;
