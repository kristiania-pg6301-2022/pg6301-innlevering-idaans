export function randomQuestion() {
  return Questions[Math.trunc(Math.random() * Questions.length)];
}

export function isCorrectAnswer(question, answers) {
  return question.correct_answers[answers + "_correct"] === "true";
}

export const Questions = [
  {
    id: 686,
    question:
      "Which command can be used to write onto other currently logged in user\u2019s console output terminal.",
    description: null,
    answers: {
      answer_a: "notify",
      answer_b: "alert",
      answer_c: "write",
      answer_d: "broadcast",
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "false",
      answer_b_correct: "false",
      answer_c_correct: "true",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: null,
    explanation: null,
    tip: null,
    tags: [{ name: "BASH" }, { name: "Linux" }],
    category: "Linux",
    difficulty: "Easy",
  },
  {
    id: 906,
    question:
      "The Service Type _____________ works only if your cluster is setup to work with a cloud provider.",
    description: null,
    answers: {
      answer_a: "ClusterIP",
      answer_b: "ExternalName",
      answer_c: "LoadBalancer",
      answer_d: "NodePort",
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "false",
      answer_b_correct: "false",
      answer_c_correct: "true",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: null,
    explanation: null,
    tip: null,
    tags: [{ name: "Kubernetes" }],
    category: "DevOps",
    difficulty: "Easy",
  },
  {
    id: 1078,
    question:
      "If you see a directory with the following permissions `drwxrwxrxt`, would you be able to remove it?",
    description: null,
    answers: {
      answer_a: "Only the owner of the folder can remove this folder",
      answer_b: "Yes, we can remove it from any user",
      answer_c: "We can remove it with the root user",
      answer_d: "We can remove it only using the root user",
      answer_e: "No, this folder can't be remove.",
      answer_f: null,
    },
    multiple_correct_answers: "true",
    correct_answers: {
      answer_a_correct: "true",
      answer_b_correct: "false",
      answer_c_correct: "true",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: null,
    explanation: null,
    tip: null,
    tags: [{ name: "Linux" }],
    category: "Linux",
    difficulty: "Easy",
  },
  {
    id: 361,
    question:
      "What will be the output of the following query INSERT INTO students (student name) VALUE ('James Lenon');",
    description: null,
    answers: {
      answer_a:
        "a student record with the name James Lenon will be added into the students table",
      answer_b: "the above query will generate an error message.",
      answer_c: null,
      answer_d: null,
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "false",
      answer_b_correct: "true",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: "answer_a",
    explanation: null,
    tip: null,
    tags: [{ name: "MySQL" }],
    category: "SQL",
    difficulty: "Easy",
  },
  {
    id: 275,
    question: "What are Importers in WordPress?",
    description: null,
    answers: {
      answer_a:
        "Importers are linking files that provide the functionality to export a bulk XML file with any number of records.",
      answer_b:
        "Importers are plugins that provide the functionality to import a bulk XML file with any number of records.",
      answer_c: null,
      answer_d: null,
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "false",
      answer_b_correct: "true",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: "answer_a",
    explanation: null,
    tip: null,
    tags: [{ name: "WordPress" }],
    category: "CMS",
    difficulty: "Hard",
  },
];
