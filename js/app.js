

class Question {
  #enonce;
  //déclare un tableau de chaine de character appeler reponses
  #reponses;
  //un entier représentant l'indice de la réponse correcte
  #bonneReponse;

  constructor(enonce, reponses, bonneReponse) {
    this.#enonce = enonce;
    this.#reponses = reponses;
    this.#bonneReponse = bonneReponse;
  }

  get enonce() {
    return this.#enonce;
  }

  set enonce(value) {
    this.#enonce = value;
  }

  get reponses() {
    return this.#reponses;
  }

  set reponses(value) {
    this.#reponses = value;
  }

  get bonneReponse() {
    return this.#bonneReponse;
  }

  set bonneReponse(value) {
    this.#bonneReponse = value;
  }

  afficher() {
    const questionContainer = document.getElementById('quiz');
    questionContainer.textContent = this.enonce;



    for (let i = 0; i < this.reponses.length; i++) {
      const reponsePossible = document.createElement('div');
      reponsePossible.classList.add('reponses', 'form-check');
      const label = document.createElement('label');
      label.textContent = this.reponses[i];
      label.classList.add('form-check-label');


      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'reponse';  // Toutes les radios doivent avoir le même nom pour être exclusives
      radio.value = i;
      radio.id = `reponse-${i}`;
      radio.classList.add('form-check-input');

      // Ajout de l'événement sur le label pour gérer le clic
      label.setAttribute('for', radio.id);
      reponsePossible.appendChild(radio);
      reponsePossible.appendChild(label);

      questionContainer.appendChild(reponsePossible);
    }


  }
}


class Quiz {
  #questions;
  #score = 0;
  #questionActuelle = 0;

  constructor(questions) {
    this.#questions = questions;
  }

  get questions() {
    return this.#questions;
  }

  set questions(value) {
    this.#questions = value;
  }

  get score() {
    return this.#score;
  }

  set score(value) {
    this.#score = value;
  }

  // Méthode pour afficher la question actuelle
  afficherQuestion() {
    if (this.#questionActuelle < this.#questions.length) {
      const question = this.#questions[this.#questionActuelle];
      question.afficher();
    } else {
      this.afficherResultat();
    }
  }

  // Méthode pour collecter la réponse de l'utilisateur et mettre à jour le score
  collecterReponse() {
    const radios = document.querySelectorAll('input[name="reponse"]');
    let reponseUtilisateur;

    radios.forEach(radio => {
      if (radio.checked) {
        reponseUtilisateur = parseInt(radio.value);
      }
    });

    if (reponseUtilisateur !== undefined) {
      const question = this.#questions[this.#questionActuelle];
      if (reponseUtilisateur === question.bonneReponse) {
        this.#score++;
      }
      this.#questionActuelle++;
      this.afficherQuestion();
    } else {
      alert("Veuillez sélectionner une réponse avant de continuer.");
    }
  }

  // Méthode pour afficher le résultat final
  afficherResultat() {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = `Votre score est de ${this.#score} sur ${this.#questions.length}.`;
  }
}


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
