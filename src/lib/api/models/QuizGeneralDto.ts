/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CategoryDto } from './CategoryDto';
import type { UserDto } from './UserDto';
export type QuizGeneralDto = {
    quizId?: number;
    title?: string;
    description?: string;
    imageLink?: string;
    amountOfQuestions?: number;
    categories?: Array<CategoryDto>;
    owner?: UserDto;
};

