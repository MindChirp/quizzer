/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LoginDto } from '../models/LoginDto';
import type { MessageDto } from '../models/MessageDto';
import type { UserDto } from '../models/UserDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UserControllerService {
    /**
     * @param username
     * @param requestBody
     * @returns MessageDto OK
     * @throws ApiError
     */
    public static updateUserPassword(
        username: string,
        requestBody: UserDto,
    ): CancelablePromise<MessageDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/users/{username}/update-password',
            path: {
                'username': username,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param username
     * @param requestBody
     * @returns MessageDto OK
     * @throws ApiError
     */
    public static updateUserFullName(
        username: string,
        requestBody: UserDto,
    ): CancelablePromise<MessageDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/users/{username}/update-fullname',
            path: {
                'username': username,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param username
     * @param requestBody
     * @returns MessageDto OK
     * @throws ApiError
     */
    public static updateUserEmail(
        username: string,
        requestBody: UserDto,
    ): CancelablePromise<MessageDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/users/{username}/update-email',
            path: {
                'username': username,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns UserDto OK
     * @throws ApiError
     */
    public static createUser(
        requestBody: UserDto,
    ): CancelablePromise<UserDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/users/register',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns MessageDto OK
     * @throws ApiError
     */
    public static loginUser(
        requestBody: LoginDto,
    ): CancelablePromise<MessageDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/users/login',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param username
     * @returns UserDto OK
     * @throws ApiError
     */
    public static getUser(
        username: string,
    ): CancelablePromise<UserDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/users/{username}',
            path: {
                'username': username,
            },
        });
    }
}
