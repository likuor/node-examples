const { queryDb } = require("../testHelper");

describe("queries_group-by/05_get_enrolled_students_avg_time_completion.sql", () => {
  test("42 rows", async () => {
    const res = await queryDb(
      "queries_group-by/05_get_enrolled_students_avg_time_completion.sql"
    );
    expect(res.rowCount).toBe(42);
  });
  test("2 columns with correct names", async () => {
    const res = await queryDb(
      "queries_group-by/05_get_enrolled_students_avg_time_completion.sql"
    );
    const columns = res.fields.map((field) => field.name);
    expect(columns).toEqual(["student_name", "average_time"]);
  });
  test("ordered by average_time", async () => {
    const res = await queryDb(
      "queries_group-by/05_get_enrolled_students_avg_time_completion.sql"
    );
    const columns = res.rows.map((row) => row.average_time);
    const sorted = [...columns].sort((a, b) => {
      if (a === null) return 1;
      else return b - a;
    });
    expect(columns).toEqual(sorted);
  });
});
