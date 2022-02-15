import classNames from "classnames";
import Link from "next/link";
import { useRecoilState, useRecoilValue } from "recoil";
import { $currentPageNumState, $limitState } from "../../atoms";

const getRange = (start: number, end: number) => {
    return [...Array(end - start + 1)].map((_, i) => start + i);
};

export const Pagination = ({totalCount}) => {
    const [currentPageNum, setCurrentPageNum] = useRecoilState($currentPageNumState);
    const limit = useRecoilValue($limitState);
    const pages = totalCount > 0 ? getRange(0, Math.ceil(totalCount / limit) - 1) : [];

    if(totalCount < limit){
        return <div />
    }
    
    return (
        <nav>
            <ul className="pagination">
                { 
                    pages.map((page) => (
                        <li key={`${page}`}
                            className={classNames('page-item', { active: currentPageNum === page })} 
                            onClick={() => setCurrentPageNum(page)}>
                            <Link href={""}><a className="page-link">{ page + 1 }</a></Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
}