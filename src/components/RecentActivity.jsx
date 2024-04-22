import React from "react";

function RecentActivity() {
  return (
    <div className="card">
      <Card filterChange={handleFilterChange} />
      <div className="card-body">
        <h5 className="card-title">
          Recent Activity <span> | {filter}</span>
        </h5>
      </div>
    </div>
  );
}

export default RecentActivity;
