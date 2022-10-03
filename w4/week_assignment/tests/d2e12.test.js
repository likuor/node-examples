const { queryDb } = require("../testHelper");

describe("queries_group-by/02_get_total_assignments_per_day_greater_10.sql", () => {
  test("15 rows", async () => {
    const res = await queryDb(
      "queries_group-by/02_get_total_assignments_per_day_greater_10.sql"
    );
    expect(res.rowCount).toBe(15);
  });
  test("2 columns with correct names", async () => {
    const res = await queryDb(
      "queries_group-by/02_get_total_assignments_per_day_greater_10.sql"
    );
    const columns = res.fields.map((field) => field.name);
    expect(columns).toEqual(["day", "total_assignments"]);
  });
  test("ordered by day", async () => {
    const res = await queryDb(
      "queries_group-by/02_get_total_assignments_per_day_greater_10.sql"
    );
    const columns = res.rows.map((row) => row.day);
    const sorted = [...columns].sort((a, b) => {
      if (a === null) return 1;
      else return a - b;
    });
    expect(columns).toEqual(sorted);
  });
});
