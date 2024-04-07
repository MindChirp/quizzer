/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CategoryDto } from './CategoryDto';
import type { QuestionDto } from './QuestionDto';
import type { UserDto } from './UserDto';
export type QuizDetailsDto = {
    quizId?: number;
    title?: string;
    description?: string;
    imageLink?: string;
    owner?: UserDto;
    categories?: Array<CategoryDto>;
    questions?: Array<QuestionDto>;
};

