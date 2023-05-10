import React from 'react';
import { useLocation } from 'react-router-dom';

export default function InformationsForm({ user }) {
    const location = useLocation();
    const isReadOnly = location.pathname.includes('/espace-membre/utilisateurs');

    console.log(isReadOnly);

    return (
        <div>
            <form method="post">
                <fieldset className='form'>
                    <input
                        type="text"
                        name='lastname'
                        placeholder={user.lastName}
                        readOnly={!isReadOnly}
                    />
                    <input
                        type="text"
                        name='firstname'
                        placeholder={user.firstName}
                        readOnly={!isReadOnly}
                    />
                    <input
                        type="email"
                        name='email'
                        placeholder={user.email}
                        readOnly={!isReadOnly}
                    />
                    <input
                        type="phone"
                        name='phone'
                        placeholder={user.phone}
                        readOnly={!isReadOnly}
                    />
                </fieldset>
            </form>
        </div>
    );
}