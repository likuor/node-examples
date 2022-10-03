const { queryDb } = require("../testHelper");

describe("queries_in/06_get_class_longest_assistances.sql", () => {
  test("1 row", async () => {
    const res = await queryDb(
      "queries_in/06_get_class_longest_assistances.sql"
    );
    expect(res.rowCount).toBe(1);
  });
  test("2 columns with correct names", async () => {
    const res = await queryDb(
      "queries_in/06_get_class_longest_assistances.sql"
    );
    const columns = res.fields.map((field) => field.name);
    expect(columns).toEqual(["class", "avg_duration_assistance"]);
  });
  test("correct average assistance duration for MAR12", async () => {
    const res = await queryDb(
      "queries_in/06_get_class_longest_assistances.sql"
    );
    expect(res.rows[0].avg_duration_assistance).toEqual({
      milliseconds: 556.041,
      minutes: 15,
      seconds: 44,
    });
  });
});
