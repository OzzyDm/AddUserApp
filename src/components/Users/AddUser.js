const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={addUserHandler}>
      <labe htmlFor="username">Username</labe>
      <input type="text" id="username"></input>
      <label htmlFor="age">Age(Years)</label>
      <input type="number" id="age"></input>
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
