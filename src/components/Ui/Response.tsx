interface ResponseProps {
  response: string;
  loading: boolean;
}

const ResponseComponent: React.FC<ResponseProps> = ({ response, loading }) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-lg font-semibold">Response:</h2>
      {loading ? (
        <div className="flex items-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-cyan-400 mr-3"></div> {/* Loading spinner */}
        </div>
      ) : (
        <p>{response}</p> // Display response if loading is false
      )}
    </div>
  );
};

export default ResponseComponent;
