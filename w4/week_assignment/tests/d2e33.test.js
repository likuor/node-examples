const { queryDb } = require("../testHelper");

describe("queries_in/10_get_total_assistance_requests_assignment.sql", () => {
  test("424 rows", async () => {
    const res = await queryDb(
      "queries_in/10_get_total_assistance_requests_assignment.sql"
    );
    expect(res.rowCount).toBe(424);
  });
  test("5 columns with correct names", async () => {
    const res = await queryDb(
      "queries_in/10_get_total_assistance_requests_assignment.sql"
    );
    const columns = res.fields.map((field) => field.name);
    expect(columns).toEqual([
      "id",
      "day",
      "chapter",
      "name",
      "total_assistances",
    ]);
  });
  test("ordered by total_assistances", async () => {
    const res = await queryDb(
      "queries_in/10_get_total_assistance_requests_assignment.sql"
    );
    const columns = res.rows.map((row) => row.total_assistances);
    const sorted = [...columns].sort((a, b) => {
      if (a === null) return 1;
      else return b - a;
    });
    expect(columns).toEqual(sorted);
  });
});
