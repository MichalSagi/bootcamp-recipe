const express = require("express");
const router = express.Router();
const urllib = require("urllib");

let recipesView = [];

router.get("/sanity", function(req, res) {
  console.log("OK");
  res.end();
});

router.get("/recipes/:ingredient", function(request, response) {
  const ingredient = request.params.ingredient;
  urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, function(err, data, res) {
      if (err) { 
        console.log(err);
      }
      const resData = JSON.parse(data.toString()).results;
      console.log(resData);
      recipesView = resData.map(
        r =>
          (r = {
            id: r.idMeal,
            ingredients: r.ingredients, //.map(i => i),
            title: r.title,
            thumbnail: r.thumbnail,
            href: r.href
          })
      );
      response.send(recipesView);
    }
  );
});

module.exports = router;
