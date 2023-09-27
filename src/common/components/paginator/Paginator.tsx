import React from 'react';
import s from "common/components/paginator/Paginator.module.css";

type PaginatorTypeComponent = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    pageChange: (page: number) => void,
}

export const Paginator = (props: PaginatorTypeComponent) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages: number[] = [];
    for (let i = 1; i <= pagesCount; i++) {
        if (i === 12) {
            break;
        } else {
            pages = [...pages, i];
        }
    }

    return (
            <div className={s.containerPages}>
                {pages.map((p,index) => {
                    return (
                        <span key={index}
                              className={props.currentPage === p ? s.pageActive : s.page}
                              onClick={() => props.pageChange(p)}
                        >{p}</span>
                    );
                })}
            </div>
    );
};

