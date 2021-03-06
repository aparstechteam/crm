let dashboard = document.getElementById("dashboard");
let links = document.getElementById("links");
let terms = document.getElementById("terms");

let controlpanel = document.getElementById("controlpanel");
let upcoming_campaign = document.getElementById("upcoming_campaign");
let gifts = document.getElementById("gifts");
let donation = document.getElementById("donation");

fetch(
  "https://script.google.com/macros/s/AKfycbwer7YqkBVBVV4gfeQUKvqwSVDyVNLjIe1oRQXEY2sKEN3LfpYZcvotxw/exec"
)
  .then((data) => data.json())
  .then((res) => {
    let { total_earning } = res.data;

    controlpanel.innerHTML =
      Math.round(total_earning * 0.3) +
      " <span style='font-size:35px'>tk</span>";
    upcoming_campaign.innerHTML =
      Math.round(total_earning * 0.3) +
      " <span style='font-size:35px'>tk</span>";
    gifts.innerHTML =
      Math.round(total_earning * 0.3) +
      " <span style='font-size:35px'>tk</span>";
    donation.innerHTML =
      Math.round(total_earning * 0.1) +
      " <span style='font-size:35px'>tk</span>";
  });

setInterval(() => {
  fetch(
    "https://script.google.com/macros/s/AKfycbwer7YqkBVBVV4gfeQUKvqwSVDyVNLjIe1oRQXEY2sKEN3LfpYZcvotxw/exec"
  )
    .then((data) => data.json())
    .then((res) => {
      let { total_earning } = res.data;

      controlpanelm.innerHTML = Math.round(total_earning * 0.3);
      upcoming_campaignm.innerHTML = Math.round(total_earning * 0.3);
      giftsm.innerHTML = Math.round(total_earning * 0.3);
      donationm.innerHTML = Math.round(total_earning * 0.1);
      controlpanel.innerHTML =
        Math.round(total_earning * 0.3) +
        " <span style='font-size:35px'>tk</span>";
      upcoming_campaign.innerHTML =
        Math.round(total_earning * 0.3) +
        " <span style='font-size:35px'>tk</span>";
      gifts.innerHTML =
        Math.round(total_earning * 0.3) +
        " <span style='font-size:35px'>tk</span>";
      donation.innerHTML =
        Math.round(total_earning * 0.1) +
        " <span style='font-size:35px'>tk</span>";
    });
}, 60000);

let path = window.location.pathname;

if (path == "/crm/") {
  dashboard.classList.add("active");
} else if (path == "/crm/links/") {
  links.classList.add("active");
} else if (path == "/crm/terms/") {
  terms.classList.add("active");
}
