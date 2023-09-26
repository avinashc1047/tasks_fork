import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const published = questions.filter(
        (question: Question): boolean => question.published
    );
    return published;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const fullQuestions = questions.filter(
        (question: Question): boolean =>
            !(
                question.body == "" &&
                question.expected == "" &&
                question.options.length == 0
            )
    );
    return fullQuestions;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const found = questions.find(
        (question: Question): boolean => question.id === id
    );
    return found || null;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const filtered = questions.filter(
        (question: Question): boolean => !(question.id === id)
    );
    return filtered;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const names = questions.map((question: Question): string => question.name);
    return names;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const points = questions.reduce(
        (sumPnts: number, question: Question) => sumPnts + question.points,
        0
    );
    return points;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const published = questions.filter(
        (question: Question): boolean => question.published
    );
    const points = published.reduce(
        (sumPnts: number, question: Question) => sumPnts + question.points,
        0
    );
    return points;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const txt = questions.reduce(
        (info: string, question: Question) =>
            info +
            // eslint-disable-next-line prettier/prettier
            `\n${question.id.toString()},${question.name},${question.options.length.toString()},${question.points.toString()},${question.published}`,
        "id,name,options,points,published"
    );
    return txt;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const ans: Answer[] = questions.map(
        (question: Question): Answer => ({
            questionId: question.id,
            text: "",
            submitted: false,
            correct: false
        })
    );
    return ans;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const publish = questions.map(
        (question: Question): Question => ({ ...question, published: true })
    );
    return publish;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    if (questions.length === 0) return true;
    const type: string = questions[0].type;
    const filt = questions.filter(
        (question: Question) => type === question.type
    );
    return filt.length === questions.length;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const ans = [...questions, makeBlankQuestion(id, name, type)];
    return ans;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    const target = questions.map(
        (question: Question): Question => ({
            ...question,
            name: targetId === question.id ? newName : question.name
        })
    );
    return target;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    const target = questions.map(
        (question: Question): Question => ({
            ...question,
            type: targetId === question.id ? newQuestionType : question.type,
            options:
                // eslint-disable-next-line prettier/prettier
                (targetId === question.id &&
                // eslint-disable-next-line prettier/prettier
                newQuestionType === "short_answer_question")
                    ? []
                    : question.options
        })
    );
    return target;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    const target = questions.map(
        (question: Question): Question => ({
            ...question,
            options:
                targetId === question.id
                    ? // eslint-disable-next-line prettier/prettier
                    edit_option_helper(question.options, newOption, targetOptionIndex)
                    : question.options
        })
    );
    return target;
}

export function edit_option_helper(
    options: string[],
    newOption: string,
    targetIndex: number
): string[] {
    let added: string[] = [];
    if (targetIndex === -1) {
        added = [...options, newOption];
    } else {
        added = [...options];
        added.splice(targetIndex, 1, newOption);
    }
    return added;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const original_index = questions.findIndex(
        (question: Question): boolean => targetId === question.id
    );
    const duplicate = duplicateQuestion(newId, questions[original_index]);
    const ans = [...questions];
    ans.splice(original_index + 1, 0, duplicate);
    return ans;
}
