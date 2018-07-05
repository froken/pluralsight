import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from 'react-bootstrap';

const TaskListRow = ({task}) => {
    return (
        <ListGroupItem>
            <i className="fa fa-check"></i>{task.text}
        </ListGroupItem>
    );
};

TaskListRow.propTypes = {
    task: PropTypes.object.isRequired
};

export default TaskListRow;