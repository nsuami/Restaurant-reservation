exports.seed = function (knex) {
  return knex
    .raw("TRUNCATE TABLE tables RESTART IDENTITY CASCADE")
    .then(function () {
      return knex("tables").insert([
        {
          table_name: "Table Number 1",
          capacity: 1,
        },
        {
          table_name: "Table Number 2",
          capacity: 1,
        },
        {
          table_name: "Table Number 3",
          capacity: 6,
        },
        {
          table_name: "Table Number 4",
          capacity: 6,
        },
      ]);
    });
};
