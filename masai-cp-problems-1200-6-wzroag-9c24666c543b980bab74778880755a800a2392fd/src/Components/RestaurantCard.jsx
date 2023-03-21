export function RestaurantCard({
    name,
    rating,
    type,
    number_of_votes,
    price_starts_from,
    id}){

    return (
        <tr data-testid="item">
           <td  data-testid = 'name'>
{/* //         add Link here and keep data-testid = 'name' to Link tag */}
                {data.name}
            </td>
            <td data-testid="rating">
            {data.rating}
            </td>
            <td data-testid="type">
            {data.type}
            </td>
            <td data-testid="votes">
            {data.number_of_votes}
            </td>
            <td data-testid="price">
            {data.price_starts_from}
            </td>
        </tr>
    )
}
