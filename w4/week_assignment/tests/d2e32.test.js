const { queryDb } = require("../testHelper");

describe("queries_in/07_get_avg_request_wait_time.sql", () => {
  test("1 row", async () => {
    const res = await queryDb(
      "queries_in/09_get_avg_total_assistance_requests_class.sql"
    );
    expect(res.rowCount).toBe(1);
  });
  test("1 column with correct name", async () => {
    const res = await queryDb(
      "queries_in/09_get_avg_total_assistance_requests_class.sql"
    );
    const columns = res.fields.map((field) => field.name);
    expect(columns).toEqual(["avg_total_duration"]);
  });
  test("correct average duration for wait time", async () => {
    const res = await queryDb(
      "queries_in/09_get_avg_total_assistance_requests_class.sql"
    );
    expect(res.rows[0].avg_total_duration).toEqual({
      hours: 555,
      milliseconds: 909.091,
      minutes: 22,
      seconds: 25,
    });
  });
});
