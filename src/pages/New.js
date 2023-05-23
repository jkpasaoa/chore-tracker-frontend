import NewChore from "../components/NewChore"

function New() {
  return (
    <div className="New" style={{ maxWidth: '500px', margin: '0 auto', paddingTop: '50px' }}>
      <h2>Add a New Chore</h2>
      <NewChore />
    </div>
  );
}

export default New;
