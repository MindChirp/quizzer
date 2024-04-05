/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QuestionDto } from '../models/QuestionDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class QuestionControllerService {
    /**
     * @param requestBody
     * @returns QuestionDto OK
     * @throws ApiError
     */
    public static addQuestion(
        requestBody: QuestionDto,
    ): CancelablePromise<QuestionDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/questions',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
