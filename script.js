const ul = document.querySelector("#taskList");

const newTask = document.querySelector("#newTask");
const btnNewTask = document.querySelector("#validTask");

btnNewTask.addEventListener("click", () => {
  //création de la nouvelle task

  const li = document.createElement("li");
  let nodeTask = newTask.value;
  if (newTask.value === "") {
    return;
  }

  const spanTask = document.createElement("span");
  spanTask.textContent = newTask.value;
  li.appendChild(spanTask);

  ul.appendChild(li);
  console.log(li);

  //ajout du bouton supprimer
  const btnDone = document.createElement("button");
  btnDone.textContent = "Fait";
  li.appendChild(btnDone);

  const btnRemove = document.createElement("button");
  btnRemove.textContent = "Supprimer";
  li.appendChild(btnRemove);

  btnDone.addEventListener("click", () => {
    spanTask.classList.toggle("fait");
  });
  btnRemove.addEventListener("click", () => {
    li.remove();
  });
  newTask.value = "";
});
// 1.	To-Do List améliorée (next step du projet actuel)
// 	•	Sauvegarder les tâches dans localStorage
// 	•	Ajouter un filtre (Toutes / Terminées / À faire)
// 	•	Trier les tâches (par date, alphabétique…)
// 	•	Ajouter une petite animation (fadeIn/fadeOut)
