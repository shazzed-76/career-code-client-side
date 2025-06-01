import React, { Suspense, use } from 'react';
import useAuth from '../../Hooks/useAuth';
import MyApplicationRaw from '../../components/MyApplicationRaw/MyApplicationRaw';
import MyApplicationList from '../../components/MyApplicationList/MyApplicationList';
import { myApplicationPromise } from '../../components/apis/myApplicationApi';

const MyApplicationPage = () => {
    const { user } = useAuth();
  
    return (
      <div className="max-w-7xl mx-auto px-5 md:px-30 py-10">
        <div className="overflow-x-auto">
          <Suspense fallback={<p>loading......</p>}>
            <MyApplicationList myApplicationPromise={myApplicationPromise(user.email)} />
          </Suspense>
        </div>
      </div>
    );
};

export default MyApplicationPage;