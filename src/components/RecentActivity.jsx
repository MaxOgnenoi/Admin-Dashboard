import React from "react";

function RecentActivity() {
  return (
    <div className="card">
      <Card filterChange={handleFilterChange} />
    </div>
  );
}

export default RecentActivity;
