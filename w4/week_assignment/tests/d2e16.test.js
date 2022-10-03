const { queryDb } = require("../testHelper");

describe("queries_group-by/06_get_enrolled_students_avg_time_completion_less_estimated.sql", () => {
  test("4 rows", async () => {
    const res = await queryDb(
      "queries_group-by/06_get_enrolled_students_avg_time_completion_less_estimated.sql"
    );
    expect(res.rowCount).toBe(4);
  });
  test("3 columns with correct names", async () => {
    const res = await queryDb(
      "queries_group-by/06_get_enrolled_students_avg_time_completion_less_estimated.sql"
    );
    const columns = res.fields.map((field) => field.name);
    expect(columns).toEqual([
      "student_name",
      "average_time",
      "average_estimated_time",
    ]);
  });
  test("ordered by average_time", async () => {
    const res = await queryDb(
      "queries_group-by/06_get_enrolled_students_avg_time_completion_less_estimated.sql"
    );
    const columns = res.rows.map((row) => row.average_time);
    const sorted = [...columns].sort((a, b) => {
      if (a === null) return 1;
      else return a - b;
    });
    expect(columns).toEqual(sorted);
  });
});
