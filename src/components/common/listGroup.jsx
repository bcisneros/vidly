import React from 'react';

const ListGroup = props => {
    const {onItemSelect, genres, currentGenre, textProperty, valueProperty} = props;
    return <ul className="list-group">
            {genres.map(genre => (
                <li
                    key={genre[valueProperty]}
                    onClick={() => onItemSelect(genre)}
                    className={currentGenre === genre ? 'list-group-item active' : 'list-group-item'}>
                    {genre[textProperty]}
                </li>
            ))}
        </ul>;
}

ListGroup.defaultProps = {
    textProperty: "name",
    valueProperty: "_id"
}

export default ListGroup;