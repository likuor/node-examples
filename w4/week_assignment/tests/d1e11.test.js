const { queryDb } = require("../testHelper");

describe("queries/07_get_graduates_without_github.sql", () => {
  test("6 rows", async () => {
    const res = await queryDb("queries/07_get_graduates_without_github.sql");
    expect(res.rowCount).toBe(6);
  });
  test("3 columns with correct names", async () => {
    const res = await queryDb("queries/07_get_graduates_without_github.sql");
    const columns = res.fields.map((field) => field.name);
    expect(columns).toEqual(["name", "email", "phone"]);
  });
});
