/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PageableObject } from './PageableObject';
import type { QuizDto } from './QuizDto';
import type { SortObject } from './SortObject';
export type PageQuizDto = {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: Array<QuizDto>;
    number?: number;
    sort?: SortObject;
    first?: boolean;
    last?: boolean;
    numberOfElements?: number;
    pageable?: PageableObject;
    empty?: boolean;
};

