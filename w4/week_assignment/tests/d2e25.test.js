const { queryDb } = require("../testHelper");

describe("queries_in/02_get_total_assistance_per_student.sql", () => {
  test("1 row", async () => {
    const res = await queryDb(
      "queries_in/02_get_total_assistance_per_student.sql"
    );
    expect(res.rowCount).toBe(1);
  });
  test("2 columns with correct names", async () => {
    const res = await queryDb(
      "queries_in/02_get_total_assistance_per_student.sql"
    );
    const columns = res.fields.map((field) => field.name);
    expect(columns).toEqual(["total_assistances", "student_name"]);
  });
  test("correct total amount of assistances for Elliot Dickinson", async () => {
    const res = await queryDb(
      "queries_in/02_get_total_assistance_per_student.sql"
    );
    expect(+res.rows[0].total_assistances).toBe(138);
  });
});
