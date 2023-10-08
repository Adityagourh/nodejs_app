exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("todos")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("todos").insert([
        {
          id: 1,
          title: "Go to gym",
          user_id: 1,
        },
        {
          id: 2,
          title: "Go to gym",
          user_id: 2,
        },
        {
          id: 3,
          title: "Go to gym",
          user_id: 3,
        },
      ]);
    });
};
