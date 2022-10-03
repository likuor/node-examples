const { queryDb } = require("../testHelper");

describe("queries_in/01_get_total_assistance_requests_instructor.sql", () => {
  test("1 row", async () => {
    const res = await queryDb(
      "queries_in/01_get_total_assistance_requests_instructor.sql"
    );
    expect(res.rowCount).toBe(1);
  });
  test("2 columns with correct names", async () => {
    const res = await queryDb(
      "queries_in/01_get_total_assistance_requests_instructor.sql"
    );
    const columns = res.fields.map((field) => field.name);
    expect(columns).toEqual(["total_assistances", "instructor_name"]);
  });
  test("correct total amount of assistances for Waylon Boehm", async () => {
    const res = await queryDb(
      "queries_in/01_get_total_assistance_requests_instructor.sql"
    );
    expect(+res.rows[0].total_assistances).toBe(4227);
  });
});
