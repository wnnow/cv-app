export default function Resume({ person }) {
  return (
    <>
      <h1>{person.name}</h1>
      <div>{person.email}</div>
    </>
  );
}
