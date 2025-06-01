import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import AllJobsPage from "../pages/AllJobsPage/AllJobsPage";
import JobDetailsPage from "../pages/JobDetailsPage/JobDetailsPage";
import ApplicationPage from "../pages/ApplicationPage/ApplicationPage";
import MyApplicationPage from "../pages/MyApplicationPage/MyApplicationPage";
import HomePage from "../pages/HomePage/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import Registration from "../pages/Registration/Registration";
import PrivateRoute from "../pages/Registration/PrivateRoute/PrivateRoute";
import { Suspense } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "jobs",
        element: <AllJobsPage />,
      },
      {
        path: "jobs/details/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobs/details/${params.id}`),
        element: <JobDetailsPage />,
      },
      {
        path: "application/apply/:id",
        element: <ApplicationPage />,
      },
      {
        path: "application/my",
        element: (
          <PrivateRoute>
            <MyApplicationPage />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "register",
    element: <Registration />,
  },
]);

export default router;
