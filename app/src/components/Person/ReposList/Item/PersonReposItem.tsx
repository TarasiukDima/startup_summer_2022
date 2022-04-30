import React, { FC } from 'react';
import { IReposItem } from '../../../../context';
import LinkEl from '../../../general/LinkEl';

interface IPersonReposItemProps extends IReposItem {
    className?: string;
}

const PersonReposItem: FC<IPersonReposItemProps> = ({ description, link, name, className }) => {
    return (
        <li className={className || ''}>
            <LinkEl to={link} target="_blank">
                {name}
            </LinkEl>
            <span>{description}</span>
        </li>
    );
};

export default PersonReposItem;
