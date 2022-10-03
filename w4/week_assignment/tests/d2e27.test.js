const { queryDb } = require("../testHelper");

describe("queries_in/04_get_avg_assistance_request_duration.sql", () => {
  test("1 row", async () => {
    const res = await queryDb(
      "queries_in/04_get_avg_assistance_request_duration.sql"
    );
    expect(res.rowCount).toBe(1);
  });
  test("1 column with correct name", async () => {
    const res = await queryDb(
      "queries_in/04_get_avg_assistance_request_duration.sql"
    );
    const columns = res.fields.map((field) => field.name);
    expect(columns).toEqual(["avg_assistance_request_duration"]);
  });
  test("correct average duration for assistance requests", async () => {
    const res = await queryDb(
      "queries_in/04_get_avg_assistance_request_duration.sql"
    );
    expect(res.rows[0].avg_assistance_request_duration).toEqual({
      milliseconds: 556.903,
      minutes: 14,
      seconds: 21,
    });
  });
});
