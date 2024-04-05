/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Pageable } from '../models/Pageable';
import type { QuizDto } from '../models/QuizDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class QuizControllerService {
    /**
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static createQuiz(
        requestBody: QuizDto,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/quizzes/create',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param pageable
     * @returns any OK
     * @throws ApiError
     */
    public static getPageOfQuizzes(
        pageable: Pageable,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/quizzes/getPage',
            query: {
                'pageable': pageable,
            },
        });
    }
}
