import Rating from "./Rating"

export default function RatingArray(props) {
    const starArray = [...Array(5).keys()].map(i => i + 1);
    const ratings = starArray.map (i =>
        <Rating 
        key = {i}
        fill = {props.rating >= i ? "#FF6060" : "#E3E3E3"}
        />
        )
    return <>{ratings}</>
}