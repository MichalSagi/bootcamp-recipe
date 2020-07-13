$("#btnSearch").on("click", function() {
  let input = $("input").val();
  $.get(`/recipes/${input}`, function(data) {
    r.render(data);
  });
});

$("#recipes-data").on("click", ".recipes", function() {
  let recipe = $(this)
    .find("ul")
    .find("li:first")
    .text();
  console.log(recipe);
});
