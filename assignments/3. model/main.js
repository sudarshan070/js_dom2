var ul = document.querySelector("ul");
function imagesData(data) {
  data.forEach(ele => {
    var li = document.createElement("li");
    var btn = document.createElement("button");
    li.setAttribute("data-id", Date.now());
    btn.innerHTML = "Submit";
    btn.classList.add("btnStyle");
    var img = document.createElement("img");
    img.classList.add("imgheight");
    img.setAttribute("src", ele.image);
    li.append(img, btn);
    ul.append(li);
    btn.addEventListener("click", () => imgInffo(ele));
  });
}
function imgInffo(data) {
  var fullImg = document.querySelector(".fullImg");
  fullImg.setAttribute("src", data.image);
  var name = document.querySelector(".name");
  name.innerHTML = data.name;
  let category = document.querySelector(".category");
  category.innerHTML = data.category;
}

// var h1 = document.createElement("h1");
let data = [
  {
    image:
      "http://data.mavo.io/portfolio/images/pasted-image-1494464667397.png",
    name: "Carwash",
    category: "Painting"
  },
  {
    image:
      "http://data.mavo.io/portfolio/images/pasted-image-1494528264937.png",
    name: "Muck Mouth",
    category: "Painting"
  },
  {
    image:
      "http://data.mavo.io/portfolio/images/pasted-image-1494528646446.png",
    name: "Fishwall",
    category: "Painting"
  },
  {
    image: "http://data.mavo.io/portfolio/images/web-coffe-marilyn.jpg",
    name: "Web Coffe Marilyn",
    category: "Painting"
  },
  {
    image:
      "http://data.mavo.io/portfolio/images/pasted-image-1494903924970.png",
    name: "Web 3 Jules",
    category: "Painting"
  },
  {
    image: "http://data.mavo.io/portfolio/images/web-electric3.jpg",
    name: "Web electric3",
    category: "Painting"
  }
];

imagesData(data);
