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
    type?: QuestionDto.type;
};
export namespace QuestionDto {
    export enum type {
        MULTIPLE_CHOICE = 'MULTIPLE_CHOICE',
        TRUE_FALSE = 'TRUE_FALSE',
        SHORT_ANSWER = 'SHORT_ANSWER',
    }
}

