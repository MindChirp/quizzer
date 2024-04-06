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
     * @returns TokenDto Created
     * @throws ApiError
     */
    public static generateToken(
        requestBody: LoginDto,
    ): CancelablePromise<TokenDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/token',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    public static refreshToken(refreshToken: string): CancelablePromise<TokenDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/token/refresh',
            body: refreshToken,
            mediaType: 'text/plain',
        });
    }

}
