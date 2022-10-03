const { queryDb } = require("../testHelper");

describe("queries_in/03_get_data_assistance_request.sql", () => {
  test("26299 rows", async () => {
    const res = await queryDb("queries_in/03_get_data_assistance_request.sql");
    expect(res.rowCount).toBe(26299);
  });
  test("4 columns with correct names", async () => {
    const res = await queryDb("queries_in/03_get_data_assistance_request.sql");
    const columns = res.fields.map((field) => field.name);
    expect(columns).toEqual([
      "instructor",
      "student",
      "assignment",
      "assistance_duration",
    ]);
  });
  test("ordered by assistance_duration", async () => {
    const res = await queryDb("queries_in/03_get_data_assistance_request.sql");
    const columns = res.rows.map((row) => row.assistance_duration);
    const sorted = [...columns].sort((a, b) => {
      if (a === null) return 1;
      else return a - b;
    });
    expect(columns).toEqual(sorted);
  });
});
