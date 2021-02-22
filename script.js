let count = document.getElementById("count");
let sales = document.getElementById("sales");
let earnings = document.getElementById("earnings");
let dashboard = document.getElementById("dashboard");
let links = document.getElementById("links");
let terms = document.getElementById("terms");

fetch(
  "https://script.google.com/macros/s/AKfycbwer7YqkBVBVV4gfeQUKvqwSVDyVNLjIe1oRQXEY2sKEN3LfpYZcvotxw/exec"
)
  .then((data) => data.json())
  .then((res) => {
    let { total_number, total_amount, total_earning } = res.data;
    count.innerHTML = total_number;
    sales.innerHTML = total_amount + " <span style='font-size:35px'>tk</span>";
    earnings.innerHTML =
      total_earning + " <span style='font-size:35px'>tk</span>";
  });

setInterval(() => {
  fetch(
    "https://script.google.com/macros/s/AKfycbwer7YqkBVBVV4gfeQUKvqwSVDyVNLjIe1oRQXEY2sKEN3LfpYZcvotxw/exec"
  )
    .then((data) => data.json())
    .then((res) => {
      let { total_number, total_amount, total_earning } = res.data;
      count.innerHTML = total_number;
      sales.innerHTML =
        total_amount + " <span style='font-size:35px'>tk</span>";
      earnings.innerHTML =
        total_earning + " <span style='font-size:35px'>tk</span>";
    });
}, 60000);

let path = window.location.pathname;

if (path == "/") {
  dashboard.classList.add("active");
} else if (path == "/links/") {
  links.classList.add("active");
} else if (path == "/terms/") {
  terms.classList.add("active");
}
