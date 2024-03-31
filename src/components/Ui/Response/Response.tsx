import React, { useEffect, useState } from 'react';

interface ResponseProps {
  response: string;
  loading?: boolean;
}

const ResponseComponent: React.FC<ResponseProps> = ({ response, loading }) => {
  const [displayedResponse, setDisplayedResponse] = useState<string>('');

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= response.length) {
        setDisplayedResponse(response.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    });

    return () => clearInterval(interval);
  }, [response]);

  return (
    <div className="relative lg:top-0 lg:left-96 md:left-80 sm:left-0 w-full flex flex-col gap-2 lg:max-w-[50rem] md:max-w-[40rem]">
      <h1 className="text-lg font-semibold">Response:</h1>
      <div className="bg-gray-700 rounded-b-lg shadow-lg overflow-hidden rotate-180">
        {loading ? (
          <div className="max-h-[28.5rem] overflow-y-auto p-5 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-cyan-400"></div>
          </div>
        ) : (
          <div className="max-h-[28.5rem] overflow-y-auto p-5 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-900">
            <p className='rotate-180'>{displayedResponse}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResponseComponent;
