import React, { FC } from 'react';

interface IPageContentProps {
    className?: string;
}

const PageContent: FC<IPageContentProps> = ({ className }) => {
    return <div className={className || ''}></div>;
};

export default PageContent;
