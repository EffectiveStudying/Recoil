import classNames from "classnames";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { $currentMenuState, $currentTagState } from "../../atoms";

export const YourFeed = () => {
    const currentMenu = useRecoilValue($currentMenuState);
    const currentTag = useRecoilValue($currentTagState);
    
    return (
        <li className="nav-item">
            <Link href={""}><a className={ classNames('nav-link ', { active : currentMenu === "YourFeed" && !currentTag })}>Your Feed</a></Link> {/* Todo : 계정 미로그인 시 보이지 않게 */}
        </li>
    );
}