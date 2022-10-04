const { queryDb } = require("../testHelper");

describe("queries_in/12_get_instructors_assisted_class.sql", () => {
  test("8 rows", async () => {
    const res = await queryDb(
      "queries_in/12_get_instructors_assisted_class.sql"
    );
    expect(res.rowCount).toBe(8);
  });
  test("2 columns with correct names", async () => {
    const res = await queryDb(
      "queries_in/12_get_instructors_assisted_class.sql"
    );
    const columns = res.fields.map((field) => field.name);
    expect(columns).toEqual(["instructor", "class"]);
  });
  test("ordered by total_assistances", async () => {
    const res = await queryDb(
      "queries_in/12_get_instructors_assisted_class.sql"
    );
    const columns = res.rows.map((row) => row.instructor);
    const sorted = [...columns].sort((a, b) => {
      if (a === null) return 1;
      else return a - b;
    });
    expect(columns).toEqual(sorted);
  });
});
