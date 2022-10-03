const { queryDb } = require("../testHelper");

describe("queries_joins/05_get_total_time_assignments_per_class.sql", () => {
  test("1 row", async () => {
    const res = await queryDb(
      "queries_joins/05_get_total_time_assignments_per_class.sql"
    );
    expect(res.rowCount).toBe(1);
  });
  test("2 columns with correct names", async () => {
    const res = await queryDb(
      "queries_joins/05_get_total_time_assignments_per_class.sql"
    );
    const columns = res.fields.map((field) => field.name);
    expect(columns).toEqual(["class_name", "total_time"]);
  });
  test("correct total time for FEB12", async () => {
    const res = await queryDb(
      "queries_joins/05_get_total_time_assignments_per_class.sql"
    );
    expect(+res.rows[0].total_time).toBe(373501);
  });
});
