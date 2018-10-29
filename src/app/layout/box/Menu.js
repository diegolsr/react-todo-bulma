import React from 'react';
import { connect } from 'react-redux';

import NumberTag from './menu/NumberTag';

const mapStateToProps = state => {
    return {
        tasks: state.tasks
    }
}

const Menu = ({ tasks }) => (
    <div className="tabs is-centered is-fullwidth has-text-weight-bold">
        <ul>
            <li className="is-active">
                <NumberTag data={{ text: "All Tasks", quantity: tasks.length }} />
            </li>

            <li className="">
                <NumberTag data={{ text: "Completed", quantity: 0 }} />
            </li>
        </ul>
    </div>
);

export default connect(mapStateToProps)(Menu);