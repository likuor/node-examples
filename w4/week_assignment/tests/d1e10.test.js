const { queryDb } = require("../testHelper");

describe("queries/06_get_students_enrolled.sql", () => {
  test("42 rows", async () => {
    const res = await queryDb("queries/06_get_students_enrolled.sql");
    expect(res.rowCount).toBe(42);
  });
  test("3 columns with correct names", async () => {
    const res = await queryDb("queries/06_get_students_enrolled.sql");
    const columns = res.fields.map((field) => field.name);
    expect(columns).toEqual(["name", "id", "class_id"]);
  });
  test("ordered by class_id", async () => {
    const res = await queryDb("queries/06_get_students_enrolled.sql");
    const columns = res.rows.map((row) => row.class_id);
    const sorted = [...columns].sort((a, b) => {
      if (a === null) return 1;
      else return a - b;
    });
    // expect(res.fields.length).toBe(4);
    expect(columns).toEqual(sorted);
  });
});
