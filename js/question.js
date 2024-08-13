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
