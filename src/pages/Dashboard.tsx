export function Dashboard() {
  const user = localStorage.getItem("user");
  return <div>Hello {user}</div>;
}
