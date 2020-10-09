const express = require("express");
const router = express.Router();
const { database } = require("../config/helpers");

router.get("/", function (req, res) {

  let page = req.query.page != undefined && req.query.page != 0 ? req.query.page : 1;
  const limit = req.query.limit != undefined && req.query.limit != 0 ? req.query.limit : 10;

  let startValue;
  let endValue;

    if(page > 0){
        startValue = (page * limit) - limit;
        endValue = page * limit;
    }else{

        startValue = 0;
        endValue = 10;

    }

    database.table('products as p')
        .join([{
            table: 'categories as c',
            on: 'c.id = p.cat_id'
        }])


});

module.exports = router;
