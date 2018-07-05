import React from 'react';
import PropTypes from 'prop-types';
import TaskListRow from './TaskListRow';
import { ListGroup } from 'react-bootstrap';

const TaskList = ({tasks}) => {
    return (
        <ListGroup>
            {tasks.map(task =>
                <TaskListRow key={task.id} task={task}/>
            )}
        </ListGroup>
    );
};

TaskList.propTypes = {
    tasks: PropTypes.array.isRequired
};

export default TaskList;