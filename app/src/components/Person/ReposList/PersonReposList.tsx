import React, { useContext } from 'react';
import ReactPaginate from 'react-paginate';
import Paragraph from '../../general/Paragraph';
import ContentWrapper from '../../general/ContentWrapper';
import Spinner from '../../Spinner';
import PersonReposItem from './Item';
import { GlobalAppContext, IReposItem } from '../../../context';
import {
    changeCurrentPageAction,
    changeErrorReposAction,
    changeListReposAction,
    changeLoadingPageAction,
} from '../../../context/actions';
import { apiGetReposUser, COUNT_EL_IN_PAGE } from '../../../service';
import { TChildrens, TGetContent } from '../../../commonTypes';
import css from './PersonReposList.module.scss';

const PersonReposList = () => {
    const {
        state: { searchValue, isLoadingRepos, listRepos, currentPage, maxPage, reposCount },
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

    const handlePageClick = async ({ selected }: { selected: number }) => {
        const newPage = selected + 1;
        dispatch(changeCurrentPageAction(newPage));
        dispatch(changeLoadingPageAction(true));

        const { data: reposData, errorText: reposError } = await apiGetReposUser(
            searchValue,
            newPage
        );
        dispatch(changeListReposAction(reposData as Array<IReposItem>));
        dispatch(changeErrorReposAction(reposError));
        dispatch(changeLoadingPageAction(false));
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

            <>
                {reposCount > 4 && (
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
                )}
            </>
        </ContentWrapper>
    );
};

export default PersonReposList;
