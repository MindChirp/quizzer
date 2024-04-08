/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CategoryDto } from '../models/CategoryDto';
import type { MessageDto } from '../models/MessageDto';
import type { Pageable } from '../models/Pageable';
import type { PageQuizGeneralDto } from '../models/PageQuizGeneralDto';
import type { QuizAttemptDto } from '../models/QuizAttemptDto';
import type { QuizDetailsDto } from '../models/QuizDetailsDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class QuizControllerService {
    /**
     * @param pageable
     * @returns PageQuizGeneralDto OK
     * @throws ApiError
     */
    public static getPageOfQuizzes(
        pageable: Pageable,
    ): CancelablePromise<PageQuizGeneralDto> {
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
     * @returns MessageDto OK
     * @throws ApiError
     */
    public static updateQuiz(
        requestBody: QuizDetailsDto,
    ): CancelablePromise<MessageDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/quizzes',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns MessageDto OK
     * @throws ApiError
     */
    public static createQuiz(
        requestBody: QuizDetailsDto,
    ): CancelablePromise<MessageDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/quizzes',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns MessageDto OK
     * @throws ApiError
     */
    public static deleteQuiz(
        requestBody: QuizDetailsDto,
    ): CancelablePromise<MessageDto> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/quizzes',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param quizId
     * @returns QuizDetailsDto OK
     * @throws ApiError
     */
    public static getQuizDetails(
        quizId: string,
    ): CancelablePromise<QuizDetailsDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/quizzes/{quizId}',
            path: {
                'quizId': quizId,
            },
        });
    }
    /**
     * @param quizId
     * @param requestBody
     * @returns QuizAttemptDto OK
     * @throws ApiError
     */
    public static submitAttempt(
        quizId: string,
        requestBody: QuizAttemptDto,
    ): CancelablePromise<QuizAttemptDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/quizzes/{quizId}',
            path: {
                'quizId': quizId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param searchQuery
     * @param pageable
     * @returns PageQuizGeneralDto OK
     * @throws ApiError
     */
    public static getFilteredPageOfQuizzes(
        searchQuery: string,
        pageable: Pageable,
    ): CancelablePromise<PageQuizGeneralDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/quizzes/filter',
            query: {
                'searchQuery': searchQuery,
                'pageable': pageable,
            },
        });
    }
    /**
     * @returns CategoryDto OK
     * @throws ApiError
     */
    public static getCategories(): CancelablePromise<Array<CategoryDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/quizzes/categories',
        });
    }
}
