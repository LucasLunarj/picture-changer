function change() {
  let image = document.querySelector("#vader");
  let imageSrc = image.getAttribute("src");
  console.log(imageSrc);
  console.log(image);

  if (imageSrc == "images/vader1.png") {
    document.querySelector("#title").innerHTML = `<p>Darth Vader</p>`;
    document
      .querySelector("#vader")
      .setAttribute("src", "images/" + "vader2.webp");
  } else {
    document.querySelector("#title").innerHTML = `<p>Anakin Skywalker</p>`;
    document
      .querySelector("#vader")
      .setAttribute("src", "images/" + "vader1.png");
  }
}
