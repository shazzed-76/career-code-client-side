import { BsCoin } from 'react-icons/bs';
import { FaRegClock } from 'react-icons/fa';
import { HiBadgeCheck } from 'react-icons/hi';
import { IoBagCheckOutline, IoLocationOutline } from 'react-icons/io5';
import { LiaIndustrySolid } from 'react-icons/lia';
import { TbPointFilled } from 'react-icons/tb';
import { useLoaderData } from 'react-router';

const JobDetailsPage = () => {
    const job = useLoaderData();
    console.log(job)
    return (
      <div className="max-w-7xl mx-auto px-5 lg:px-0 py-20">
        <h1 className="text-3xl font-bold text-secondary py-2">
          {job?.job_title}
        </h1>
        <p className="flex gap-1 items-center text-sm text-gray-500">
          <IoLocationOutline /> {job?.location}
        </p>
        <div className="border border-gray-500 p-5 mt-5">
          <h3 className="text-2xl font-bold text-secondary capitalize">
            emplayment information
          </h3>
          <div className="divider"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 text-gray-500 text-lg">
            <div className="flex items-center gap-3">
              <LiaIndustrySolid />
              <p className="capitalize ">
                company{" "}
                <span className="text-secondary">{job?.company_name}</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <BsCoin />
              <p className="capitalize ">
                salary{" "}
                <span className="text-secondary">{job?.salary_range}</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <HiBadgeCheck />
              <p className="capitalize ">
                experience{" "}
                <span className="text-secondary">{job?.experience}</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <IoBagCheckOutline />
              <p className="capitalize ">
                job type <span className="text-secondary">{job?.job_type}</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <FaRegClock />
              <p className="capitalize ">
                deadline <span className="text-secondary">{job?.deadline}</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <IoLocationOutline />
              <p className="capitalize ">
                location <span className="text-secondary">{job?.location}</span>
              </p>
            </div>
          </div>
        </div>

        <ul className='py-5'>
            <li className="text-accent text-left">
              <h2 className="text-2xl font-bold pb-3 flex gap-2 items-center capitalize">
                <TbPointFilled />
                Job description
              </h2>
              <p className="text-lg font-semibold pl-7">{job?.job_description}</p>
            </li>
            <li className="text-accent text-left">
              <h2 className="text-2xl font-bold pb-3 flex gap-2 items-center capitalize">
                <TbPointFilled />
                requirements
              </h2>
              <p className="text-lg font-semibold pl-7">
               <ul className='list-disc list-inside'>
                 {
                    job?.requirements.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))
                 }
               </ul>
              </p>
            </li>
        </ul>
            <div className='divider'></div>
        <div className='flex justify-between itmes-center'>
            <button className='btn btn-outline btn-primary capitalize'>go back</button>
            <button className='btn btn-primary capitalize'>apply</button>
        </div>
      </div>
    );
};

export default JobDetailsPage;