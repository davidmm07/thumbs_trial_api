module.exports = {
  async up(db, client) {
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    let votes = [];
    let min = 1;
    let max = 50;

    await db
      .collection("trials")
      .find()
      .toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        result.map(res => {
          votes.push({
            thumbsup: Math.floor(Math.random() * (max - min + 1)) + min,
            thumbsdown: Math.floor(Math.random() * (max - min + 1)) + min,
            trial: res._id
          });
        });
        db.collection("votes").insertMany(votes, { ordered: true });
      });
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    await db.collection("votes").drop();
  }
};
