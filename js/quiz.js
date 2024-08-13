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
