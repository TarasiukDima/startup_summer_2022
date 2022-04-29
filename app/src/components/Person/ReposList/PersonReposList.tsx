import React, { useContext } from 'react';
import Paragraph from '../../general/Paragraph';
import ContentWrapper from '../../general/ContentWrapper';
import Spinner from '../../Spinner';
import PersonReposItem from './Item';
import { GlobalAppContext, IReposItem } from '../../../context';
import { TChildrens, TGetContent } from '../../../commonTypes';
import css from './PersonReposList.module.scss';
import ReactPaginate from 'react-paginate';
import { changeCurrentPageAction } from '../../../context/actions';
const COUNT_EL_IN_PAGE = 4;

const PersonReposList = () => {
    const {
        state: { isLoadingRepos, listRepos, currentPage, maxPage, reposCount },
        dispatch,
    } = useContext(GlobalAppContext);

    const getContent: TGetContent = (): TChildrens => {
        if (isLoadingRepos) {
            return <Spinner />;
        }

        if (!listRepos.length) {
            return <Paragraph className={css.not__content}>Repository list is empty</Paragraph>;
        }

        return (
            <ul className={css.repositories__wrapper_list}>
                {listRepos.map((repo: IReposItem) => (
                    <PersonReposItem
                        key={repo.link}
                        className={css.repositories__wrapper_item}
                        {...repo}
                    />
                ))}
            </ul>
        );
    };

    const handlePageClick = ({ selected }: { selected: number }) => {
        dispatch(changeCurrentPageAction(selected + 1));
    };

    const startNumberReposElInPage = (currentPage - 1) * COUNT_EL_IN_PAGE;
    const endNumberReposElInPage = currentPage * COUNT_EL_IN_PAGE;

    return (
        <ContentWrapper className={`${css.person_repository__wrapper} ${css.repositories}`}>
            <>
                {listRepos.length > 0 && (
                    <h1 className={css.repositories__wrapper_title}>Repositories ({reposCount})</h1>
                )}
            </>

            <ContentWrapper className={css.repositories__wrapper}>{getContent()}</ContentWrapper>

            <ContentWrapper className={css.repositories__pagination}>
                <Paragraph className={css.repositories__pagination_title}>
                    {`${startNumberReposElInPage}-${endNumberReposElInPage} of ${reposCount} items`}
                </Paragraph>

                <ReactPaginate
                    containerClassName={css.repositories__pagination_container}
                    pageClassName={css.repositories__pagination_item}
                    previousClassName={css.previous}
                    nextClassName={css.next}
                    breakClassName={css.break}
                    activeClassName={css.active}
                    disabledClassName={css.disable}
                    pageCount={maxPage}
                    pageRangeDisplayed={5}
                    forcePage={currentPage - 1}
                    previousLabel="<"
                    nextLabel=">"
                    breakLabel="..."
                    onPageChange={handlePageClick}
                    renderOnZeroPageCount={undefined}
                />
            </ContentWrapper>
        </ContentWrapper>
    );
};

export default PersonReposList;
