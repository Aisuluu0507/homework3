
const List = ({ list, remove }) => {
    return (
        <>
            {list?.length > 0 ? (
                <ul className="todo-list">
                    {list.map((entry, index) => (
                        <div className="todo">
                            <li key={index}> {entry} </li>
                        </div>
                    ))}
                </ul>
            ) : (
                <div className="text">
                    <p>Welcome to ToDo List!</p>
                </div>
            )}
        </>
    );
};
export default List;
