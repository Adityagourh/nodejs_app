
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Aditya',email: '123',password:"123"},
        {id: 2, name: 'aditya',email: '123',password:"123"},
        {id: 3, name: 'aditya1',email: '123',password:"123"}
      ]);
    });
};
