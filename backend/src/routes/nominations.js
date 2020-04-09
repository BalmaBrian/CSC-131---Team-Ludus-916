const express = require("express");
const router = express.Router();

// initalizing admin and adding database //
const { admin } = require("./certs/admin");
let db = admin.firestore();
// initalizing admin and adding database END //

// get all documents in the entire db
router.get("/", (req, res, next) => {
  let nomination = db.collection("nominations");
  let nominationList = [];
  nomination
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        let info = doc.data();
        let data = {
          nominationId: doc.id,
          info
        };
        nominationList.push(data);
      });
      res.status(200).json({
        nominationList
      });
    })
    .catch(err => {
      console.log("Error getting documents", err);
    });
  console.log(nominationList);
});

// add a document to the data base
router.post("/", (req, res, next) => {
  const nomination = {
    category: req.body.category,
    entity: req.body.entity,
    winner: req.body.winner,
    year: req.body.year
  };
  db.collection("nominations")
    .doc()
    .set(nomination);
  res.status(200).json({
    message: "nomination added",
    info: nomination
  });
});

// getting a nomination given a know ID
router.get("/:nominationField", (req, res, next) => {
  db.collection("nominations")
    .doc(req.params.nominationField)
    .get()
    .then(snapshot => {
      let data = snapshot._fieldsProto;
      data.category = data.category.stringValue;
      data.entity = data.entity.stringValue;
      data.winner = data.winner.booleanValue;
      data.year = data.year.integerValue;
      res.status(200).json({
        nominationID: snapshot.id,
        data
      });
    })
    .catch(err => {
      console.log("Error getting documents", err);
    });
});

// remove a document from the data base
router.delete("/:nominationField", (req, res, next) => {
  db.collection("nominations")
    .doc(req.params.nominationField)
    .delete()
    .then(() => {
      res.status(200).json({
        message: "document deleted",
        document: req.params.nominationField
      });
    })
    .catch(err => {
      console.log("Error getting documents", err);
    });
});

module.exports = router;
