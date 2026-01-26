document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("call");

  btn.addEventListener("click", function () {
    alert("ნამდვილად გინდა დარეკვა?");
    window.location.href = "tel:+995599123456";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("earnBtn");
  const moneyText = document.getElementById("currentMoney");
  const progress = document.getElementById("progressBar");

  let current = 4373;
  const goal = 10000;

  btn.addEventListener("click", () => {
    if (current >= goal) return;

    current += 500;
    if (current > goal) current = goal;

    const percent = (current / goal) * 100;

    moneyText.textContent = `$${current.toLocaleString()}`;
    progress.style.width = percent + "%";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("donateBtn");
  const amount = document.getElementById("amountNow");
  const bar = document.getElementById("fillLine");

  let current = 5200;
  const goal = 7000;

  btn.addEventListener("click", () => {
    if (current >= goal) return;

    current += 500;
    if (current > goal) current = goal;

    const percent = (current / goal) * 100;

    amount.textContent = `$${current.toLocaleString()}`;
    bar.style.width = percent + "%";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("clikc");
  const amount = document.getElementById("full");
  const bar = document.getElementById("longg");

  let current = 27890;
  const goal = 50000;

  btn.addEventListener("click", () => {
    if (current >= goal) return;

    current += 500;
    if (current > goal) current = goal;

    const percent = (current / goal) * 100;

    amount.textContent = `$${current.toLocaleString()}`;
    bar.style.width = percent + "%";
  });
});

const btn = document.querySelector(".but_4");
const text = document.getElementById("about-text");

btn.addEventListener("click", () => {
  if (text.style.maxHeight === "0px" || text.style.maxHeight === "") {
    text.style.maxHeight = text.scrollHeight + "px";
    text.style.padding = "20px";
    btn.textContent = "დაკეცვა";
  } else {
    text.style.maxHeight = "0";
    text.style.padding = "0 20px";
    btn.textContent = "About Us";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("call");

  btn.addEventListener("click", function () {
    alert("ნამდვილად გინდა დარეკვა?");
    window.location.href = "tel:+995568968803";
  });
});

document.getElementById("subscribeBtn").addEventListener("click", function () {
  const email = document.getElementById("email").value.trim();
  if (email) {
    alert("Your email: " + email);
  } else {
    alert("გთხოვთ შეიყვანოთ თქვენი იმეილი!!!");
  }
});
