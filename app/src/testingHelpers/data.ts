import { IPersonObjInfo, IReposItem } from '../context';

export const testText = 'Test text';
export const testTitle = 'Title content';
export const testClassName = 'class__test';
export const testId = 'test_id';
export const testLink = 'google.com';
export const testStartPageContent = 'Start with searching';
export const testNotFoundUsers = 'User not found';
export const testNotRepos = 'Repository list is empty';

export const mockUserData: IPersonObjInfo = {
    login: 'gaearon',
    name: 'Dan Abramov',
    avatar: 'http://localhost:3000/static/media/gitHub.9fca7e68bfc72f787239d22bc77731d5.svg',
    repository: 'http://localhost:3000',
    followers: 65.8,
    following: 171,
};

export const mockReposData: Array<IReposItem> = [
    {
        name: 'react-hot-loader',
        description: 'Tweak React components in real time. (Deprecated: use Fast Refresh instead.',
        link: '/asfasdfasdfsfasdf',
    },
    {
        name: 'overreacted.io',
        description: 'Personal blog by Dan Abramov.',
        link: '/asdfasdf',
    },
    {
        name: 'whatthefuck.is',
        description:
            'An opinionated glossary of computer science terms for front-end developers. Written by Dan Abramov.',
        link: '/asdf',
    },
    {
        name: 'react-deep-force-update',
        description: 'react-deep-force-update',
        link: '/asdffasdf',
    },
];
