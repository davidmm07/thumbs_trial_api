/* const db = await database.connect(); */
module.exports = {
  async up(db) {
    await db
      .collection("trials")
      .insertMany(
        [
          {
            Name: "Kanye West",
            ImageUrl: "../../assets/img/KWest.jpg"
          },
          {
            Name: "Mark Zuckerberg",
            ImageUrl: "../../assets/img/Mark.jpg"
          },
          {
            Name: "Cristina Fernandez de Kirchner",
            ImageUrl: "../../assets/img/Kirchner.jpg"
          },
          {
            Name: "Malala Yousafzai",
            ImageUrl: "../../assets/img/Malala.jpg"
          }
      ],
        { ordered: true }
      );
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
  }
};

/* const {
  database,
} = require("migrate-mongo"); */
