const SystemOverView = () => {
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">System Overview</h2>
        <p>Running Containers: 5</p>
        <p>Stopped Containers: 2</p>
        <p>Images: 10</p>
        <p>Networks: 3</p>
        <p>Volumes: 4</p>
      </div>
    </>
  );
};

export default SystemOverView;
