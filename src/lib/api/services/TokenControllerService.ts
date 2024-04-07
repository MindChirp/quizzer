/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LoginDto } from '../models/LoginDto';
import type { TokenDto } from '../models/TokenDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TokenControllerService {
    /**
     * @param requestBody
     * @returns string Created
     * @throws ApiError
     */
    public static authenticateUser(
        requestBody: LoginDto,
    ): CancelablePromise<Record<string, string>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/token',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns TokenDto OK
     * @throws ApiError
     */
    public static refreshAccessToken(
        requestBody: TokenDto,
    ): CancelablePromise<TokenDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/token/refresh',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
