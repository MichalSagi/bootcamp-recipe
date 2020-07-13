const source = $("#recipes-template").html();
const template = Handlebars.compile(source);
let recipesView = [];

$("#btnSearch").on("click", function() {
  let input = $("input").val();
  $.get(`/recipes/${input}`, function(data) {
    recipesView.push(data);
    r.render(data);
  });
});

$("#recipes-data").on("click", ".recipes", function() {
    let recipe = $(this).closest('ul').find('li').data().id;
        
//   const check = $(this).ingredients[0];
  console.log(recipe);
});
