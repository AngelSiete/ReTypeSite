const Todos: React.FC<{ items: string[] }> = (props: any) => {
  return (
    <ul>
      {props.items.map((item: string) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};
export default Todos;
