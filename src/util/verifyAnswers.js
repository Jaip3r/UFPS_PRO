
/**
 * Función encargada de de validar que cada una de las respuestas de una preguntas sean unicas
 * @param {object} answers 
 * @returns boolean
 */
export function validateAnswers(answers) {

    let visto = {};

    for (const answer of answers) {

        if (visto[answer]){
            return false;
        }
        visto[answer] = true;

    }

    return true;

}


/**
 * 
 * @param {object} questions 
 * @returns array with all unique answers
 */
export function removeQuestionsRepeat(questions) {

    let visto = {};
    const uniqueQuestions = [];

    for (const question of questions) {

        if (!visto[question.texto_pregunta]){
            uniqueQuestions.push(question);
        }
        visto[question.texto_pregunta] = true;

    }

    return uniqueQuestions;

}
