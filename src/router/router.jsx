import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layout/MainLayout';
import AllJobsPage from '../pages/AllJobsPage/AllJobsPage';
import JobDetailsPage from '../pages/JobDetailsPage/JobDetailsPage';
import ApplicationPage from '../pages/ApplicationPage/ApplicationPage';
import MyApplicationPage from '../pages/MyApplicationPage/MyApplicationPage';
import HomePage from '../pages/HomePage/HomePage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children:[
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: 'jobs',
                element: <AllJobsPage />
            },
            {
                path: 'jobs/detais/:id',
                element: <JobDetailsPage />
            },
            {
                path: 'application/apply/:id',
                element: <ApplicationPage />
            }, 
            {
                path: 'application/my',
                element: <MyApplicationPage />
            }
        ]
    }
])

export default router;