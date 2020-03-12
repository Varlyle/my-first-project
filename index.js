function* twoRequests() {
  try {
    fetch("https://votesystem.mobius.team/api/result/48/token")
      .then(response => {
        if (!response.ok) {
          throw new Error(
            `status: ${secondResponse.status}, message: "${secondResponse.statusText}".`
          );
        }
        return response.json();
      })
      .then(result => {
        alert(result.message);

        let tokenData = new FormData();

        tokenData.append("id", 48);
        tokenData.append("token", result.token);
        tokenData.append("homework_done", true);

        return fetch("https://votesystem.mobius.team/api/homework/update", {
          method: "POST",
          body: tokenData
        });
      })
      .then(update => {
        if (!update.ok) {
          throw new Error(
            `status: ${secondResponse.status}, message: "${secondResponse.statusText}".`
          );
        }
        alert("Всё " + update.statusText);
      });
  } catch (err) {
    alert("Error:\n" + err.message);
  }
}

async function* gen() {
  try {
    let firstResponse = await fetch("https://votesystem.mobius.team/api/tests");

    if (!firstResponse.ok) {
      throw new Error(
        `status: ${firstResponse.status}, message: "${firstResponse.statusText}".`
      );
    }

    let firstJson = await firstResponse.json();

    let main = document.querySelector(".main-section");
    for (let question of firstJson.tests) {
      let article = document.createElement("article");
      article.className = "article main-article";
      main.appendChild(article);
      let correct;
      for (let answer of question.conditions) {
        if (answer.is_correct == 1) {
          correct = "Правильный ответ: " + answer.text;
          break;
        }
      }

      let firstH1 = document.createElement("h1");
      firstH1.className = "main-article__title";
      firstH1.innerText = question.label;
      let firstP1 = document.createElement("p");
      firstP1.className = "main-article__text";
      firstP1.innerText = question.text;
      let firstP2 = document.createElement("p");
      firstP2.className = "main-article__text text_italic";
      firstP2.innerText = correct;
      let q = document.querySelector(".main-article");
      q.appendChild(firstH1);
      q.appendChild(firstP1);
      q.appendChild(firstP2);
    }
    yield firstJson.message;

    let secondResponse = await fetch(
      "https://votesystem.mobius.team/api/result/48"
    );
    if (!secondResponse.ok) {
      throw new Error(
        `status: ${secondResponse.status}, message: "${secondResponse.statusText}".`
      );
    }

    let secondJson = await secondResponse.json();
    let secondH1 = document.createElement("h1");
    secondH1.innerHTML = "Процент выполнения: " + secondJson.user.result;
    secondH1.className = "title_center";
    main.appendChild(secondH1);

    yield secondJson.message;

    yield* twoRequests();
  } catch (err) {
    alert("Error:\n" + err.message);
  }
}

function* generateSequence(start, end) {
  for (let i = start; i < end; i++) {
    yield i;
  }
}

function* generatePasswordCodes() {
  yield* generateSequence(48, 57);
  yield* generateSequence(65, 90);
  yield* generateSequence(97, 122);
}

function* generatePassword() {
  let length = yield;

  let str = "";
  for (let code of generatePasswordCodes()) {
    str += String.fromCharCode(code);
  }

  let res = "";
  for (let i = 0; i < length; i++) {
    res += str[Math.floor(Math.random() * str.length)];
  }

  yield res;
}

async function firstStep() {
  for await (let message of gen()) {
    alert(message);
  }
  document.querySelector(".firstStep").classList.add("button_active");
}
document.querySelector(".firstStep").addEventListener("click", firstStep);

function secondStep() {
  let generator = generatePassword();
  generator.next();
  alert(generator.next(prompt("Введите желаемую длинну пароля:")).value); // Здесь возвращается наш пароль
  document.querySelector(".secondStep").classList.add("button_active");
}
document.querySelector(".secondStep").addEventListener("click", secondStep);
