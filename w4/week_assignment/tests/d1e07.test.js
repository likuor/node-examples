const { queryDb } = require("../testHelper");

describe("queries/03_total_students_first_3_classes.sql", () => {
  test("1 row", async () => {
    const res = await queryDb("queries/03_total_students_first_3_classes.sql");
    expect(res.rowCount).toBe(1);
  });
  test("1 column with correct name", async () => {
    const res = await queryDb("queries/03_total_students_first_3_classes.sql");
    const columns = res.fields.map((field) => field.name);
    // expect(res.fields.length).toBe(4);
    expect(columns).toEqual(["total_students"]);
  });
  test("correct total value", async () => {
    const res = await queryDb("queries/03_total_students_first_3_classes.sql");
    expect(+res.rows[0].total_students).toBe(48);
  });
});
