import Link from "next/link";
import { useRecoilValue } from "recoil";
import { $currentTagState } from "../../atoms";

export const FiltersTag = () => {
    const selectedTag = useRecoilValue($currentTagState);
    
    if(!selectedTag){
        return <ul />
    }
    return (
        <li className="nav-item">
            <Link href={""}><a className="nav-link active ng-binding"><i className="ion-pound">{selectedTag}</i></a></Link>
        </li>
    );
}