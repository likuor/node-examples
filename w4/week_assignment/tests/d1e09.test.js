const { queryDb } = require("../testHelper");

describe("queries/05_students_without_gmail_and_phone.sql", () => {
  test("3 rows", async () => {
    const res = await queryDb(
      "queries/05_students_without_gmail_and_phone.sql"
    );
    expect(res.rowCount).toBe(3);
  });
  test("4 columns with correct names", async () => {
    const res = await queryDb(
      "queries/05_students_without_gmail_and_phone.sql"
    );
    const columns = res.fields.map((field) => field.name);
    expect(columns).toEqual(["name", "id", "email", "class_id"]);
  });
});
