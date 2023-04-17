import React from 'react';
import UsersDatas from '../../data/Users';
import { useParams } from 'react-router-dom';

export default function InformationsForm() {

    const { id } = useParams();

    const user = UsersDatas.find((user) => user.id === parseInt(id));

    return (
        <div>
            <form method="post">
            <fieldset className='form'>
                    <input
                        type="text"
                        name='lastname'
                        placeholder={user.lastName}
                        readOnly
                    />
                    <input
                        type="text"
                        name='firstname'
                        placeholder={user.firstName}
                        readOnly
                    />
                    <input
                        type="email"
                        name='email'
                        placeholder={user.email}
                        readOnly
                    />
                    <input
                        type="phone"
                        name='phone'
                        placeholder={user.phone}
                        readOnly
                    />
                </fieldset>
            </form>
        </div>
    )
}
