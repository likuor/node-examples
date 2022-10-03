const { queryDb } = require("../testHelper");

describe("queries_joins/06_get_total_submissions_enrolled_students.sql", () => {
  test("42 rows", async () => {
    const res = await queryDb(
      "queries_joins/06_get_total_submissions_enrolled_students.sql"
    );
    expect(res.rowCount).toBe(42);
  });
  test("2 columns with correct names", async () => {
    const res = await queryDb(
      "queries_joins/06_get_total_submissions_enrolled_students.sql"
    );
    const columns = res.fields.map((field) => field.name);
    expect(columns).toEqual(["student", "total_submissions"]);
  });
});
