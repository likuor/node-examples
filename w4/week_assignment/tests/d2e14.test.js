const { queryDb } = require("../testHelper");

describe("queries_group-by/04_get_total_submissions_per_class.sql", () => {
  test("11 rows", async () => {
    const res = await queryDb(
      "queries_group-by/04_get_total_submissions_per_class.sql"
    );
    expect(res.rowCount).toBe(11);
  });
  test("2 columns with correct names", async () => {
    const res = await queryDb(
      "queries_group-by/04_get_total_submissions_per_class.sql"
    );
    const columns = res.fields.map((field) => field.name);
    expect(columns).toEqual(["class_name", "total_submissions"]);
  });
  test("ordered by total_submissions", async () => {
    const res = await queryDb(
      "queries_group-by/04_get_total_submissions_per_class.sql"
    );
    const columns = res.rows.map((row) => row.total_submissions);
    const sorted = [...columns].sort((a, b) => {
      if (a === null) return 1;
      else return b - a;
    });
    expect(columns).toEqual(sorted);
  });
});
