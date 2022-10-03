const { queryDb } = require("../testHelper");

describe("queries_joins/04_get_total_time_assignments_per_student.sql", () => {
  test("1 row", async () => {
    const res = await queryDb(
      "queries_joins/04_get_total_time_assignments_per_student.sql"
    );
    expect(res.rowCount).toBe(1);
  });
  test("2 columns with correct names", async () => {
    const res = await queryDb(
      "queries_joins/04_get_total_time_assignments_per_student.sql"
    );
    const columns = res.fields.map((field) => field.name);
    expect(columns).toEqual(["student_name", "total_time"]);
  });
  test("correct total time for Ibrahim Schimmel", async () => {
    const res = await queryDb(
      "queries_joins/04_get_total_time_assignments_per_student.sql"
    );
    expect(+res.rows[0].total_time).toBe(6888);
  });
});
