/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QuestionDto } from './QuestionDto';
import type { UserDto } from './UserDto';
export type QuizDetailsDto = {
    quizId?: number;
    title?: string;
    description?: string;
    imageLink?: string;
    owner?: UserDto;
    questions?: Array<QuestionDto>;
};

