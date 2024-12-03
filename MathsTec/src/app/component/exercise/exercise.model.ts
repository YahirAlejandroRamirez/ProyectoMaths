export interface Exercise {
    id: string;
    question: string;
    options: { text: string; correct: boolean }[];
    explanation?: string; // Explicación de la respuesta correcta
}
