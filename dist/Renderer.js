class Renderer {
  render(data) {
    const source = $("#recipes-template").html();
    const template = Handlebars.compile(source);
    const someHTML = template(data);
    $("#recipes-data").empty();
    $("input").val("");
    $("#recipes-data").append(someHTML);
  }
}

const r = new Renderer();
