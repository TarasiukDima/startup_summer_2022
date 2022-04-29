import React, { useContext } from 'react';
import Image from '../../general/Image';
import { GlobalAppContext, IPersonObjInfo } from '../../../context';
import Paragraph from '../../general/Paragraph';
import css from './PersonInfo.module.scss';
import LinkEl from '../../general/LinkEl';

const PersonInfo = () => {
    const {
        state: { personInfo },
    } = useContext(GlobalAppContext);

    const { login, name, avatar, repository, followers, following } = personInfo as IPersonObjInfo;

    return (
        <div className={`${css.person_repository__people} ${css.people_info}`}>
            <Image className={css.people_info__img} src={avatar} alt={name} />

            <Paragraph className={css.people_info__name}>{name}</Paragraph>

            <LinkEl className={css.people_info__login} to={repository} target="_blank">
                {login}
            </LinkEl>

            <Paragraph className={css.people_info__sub}>
                <span className={css.people_info__followers}>{followers} followers</span>
                <span className={css.people_info__following}>{following} following</span>
            </Paragraph>
        </div>
    );
};

export default PersonInfo;
