const { queryDb } = require("../testHelper");

describe("queries_in/07_get_avg_request_wait_time.sql", () => {
  test("1 row", async () => {
    const res = await queryDb("queries_in/07_get_avg_request_wait_time.sql");
    expect(res.rowCount).toBe(1);
  });
  test("1 column with correct name", async () => {
    const res = await queryDb("queries_in/07_get_avg_request_wait_time.sql");
    const columns = res.fields.map((field) => field.name);
    expect(columns).toEqual(["average_wait_time"]);
  });
  test("correct average duration for wait time", async () => {
    const res = await queryDb("queries_in/07_get_avg_request_wait_time.sql");
    expect(res.rows[0].average_wait_time).toEqual({
      milliseconds: 258.793,
      minutes: 8,
      seconds: 46,
    });
  });
});
