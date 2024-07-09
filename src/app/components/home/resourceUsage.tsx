const ResourceUsage = () => {
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
        <h2 className="text-xl font-semibold mb-4">System Resource Usage</h2>
        <div className="flex justify-around">
          <div>
            <h3 className="text-lg font-semibold">CPU Usage</h3>
            <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
              45%
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Memory Usage</h3>
            <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
              65%
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Disk Usage</h3>
            <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
              75%
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResourceUsage;
