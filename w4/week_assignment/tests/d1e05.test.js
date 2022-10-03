const { queryDb } = require("../testHelper");

describe("queries/01_get_students_without_github.sql", () => {
  test("20 rows", async () => {
    const res = await queryDb("queries/01_get_students_without_github.sql");
    expect(res.rowCount).toBe(20);
  });
  test("4 columns with correct names", async () => {
    const res = await queryDb("queries/01_get_students_without_github.sql");
    const columns = res.fields.map((field) => field.name);
    // expect(res.fields.length).toBe(4);
    expect(columns).toEqual(["id", "name", "email", "class_id"]);
  });
  test("ordered by class_id", async () => {
    const res = await queryDb("queries/01_get_students_without_github.sql");
    const columns = res.rows.map((row) => row.class_id);
    const sorted = [...columns].sort((a, b) => {
      if (a === null) return 1;
      else return a - b;
    });
    // expect(res.fields.length).toBe(4);
    expect(columns).toEqual(sorted);
  });
});
