class Renderer {
  render(data) {
    const source = $("#recipes-template").html();
    const template = Handlebars.compile(source);
    const someHTML = template(data);
    $("input").val("");
    $("#recipes-data").empty().append(someHTML);
  }
}

const r = new Renderer();
