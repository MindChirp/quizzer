/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PageableObject } from './PageableObject';
import type { SavedQuizAttemptDto } from './SavedQuizAttemptDto';
import type { SortObject } from './SortObject';
export type PageSavedQuizAttemptDto = {
    totalPages?: number;
    totalElements?: number;
    size?: number;
    content?: Array<SavedQuizAttemptDto>;
    number?: number;
    sort?: SortObject;
    first?: boolean;
    last?: boolean;
    numberOfElements?: number;
    pageable?: PageableObject;
    empty?: boolean;
};

