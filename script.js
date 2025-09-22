const ul = document.querySelector("#taskList");
const newTask = document.querySelector("#newTask");
const btnNewTask = document.querySelector("#validTask");
const titre = document.querySelector("h1");

console.log(titre.text);
// Charger les tâches depuis localStorage
let todos = JSON.parse(localStorage.getItem("todos")) || [];

// Sauvegarder dans localStorage
function save() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Crée un <li> avec texte + boutons
function renderTask(todo, index) {
  const li = document.createElement("li");

  const spanTask = document.createElement("span");
  spanTask.textContent = todo.text;
  if (todo.done) {
    spanTask.classList.add("fait"); // si déjà marqué comme fait
  }
  li.appendChild(spanTask);

  // bouton Fait
  const btnDone = document.createElement("button");
  btnDone.textContent = "Fait";
  li.appendChild(btnDone);

  btnDone.addEventListener("click", () => {
    todos[index].done = !todos[index].done; // toggle true/false
    spanTask.classList.toggle("fait");
    save();
  });

  // bouton Supprimer
  const btnRemove = document.createElement("button");
  btnRemove.textContent = "Supprimer";
  li.appendChild(btnRemove);

  btnRemove.addEventListener("click", () => {
    todos.splice(index, 1); // enlever du tableau
    save();
    renderAllTasks(); // réafficher proprement
  });

  ul.appendChild(li);
}

// Affiche toute la liste
function renderAllTasks() {
  ul.innerHTML = ""; // reset
  todos.forEach((todo, index) => renderTask(todo, index));
}

// Ajouter une nouvelle tâche
btnNewTask.addEventListener("click", () => {
  if (newTask.value === "") return;

  todos.push({ text: newTask.value, done: false }); // objet avec état
  save();
  renderAllTasks();

  newTask.value = "";
});

// Afficher toutes les tâches sauvegardées au démarrage
renderAllTasks();
