import React from 'react';
import UsersDatas from './../data/Users';
import RolesDatas from './../data/Roles';
import InstrumentsDatas from './../data/Instruments';
import { useParams } from 'react-router-dom';

export default function AccessForm() {

    const { id } = useParams();

    const user = UsersDatas.find((user) => user.id === parseInt(id));

    const userRole = []

    user.role.map((role) => {
        userRole.push(role.name)
    })



    return (
        <div>
            <form method="post">
                <fieldset>

                    <div>
                        <p>{userRole.join(', ')}</p>
                    </div>

                    <input
                        type="text"
                        name='instruments'
                        readOnly
                    />
                </fieldset>
            </form>
        </div>
    )
}
