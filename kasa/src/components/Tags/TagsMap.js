import Tags from './Tags'
export default function TagsMap(props) {

    const tags = props.tag.map((tagList, index) => (
        <Tags key={index} tag = {tagList} />)) 
    return <>{tags}</>
}