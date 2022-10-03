const { queryDb } = require("../testHelper");

describe("queries_joins/02_get_enrolled_students_with_class_name.sql", () => {
  test("22 rows", async () => {
    const res = await queryDb(
      "queries_joins/02_get_enrolled_students_with_class_name.sql"
    );
    expect(res.rowCount).toBe(22);
  });
  test("3 columns with correct names", async () => {
    const res = await queryDb(
      "queries_joins/02_get_enrolled_students_with_class_name.sql"
    );
    const columns = res.fields.map((field) => field.name);
    expect(columns).toEqual(["student_name", "email", "class_name"]);
  });
});
