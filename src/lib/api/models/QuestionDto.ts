/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QuestionAnswersDto } from './QuestionAnswersDto';
export type QuestionDto = {
    questionId?: number;
    label?: string;
    imageLink?: string;
    position?: number;
    alternatives?: Array<QuestionAnswersDto>;
    quizId?: string;
};

