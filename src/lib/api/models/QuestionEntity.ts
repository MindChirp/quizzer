/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QuizEntity } from './QuizEntity';
export type QuestionEntity = {
    questionId?: number;
    label: string;
    imageLink?: string;
    position: number;
    alternatives?: string;
    type: QuestionEntity.type;
    quiz?: QuizEntity;
};
export namespace QuestionEntity {
    export enum type {
        MULTIPLE_CHOICE = 'MULTIPLE_CHOICE',
        TRUE_FALSE = 'TRUE_FALSE',
        SHORT_ANSWER = 'SHORT_ANSWER',
    }
}

