import React, { Suspense } from 'react';
import MyJobPostList from '../../../components/MyJobPostList/MyJobPostList';
import useAuth from '../../../Hooks/useAuth';
import { myPostedJobsApi } from '../../../components/apis/myPostedJobsApi';

const MyJobPost = () => {
    const { user } = useAuth()
    return (
      <section className="max-w-7xl mx-auto px-5 md:px-30 pb-10">
        <h1 className="text-secondary text-3xl text-center bg-base-200 font-bold p-10 rounded-sm mb-5">
          My Jobs Post
        </h1>
        <Suspense fallback={<p className='text-center'>Loading....</p>}>
          <MyJobPostList myPostedJobsApi={myPostedJobsApi(user?.email)} />
        </Suspense>
      </section>
    );
};

export default MyJobPost;
