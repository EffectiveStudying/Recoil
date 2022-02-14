import Link from "next/link";
import { useRecoilValue } from "recoil"
import { $currentMenuState, $currentTagState } from "../../atoms"

export const GlobalFeed = () => {
    const currentMenu = useRecoilValue($currentMenuState);
    const currentTag = useRecoilValue($currentTagState);

    return (
        <li className="nav-item">
            <Link href={"/"}><a className={'nav-link ' + (currentMenu !== "GlobalFeed" || currentTag ? 'false' : 'active')}>Global Feed</a></Link>
        </li>
    );
}