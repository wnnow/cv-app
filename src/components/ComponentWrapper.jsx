export default function ComponentWrapper({ className, id, children }) {
  return (
    <div className={className} id={id}>
      {children}
    </div>
  );
}
