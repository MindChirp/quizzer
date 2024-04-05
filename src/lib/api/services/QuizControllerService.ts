/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Pageable } from '../models/Pageable';
import type { PageQuizDto } from '../models/PageQuizDto';
import type { QuizDto } from '../models/QuizDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class QuizControllerService {
    /**
     * @param pageable
     * @returns PageQuizDto OK
     * @throws ApiError
     */
    public static getPageOfQuizzes(
        pageable: Pageable,
    ): CancelablePromise<PageQuizDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/quizzes',
            query: {
                'pageable': pageable,
            },
        });
    }
    /**
     * @param requestBody
     * @returns QuizDto OK
     * @throws ApiError
     */
    public static createQuiz(
        requestBody: QuizDto,
    ): CancelablePromise<QuizDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/quizzes',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param quizId
     * @returns QuizDto OK
     * @throws ApiError
     */
    public static getQuiz(
        quizId: string,
    ): CancelablePromise<QuizDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/quizzes/{quizId}',
            path: {
                'quizId': quizId,
            },
        });
    }
}