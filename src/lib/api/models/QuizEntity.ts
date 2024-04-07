/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CategoryEntity } from './CategoryEntity';
import type { UserEntity } from './UserEntity';
export type QuizEntity = {
    quizId?: number;
    title?: string;
    description?: string;
    categories?: Array<CategoryEntity>;
    imageLink?: string;
    collaborators?: Array<UserEntity>;
    owner?: UserEntity;
};

