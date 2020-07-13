const source = $("#recipes-template").html();
const template = Handlebars.compile(source);
let recipesView = []


$('#btnSearch').on('click',function() {
    let input = $("input").val();
    $.get(`/recipes/${input}`, function(data) {
        recipesView.push(data)
    
    //   renderRecipes(data);
    });
  });