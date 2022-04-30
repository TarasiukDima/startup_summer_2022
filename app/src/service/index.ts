import axios, { AxiosResponse } from 'axios';
import { IPersonObjInfo, IReposItem } from '../context';

export const COUNT_EL_IN_PAGE = 4;
export const ERROR_GET_USER = "Can't get a user";
export const ERROR_GET_REPOS = "Can't get list repositories for a user";

interface IUserData {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    name: null | string;
    company: null | string;
    blog: string;
    location: null | string;
    email: null | string;
    hireable: null | string;
    bio: null | string;
    twitter_username: null;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: string;
    updated_at: string;
}

interface IUserRepoData {
    id: number;
    node_id: string;
    name: string;
    full_name: string;
    private: boolean;
    owner: Partial<IUserData>;
    html_url: string;
    description: null | string;
    fork: boolean;
    url: string;
    forks_url: string;
    keys_url: string;
    collaborators_url: string;
    teams_url: string;
    hooks_url: string;
    issue_events_url: string;
    events_url: string;
    assignees_url: string;
    branches_url: string;
    tags_url: string;
    blobs_url: string;
    git_tags_url: string;
    git_refs_url: string;
    trees_url: string;
    statuses_url: string;
    languages_url: string;
    stargazers_url: string;
    contributors_url: string;
    subscribers_url: string;
    subscription_url: string;
    commits_url: string;
    git_commits_url: string;
    comments_url: string;
    issue_comment_url: string;
    contents_url: string;
    compare_url: string;
    merges_url: string;
    archive_url: string;
    downloads_url: string;
    issues_url: string;
    pulls_url: string;
    milestones_url: string;
    notifications_url: string;
    labels_url: string;
    releases_url: string;
    deployments_url: string;
    created_at: string;
    updated_at: string;
    pushed_at: string;
    git_url: string;
    ssh_url: string;
    clone_url: string;
    svn_url: string;
    homepage: null | string;
    size: number;
    stargazers_count: number;
    watchers_count: number;
    language: string;
    has_issues: boolean;
    has_projects: boolean;
    has_downloads: boolean;
    has_wiki: boolean;
    has_pages: boolean;
    forks_count: number;
    mirror_url: null | string;
    archived: boolean;
    disabled: boolean;
    open_issues_count: number;
    license: {
        key: string;
        name: string;
        spdx_id: string;
        url: string;
        node_id: string;
    };
    allow_forking: boolean;
    is_template: boolean;
    topics: Array<string>;
    visibility: string;
    forks: number;
    open_issues: number;
    watchers: number;
    default_branch: string;
}

export interface IAnswerReturn {
    data: IPersonObjInfo | Array<IReposItem> | null;
    errorText?: string;
    countRepos?: number;
}

const instance = axios.create({
    baseURL: 'https://api.github.com/users/',
    headers: { accept: 'application/vnd.github.v3+json' },
});

async function apiGetUser(userName: string): Promise<IAnswerReturn> {
    return await instance
        .get(userName)
        .then(
            ({
                data: { login, name, avatar_url, html_url, followers, following, public_repos },
            }: AxiosResponse<IUserData>) => ({
                errorText: '',
                data: {
                    login,
                    name: name || login,
                    avatar: avatar_url,
                    repository: html_url,
                    followers,
                    following,
                },
                countRepos: public_repos,
            })
        )
        .catch(() => ({
            errorText: ERROR_GET_REPOS,
            data: null,
            countRepos: 0,
        }));
}

async function apiGetReposUser(userName: string, page: number): Promise<IAnswerReturn> {
    const URL = `${userName}/repos?sort=updated&per_page=${COUNT_EL_IN_PAGE}&page=${page}`;
    return await instance
        .get(URL)
        .then(({ data }: AxiosResponse<Array<IUserRepoData>>) => {
            const newData: Array<IReposItem> = [];

            data.forEach(({ name, description, html_url }: IUserRepoData) => {
                newData.push({
                    name,
                    description: description || '',
                    link: html_url,
                });
            });

            return {
                errorText: '',
                data: newData,
            };
        })
        .catch(() => ({
            errorText: ERROR_GET_REPOS,
            data: null,
        }));
}

export { apiGetUser, apiGetReposUser };
