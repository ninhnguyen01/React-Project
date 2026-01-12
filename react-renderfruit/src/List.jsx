
function List(props) {

    const category = props.category;
    const itemList = props.items;
    const listItem = itemList.map(items => <li key={items.ID}>{items.name}: &nbsp;<b>{items.calories}</b> Calories</li>);

    return (<>
        <h3 className="list-category">{category}</h3>
        <ul className="list-item">{listItem}</ul>
    </>);
}

export default List