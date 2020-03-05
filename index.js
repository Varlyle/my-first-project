// ПЕРВЫЙ ШАГ

document.addEventListener("DOMContentLoaded", async () => {
  let response = await fetch("https://votesystem.mobius.team/api/tests");

  if (response.ok) {
    let json = await response.json();

    let main = document.querySelector(".main-section");
    for (let question of json.tests) {
      let article = document.createElement("article");
      article.className = "article main-article";
      main.appendChild(article);
      let correct;
      for (let answer of question.conditions) {
        if (answer.is_correct == 1) {
          correct = "Правильный ответ: " + answer.text;
        }
      }
      let h1 = document.createElement("h1");
      h1.className = "main-article__title";
      h1.innerText = question.label;
      let p1 = document.createElement("p");
      p1.className = "main-article__text";
      p1.innerText = question.text;
      let p2 = document.createElement("p");
      p2.className = "main-article__text text_italic";
      p2.innerText = correct;

      let q = document.querySelector(".main-article");
      q.appendChild(h1);
      q.appendChild(p1);
      q.appendChild(p2);
    }

    alert(json.message);
  } else {
    alert("Ошибка HTTP: " + response.status);
  }
});

// ВТОРОЙ ШАГ

const secondStep = async () => {
  let response = await fetch("https://votesystem.mobius.team/api/result/48");
  if (response.ok) {
    let json = await response.json();
    let main = document.querySelector(".main-section");
    let h1 = document.createElement("h1");
    h1.innerHTML = "Процент выполнения: " + json.user.result;
    h1.className = "title_center";
    main.appendChild(h1);
    alert(json.message);
  } else {
    alert("Ошибка HTTP: " + response.status);
  }

  document.querySelector(".secondStep").classList.add("button_active");
};

document.querySelector(".secondStep").addEventListener("click", secondStep);

// ТРЕТИЙ ШАГ

const thirdStep = () => {
  fetch("https://votesystem.mobius.team/api/result/48/token")
    .then(response => response.json())
    .then(result => {
      alert(result.message);

      let tokenData = new FormData();

      tokenData.append("id", 48);
      tokenData.append("token", result.token);
      tokenData.append("homework_done", true);

      fetch("https://votesystem.mobius.team/api/homework/update", {
        method: "POST",
        body: tokenData
      }).then(update => alert(update.status));
    });
  document.querySelector(".thirdStep").classList.add("button_active");
};

document.querySelector(".thirdStep").addEventListener("click", thirdStep);
