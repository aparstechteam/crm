let dashboard = document.getElementById("dashboard");
let links = document.getElementById("links");
let terms = document.getElementById("terms");

let controlpanel = document.getElementById("controlpanel");
let upcoming_campaign = document.getElementById("upcoming_campaign");
let gifts = document.getElementById("gifts");
let donation = document.getElementById("donation");

function getTransactionData() {
  fetch(
    "https://script.google.com/macros/s/AKfycbxXymHtCychzrYA0KAJ-IsDFhAlBLEMu5XwLnT9SMfZTGaQut4Xw9FFKxVGfqFse3kR/exec?type=transaction"
  )
    .then((data) => data.json())
    .then((res) => {
      let { cp, uc, g, d } = res.data;

      controlpanel.innerHTML =
        Math.round(cp) + " <span style='font-size:35px'>tk</span>";
      upcoming_campaign.innerHTML =
        Math.round(uc) + " <span style='font-size:35px'>tk</span>";
      gifts.innerHTML =
        Math.round(g) + " <span style='font-size:35px'>tk</span>";
      donation.innerHTML =
        Math.round(d) + " <span style='font-size:35px'>tk</span>";
    });
}

getTransactionData();
setInterval(() => {
  getTransactionData();
}, 60000);

let path = window.location.pathname;

if (path == "/crm/") {
  dashboard.classList.add("active");
} else if (path == "/crm/links/") {
  links.classList.add("active");
} else if (path == "/crm/terms/") {
  terms.classList.add("active");
}
