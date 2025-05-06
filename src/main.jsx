import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import User from "./components/User/User.jsx";
import BookFreeCall from "./components/BookFreeCall.jsx";
import PrivacyPolicy from "./components/Legal/PrivacyPolicy.jsx";
import TermsAndConditions from "./components/Legal/TermsAndConditions.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact/>,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/book-free-call" element={<BookFreeCall />} />
      {/* <Route path="about" element={<About />} /> */}
      {/* <Route path="contact" element={<Contact />} /> */}
      <Route path="privacy" element={<PrivacyPolicy />} />
      <Route path="terms" element={<TermsAndConditions />} />
      {/* <Route path="user/:userid" element={<User />} /> */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
