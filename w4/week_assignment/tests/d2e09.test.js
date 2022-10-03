const { queryDb } = require("../testHelper");

describe("queries_joins/07_get_total_submissions_enrolled_students_less_100.sql", () => {
  test("2 rows", async () => {
    const res = await queryDb(
      "queries_joins/07_get_total_submissions_enrolled_students_less_100.sql"
    );
    expect(res.rowCount).toBe(2);
  });
  test("2 columns with correct names", async () => {
    const res = await queryDb(
      "queries_joins/07_get_total_submissions_enrolled_students_less_100.sql"
    );
    const columns = res.fields.map((field) => field.name);
    expect(columns).toEqual(["student", "total_submissions"]);
  });
});
