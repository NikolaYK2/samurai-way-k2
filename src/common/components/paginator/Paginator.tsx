import React, {useMemo, useState} from 'react';
import s from "common/components/paginator/Paginator.module.css";

type PaginatorTypeComponent = {
  totalItemsCount: number,
  pageSize: number,
  currentPage: number,
  pageChange: (page: number) => void,
}


export const Paginator = (props: PaginatorTypeComponent) => {
  //общее количество страниц при показе props.pageSize на странице
  let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);

  const pages = useMemo(() => {
    let pagesArray: number[] = [];
    for (let i = 1; i <= pagesCount; i++) {
      pagesArray = [...pagesArray, i];
    }
    return pagesArray
  }, [pagesCount])

  // Вычисление общего количества "порций" страниц
  let portionCount = Math.ceil(pagesCount / props.pageSize)
  // Использование useState для отслеживания текущей "порции" страниц
  const [portionPage, setPortionPage] = useState(Math.ceil(props.currentPage / props.pageSize))
  // Вычисление границ текущей "порции" страниц
  let prevPortionNumber = (portionPage - 1) * props.pageSize + 1
  let nextPortionNumber = portionPage * props.pageSize
// Фильтрация массива страниц для отображения только текущей "порции" страниц
  const filterPages = useMemo(() => {
    return pages.filter(p => p >= prevPortionNumber && p <= nextPortionNumber)
  }, [pages, prevPortionNumber, nextPortionNumber])

  return (
    <div className={s.containerPages}>
      <div className={s.paginatorBut}>
        {portionPage > 1 &&
            < >
                <button onClick={() => setPortionPage(1)}>{'<'}</button>
                <button onClick={() => setPortionPage(portionPage - 1)}>{'<<'}</button>
            </>}
      </div>

      {filterPages.map((p) => {
        return (
          <span key={p}
                className={props.currentPage === p ? s.pageActive : s.page}
                onClick={() => props.pageChange(p)}
          >{p}</span>
        );
      })}

      {portionCount > portionPage &&
          <div className={s.paginatorBut}>
              <button onClick={() => setPortionPage(portionPage + 1)}>{'>>'}</button>
              <button onClick={() => setPortionPage(portionCount)}>{'>'}</button>
          </div>}
    </div>
  );
};

