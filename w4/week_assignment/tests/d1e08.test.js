const { queryDb } = require("../testHelper");

describe("queries/04_students_without_email_or_phone.sql", () => {
  test("17 rows", async () => {
    const res = await queryDb("queries/04_students_without_email_or_phone.sql");
    expect(res.rowCount).toBe(17);
  });
  test("1 column with correct name", async () => {
    const res = await queryDb("queries/04_students_without_email_or_phone.sql");
    const columns = res.fields.map((field) => field.name);
    // expect(res.fields.length).toBe(4);
    expect(columns).toEqual(["student_name"]);
  });
});
