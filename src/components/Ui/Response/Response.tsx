


interface ResponseProps {
  response: string;
  loading: boolean;
}

const ResponseComponent: React.FC<ResponseProps> = ({ response, loading }) => {
  return (

    <div className="flex flex-col gap-2">

      <h1 className="text-2xl cursor-pointer font-bold  text-white">Welcome To  Chaemini AI</h1>

      <h2 className="text-lg font-semibold">Response:</h2>
      {loading ? (
        <div className="flex items-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-cyan-400 mr-3"></div> {/* Loading spinner */}
        </div>
      ) : (
        <div className="bg-gray-700 p-5 rounded-lg shadow-lg ">
          <p> {response} </p>
        </div>
      )}
    </div>
  );
};

export default ResponseComponent;
