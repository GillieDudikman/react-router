import './App.css';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Home from "./components/Home";
import NoPage from "./errors/NoPage";
import About from "./components/About";
import Layout from "./layouts/Layout";
import Help from "./layouts/Help";
import Faq from "./components/Faq";
import Contact, {contactAction} from "./components/Contact";
import Users, { usersLoader } from "./components/Users";
import UsersLayout from "./layouts/UsersLayout";
import UserDetails, {detailsLoader} from "./components/UserDetails";
import UserError from "./errors/UserError";
import HelpError from "./errors/HelpError";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="react-router" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="about" element={<About />}/>

            <Route path="users" element={<UsersLayout />} errorElement={<UserError/>}>
                <Route index element={<Users/>} loader={usersLoader}/>
                <Route path=":id" element={<UserDetails />} loader={detailsLoader} />
            </Route>

            <Route path="help" element={<Help />} errorElement={<HelpError />}>
                <Route path="faq" element={<Faq />}/>
                <Route path="contact" element={<Contact />} action={contactAction}/>
            </Route>



            <Route path="*" element={<NoPage />} />
        </Route>
    )
)

function App() {
  return (
          <RouterProvider router={router} />

  );
}

export default App;
