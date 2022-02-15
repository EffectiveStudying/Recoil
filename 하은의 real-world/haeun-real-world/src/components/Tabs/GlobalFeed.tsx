import classNames from "classnames";
import { useRecoilValue, useRecoilState } from "recoil"
import { $currentMenuState, $currentTagState } from "../../atoms"

export const GlobalFeed = () => {
    const currentMenu = useRecoilValue($currentMenuState);
    const [currentTag, setCurrentTag] = useRecoilState($currentTagState);

    const clickGlobalFeed = (e) => {
        e.preventDefault();
        setCurrentTag(undefined);
    }

    return (
        <li className="nav-item">
            <a href="" onClick={clickGlobalFeed} className={ classNames('nav-link ', { active : currentMenu === "GlobalFeed" && !currentTag })}>Global Feed</a>
        </li>
    );
}