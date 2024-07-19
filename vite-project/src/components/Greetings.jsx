const Greeting = (props) => {
  const { name, age, address, email, college } = props.data;
  return (
    <>
      <h1>GREETINGS</h1>
      <table className="table table-primary table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>City</th>
            <th>State</th>
            <th>Pin Code</th>
            <th>College</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{age}</td>
            <td>{email}</td>
            <td>{address.city}</td>
            <td>{address.state}</td>
            <td>{address.pincode}</td>
            <td>{college}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
export default Greeting;
