class Renderer {
  render(data) {
    const source = $("#recipes-template").html();
    const template = Handlebars.compile(source);
    $("#recipes-data").empty();
    $("input").val("");
    const someHTML = template(data);
    $("#recipes-data").append(someHTML);
  }
}

const r = new Renderer();
