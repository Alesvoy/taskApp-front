import { useQuery } from "@tanstack/react-query";

const fetchTasks = async () => {
  const res = await fetch("http://127.0.0.1:3001/api/task");
  return res.json();
};

const App = () => {
  const tasksQuery = useQuery([], () => fetchTasks());

  const data = tasksQuery.data;

  if (tasksQuery.isLoading) return <p>Loading...</p>;

  if (tasksQuery.isError) return <p>Error: {tasksQuery.error.message}</p>;

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default App;
