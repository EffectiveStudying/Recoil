import Link from "next/link";
import { useRecoilState, useRecoilValue } from "recoil";
import { $currentPageNumState, $limitState, $totalCountState } from "../../atoms";

export const Pagination = () => {
    const [currentPageNum, setCurrentPageNum] = useRecoilState($currentPageNumState);

    const getRange = (start: number, end: number) => {
      return [...Array(end - start + 1)].map((_, i) => start + i);
    };
    const totalCount = useRecoilValue($totalCountState);
    const limit = useRecoilValue($limitState);
    const pages = totalCount > 0 ? getRange(0, Math.ceil(totalCount / limit) - 1) : [];

    if(totalCount < limit){
        return <div />
    }
    return (
        <nav>
            <ul className="pagination">
                { pages.map((page) => (
                    <li 
                        className={'page-item ' + (currentPageNum === page ? 'active' : '')} 
                        onClick={() => setCurrentPageNum(page)}>
                        <Link href={""}><a className="page-link">{page+1}</a></Link>
                    </li>
                ))
                }
            </ul>
        </nav>
    );
}