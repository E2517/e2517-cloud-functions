import * as functions from "firebase-functions";
const admin = require("firebase-admin");
admin.initializeApp();

// First Cloud Function
export const onHeroeCreate = functions.database
  .ref("/superheroes/{superheroeId}")
  .onCreate((snapshot, context) => {
    const superheroeId = context.params.superheroeId;
    console.log("New superheroe created " + superheroeId);

    return snapshot.ref.update({ name: changeName(snapshot.val().name) });
  });

function changeName(name: string): string {
  return name.replace(/\bHuld\b/g, "Hulk");
}

// Second Cloud Function
//urladdHeroe?name=Venom&points=1000
exports.addHeroe = functions.https.onRequest(async (req, res) => {
  const name = req.query.name;
  const points = req.query.points;
  const available = req.query.available;

  const snapshot = await admin
    .database()
    .ref("/superheroes")
    .push({ name: name, points: points, available: available });
  res.redirect(303, snapshot.ref.toString());
});

// Third Cloud Function
export const checkValues = functions.database
  .ref("/superheroes/{superheroeId}")
  .onCreate((snapshot, context) => {
    const superheroeId = context.params.superheroeId;
    console.log("New superheroe created " + superheroeId);

    return snapshot.ref.update({
      points: pointToDouble(snapshot.val().points),
      available: availabletoBoolean(snapshot.val().available),
    });
  });

function pointToDouble(points: string): number {
  return parseFloat(points);
}

function availabletoBoolean(available: string): boolean {
  if (available == "true") {
    return true;
  } else {
    return false;
  }
}
