export function C2() {
  const items = ["Mobile", "Laptop", "TV", "Refrigerator", "Washing Machine"];

  const ListItems = () => {
    return items.map((item) => <li>{item}</li>);
  };

  return (
    <div className="C2">
      <ol>{ListItems()}</ol>
    </div>
  );
}
