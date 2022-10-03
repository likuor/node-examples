const { queryDb } = require("../testHelper");

describe("queries_group-by/01_get_total_assignments_per_day.sql", () => {
  test("51 rows", async () => {
    const res = await queryDb(
      "queries_group-by/01_get_total_assignments_per_day.sql"
    );
    expect(res.rowCount).toBe(51);
  });
  test("2 columns with correct names", async () => {
    const res = await queryDb(
      "queries_group-by/01_get_total_assignments_per_day.sql"
    );
    const columns = res.fields.map((field) => field.name);
    expect(columns).toEqual(["day", "total_assignments"]);
  });
  test("ordered by day", async () => {
    const res = await queryDb(
      "queries_group-by/01_get_total_assignments_per_day.sql"
    );
    const columns = res.rows.map((row) => row.day);
    const sorted = [...columns].sort((a, b) => {
      if (a === null) return 1;
      else return a - b;
    });
    expect(columns).toEqual(sorted);
  });
});
