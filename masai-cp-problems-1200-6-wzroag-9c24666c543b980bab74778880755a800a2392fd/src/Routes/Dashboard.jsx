import RestaurantTable from "../Components/RestaurantTable";

function Dashboard() {
  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn">Logout</button>
        <p>
          Token:
          <b data-testid="user-token"></b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* restaurant table */}
        <RestaurantTable/>
      </div>
      <div data-testid="pagination-container"></div>
    </div>
  );
}

export default Dashboard;
