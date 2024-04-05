/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PageableObject } from './PageableObject';
import type { QuizDto } from './QuizDto';
import type { SortObject } from './SortObject';
export type PageQuizDto = {
    totalPages?: number;
    totalElements?: number;
    size?: number;
    content?: Array<QuizDto>;
    number?: number;
    sort?: SortObject;
    numberOfElements?: number;
    first?: boolean;
    last?: boolean;
    pageable?: PageableObject;
    empty?: boolean;
};

