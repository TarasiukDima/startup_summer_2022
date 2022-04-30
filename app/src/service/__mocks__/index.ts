import { mockReposData, mockUserData } from '../../testingHelpers/data';
import { IAnswerReturn } from '../index';

async function apiGetUser(userName: string): Promise<IAnswerReturn> {
    return Promise.resolve({
        data: mockUserData,
        countRepos: mockReposData.length,
    });
}

async function apiGetReposUser(userName: string, page: number): Promise<IAnswerReturn> {
    return Promise.resolve({
        data: mockReposData,
    });
}

export { apiGetUser, apiGetReposUser };
