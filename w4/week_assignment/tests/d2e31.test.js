const { queryDb } = require("../testHelper");

describe("queries_in/08_get_total_assistance_requests_class.sql", () => {
  test("11 rows", async () => {
    const res = await queryDb(
      "queries_in/08_get_total_assistance_requests_class.sql"
    );
    expect(res.rowCount).toBe(11);
  });
  test("2 columns with correct names", async () => {
    const res = await queryDb(
      "queries_in/08_get_total_assistance_requests_class.sql"
    );
    const columns = res.fields.map((field) => field.name);
    expect(columns).toEqual(["class", "total_duration"]);
  });
  test("ordered by assistance_duration", async () => {
    const res = await queryDb(
      "queries_in/08_get_total_assistance_requests_class.sql"
    );
    const columns = res.rows.map((row) => row.total_duration);
    const sorted = [...columns].sort((a, b) => {
      if (a === null) return 1;
      else return a - b;
    });
    expect(columns).toEqual(sorted);
  });
});
