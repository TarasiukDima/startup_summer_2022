import React, { FC, useContext } from 'react';
import Input from '../general/Input';
import Label from '../general/Label';
import { GlobalAppContext } from '../../context';
import { changeSearchStringAction } from '../../context/actions';
import { TChangeElHandler } from '../../commonTypes';
import css from './FormSearch.module.scss';

const FormSearch: FC = () => {
    const {
        state: { searchValue },
        dispatch,
    } = useContext(GlobalAppContext);

    const changeInputHandler: TChangeElHandler<HTMLInputElement> = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        dispatch(changeSearchStringAction(event.target.value));
    };

    const submitInputHandler: TChangeElHandler<HTMLFormElement> = (
        event: React.ChangeEvent<HTMLFormElement>
    ) => {
        event.preventDefault();
        console.log(event);
    };

    return (
        <form className={css.form} onSubmit={submitInputHandler}>
            <Label className={css.form__label}>
                <Input
                    className={css.form__label_search}
                    value={searchValue}
                    isControlled={true}
                    onChange={changeInputHandler}
                    type="search"
                    name="search"
                    placeholder="Enter GitHub username"
                />
            </Label>

            <Input className={css.form__submit} type="submit" submitBtnText="search" />
        </form>
    );
};

export default FormSearch;
