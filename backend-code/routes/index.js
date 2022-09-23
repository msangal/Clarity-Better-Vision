var express = require('express');
var router = express.Router();
var data = [{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org"
  },
  {
    "id": 2,
    "name": "Leanne Graham",
    "username": "Bret",
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org"
  }
];
/* GET all glasses details */
router.get('/', function(req, res, next) {
  console.log("Send all details stored in inventory");




  res.json({glassesData: data});
});

/* Add new glass details */
router.post('/', function(req, res, next) {
  console.log("Add new glass details in inventory", req.body);

  res.send({data: "hhfhf"});
});

/* Update existing glass status */
router.put('/', function(req, res, next) {
  console.log("Update existing glass status in inventory", req.body);

  res.send({data: "hhfhf"});
});


module.exports = router;
