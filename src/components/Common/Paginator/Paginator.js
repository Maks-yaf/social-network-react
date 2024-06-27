import React, {useState} from 'react';
import s from './Paginator.module.css';
import cn from "classnames"
import {Button} from "@mui/material";

const Paginator = (props) => {

    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / props.portionSize);
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1;
    let rightPortionPageNumber = portionNumber * props.portionSize;

    return (
        <div className={cn(s.paginator, s.test)}>
            {portionNumber > 1 &&
            <Button onClick={ () => {setPortionNumber(portionNumber-1)}}>Back</Button>}
            {pages
                .filter( p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                return <span  key={p}
                    className={props.currentPage === p && s.selectedPage || s.pageNumber}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>
                        {p}
                        </span>
            })}

            {portionCount > portionNumber &&
                <Button onClick={ () => {setPortionNumber(portionNumber+1)}}>Forward</Button>}
        </div>
    )
}

export default Paginator;