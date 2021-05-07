import React from "react";


const ListItem = ({ item }) => {
    return (<div >
        <strong>
            <p className="p-2 post text-muted">{item.title}</p>
        </strong>
    </div>
    )
}
export default ListItem;
