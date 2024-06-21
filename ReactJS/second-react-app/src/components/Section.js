export default function Section(props) {
  return (
    <div className="section col-3 m-3">
      <h3>Name: {props.empName}</h3>
      <h3>Role: {props.empRole}</h3>
    </div>
  );
}
