const express = require("express");
const router = express.Router();
const urllib = require("urllib");

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
      recipesView = resData.map(
        r =>
          ({
            id: r.idMeal,
            ingredients: r.ingredients, 
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
