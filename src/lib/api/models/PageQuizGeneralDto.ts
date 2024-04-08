/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PageableObject } from './PageableObject';
import type { QuizGeneralDto } from './QuizGeneralDto';
import type { SortObject } from './SortObject';
export type PageQuizGeneralDto = {
    totalPages?: number;
    totalElements?: number;
    size?: number;
    content?: Array<QuizGeneralDto>;
    number?: number;
    sort?: SortObject;
    numberOfElements?: number;
    first?: boolean;
    last?: boolean;
    pageable?: PageableObject;
    empty?: boolean;
};

