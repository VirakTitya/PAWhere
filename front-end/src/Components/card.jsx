import React from 'react';

const Card = () => {
  return (
    <div className="flex flex-col gap-2 dark:text-white max-w-md w-screen bg-white dark:bg-neutral-900 p-4 mt-5 rounded-md shadow-md hover:scale-105 hover:duration-150 duration-150">
      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-row justify-between w-full">
          <div className="bg-gray-200 dark:bg-neutral-700 rounded-md w-20 h-4 " />
          <div className="bg-gray-200 dark:bg-neutral-700 rounded-md w-10" />
        </div>
      </div>
      <div className="flex flex-row justify-between w-full">
        <div className="bg-gray-200 dark:bg-neutral-700 rounded-md w-40 " />
        <div className="text-xs">
          <div className="flex flex-row">
            <svg fill="currentColor" viewBox="0 0 20 20" className="h-4 w-4 text-yellow-400" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z" />
            </svg>
            <svg fill="currentColor" viewBox="0 0 20 20" className="h-4 w-4 text-yellow-400" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z" />
            </svg>
            <svg fill="currentColor" viewBox="0 0 20 20" className="h-4 w-4 text-yellow-400" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z" />
            </svg>
            <svg fill="currentColor" viewBox="0 0 20 20" className="h-4 w-4 text-yellow-400" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z" />
            </svg>
            <svg fill="currentColor" viewBox="0 0 20 20" className="h-4 w-4 text-yellow-200" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 dark:bg-neutral-700 rounded-md w-full h-20 font-mono">
        <p>Hello World</p>
      </div>
    </div>
    
  );
}

export default Card;
