const questions = [
  new Question("Quelle est la couleur du ciel ?", ["Bleu", "Vert", "Rouge", "Jaune"], 0),
  new Question("Combien de jours dans une semaine ?", ["5", "6", "7", "8"], 2),
  new Question("Combien de milliards d'habitants habite la Terre?", ["1000", "1000000", "1000000000", "1000000000000"], 3),
  new Question("Quelle est la forme du soleil?", ["Cercle", "Triangle", "Rectangle", "Carré"], 0),
  new Question("Quelle est la planète la plus proche du soleil?", ["Mercure", "Vénus", "Mars", "Jupiter"], 2),
  new Question("Quelle est la planète la plus éloignée du soleil?", ["Pluton", "Neptune", "Saturne", "Uranus"], 3),
  new Question("Quelle est la planète la plus lumineuse?", ["Mars", "Jupiter", "Saturne", "Uranus"], 1),
  // Ajoutez d'autres questions ici
];

const quiz = new Quiz(questions);

// Pour commencer le quiz et afficher la première question
quiz.afficherQuestion();

// Vous pouvez appeler `collecterReponse` par exemple lors du clic sur un bouton "Suivant"
document.getElementById('suivant').addEventListener('click', () => {
  quiz.collecterReponse();
});
