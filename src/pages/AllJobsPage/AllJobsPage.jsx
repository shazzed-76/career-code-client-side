import React, { Suspense, use } from "react";
import { AllJobsPromise } from "../../components/apis/AlljobsApi";
import JobCardContainer from "../../components/JobCardContainer/JobCardContainer";

const AllJobsPage = () => {
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-30 py-10">
      <Suspense
        fallback={<p className="text-center">Loading......</p>}
      >
        <JobCardContainer AllJobsPromise={AllJobsPromise()} />
      </Suspense>
    </section>
  );
};

export default AllJobsPage;
