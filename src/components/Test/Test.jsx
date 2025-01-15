export default function Test() {
  return (
    <div>
      {[1, 2, 3].map(item => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}
