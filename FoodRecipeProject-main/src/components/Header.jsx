import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from "../../utils/userSlice";
import { auth } from "../../utils/firebase";


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);


  const logoutHandler = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        navigate("/foodRecipe");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);


  return (
    <div className=" w-full flex justify-between px-10 items-center py-1 bg-gray-200  ">
      <div className=" w-2/12 relative ">
        <img
          className="w-20 rounded-2xl object-fill "
          src="https://e7.pngegg.com/pngimages/415/27/png-clipart-fruit-logo-food-recipe-business-seasoning-ingredients-natural-foods-dried-fruit.png"
          alt="logo"
        />
      </div>
      <div class>
        {user && (
          <div className="flex justify-evenly">
        

      
            <button
              onClick={logoutHandler}
              className=" bg-red-600 font-bold hover:bg-red-500 text-white md:px-4 md:text-base text-xs  rounded-lg p-2"
            >
              logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
