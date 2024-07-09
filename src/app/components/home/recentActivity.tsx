const RecentActivity = () => {
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-lg md:col-span-2 lg:col-span-1">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <ul className="list-disc list-inside">
          <li>Container "web_app" started 5 minutes ago</li>
          <li>Image "nginx:latest" pulled 10 minutes ago</li>
          <li>Network "frontend_network" created 1 hour ago</li>
          <li>Volume "db_data" created 2 hours ago</li>
        </ul>
      </div>
    </>
  );
};

export default RecentActivity;
