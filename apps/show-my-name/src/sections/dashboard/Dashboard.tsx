interface CoWorker {
  name: string;
}

export const Dashboard = () => {
  const coWorkers: CoWorker[] = [{ name: "Name 1" }, { name: "Name 2" }];

  return (
    <>
      <h1>Dashboard</h1>
      <hr />
      <h2>Francisco Marcano</h2>
      <hr />
      <h3>Co-Workers</h3>
      <ul>
        {coWorkers.map((cw) => (
          // todo: add eslint key error
          <li key={cw.name}>{cw.name}</li>
        ))}
      </ul>
    </>
  );
};
