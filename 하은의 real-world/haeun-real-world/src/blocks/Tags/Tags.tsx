import { useRecoilValueLoadable } from "recoil";
import axios from "axios";
import { selector } from "recoil";


export const tagListSelector = selector({
    key: 'tagListSelector',
    get: async() => {
        try{
            const response = await axios.get(
                `https://dongha-real-world.herokuapp.com/api/tags`
            );
            return response.data;
        }catch (e) {
            return [];
        }
    }
});

export const Tags = () => {
    const tags = useRecoilValueLoadable(tagListSelector);
    
    switch (tags.state){
        case 'hasValue':
            const tagList = tags.contents.tags.map((tag) => (<a href="" className="tag-pill tag-default">{tag}</a>));
            return (
                <div className="col-md-3">
                    <div className="sidebar">
                        <p>Popular Tags</p>
                        <div className="tag-list">
                            { tagList }
                        </div>
                    </div>
                </div>
            );
        case 'loading':
            return <div>Loading Tags...</div>
        case 'hasError':
            throw tags.contents
    }    
}