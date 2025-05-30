import React, { Suspense } from 'react';
import BannerSec from '../BannerSec/BannerSec';
import LatestJobSec from './LatestJobSec/LatestJobSec';

const jobPromise = fetch("http://localhost:3000/recent/jobs").then((res) =>
  res.json()
);
const HomePage = () => {
    return (
      <>
        <section>
          <BannerSec />
        </section>
        <section>
          <Suspense fallback={<p>Loading......</p>}>
            <LatestJobSec jobPromise={jobPromise} />
          </Suspense>
        </section>
      </>
    );
};

export default HomePage;