import Header from "./Header";
import Sidebar from "./Sidebar";
import Emaillist from "./Emaillist";
import Compose from "./Compose";
import { useDispatch, useSelector } from "react-redux";
import Emaildetail from "./Emaildetail";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";
import { signin, signout } from "./features/userSlice";

function App() {
  const isMessageOpen = useSelector((state) => state.mail.sendMessageIsOpen);
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("hello", user);
        dispatch(
          signin({
            displayName: user.displayName,
            photoURL: user.photoURL,
            email: user.email,
          })
        );
      } else {
        dispatch(signout());
      }
    });
  }, []);
  return (
    <div className="App">
      {user ? (
        <BrowserRouter>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Routes>
              <Route exact path="/" element={<Emaillist />} />
              <Route exact path="/mail" element={<Emaildetail />} />
            </Routes>
          </div>
        </BrowserRouter>
      ) : (
        <Login />
      )}
      {isMessageOpen && <Compose />}
    </div>
  );
}

export default App;
