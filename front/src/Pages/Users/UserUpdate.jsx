import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link, useParams } from 'react-router-dom';
import { useApi } from '../../Router';
import SelectComponent from '../../Components/Forms/Select.Component';
import LoadingScreen from '../../Components/LoadingScreen/LoadingScreen.Component';
import InformationsForm from '../../Components/Forms/InformationsForm.Components';

export default function UserUpdate() {

    const [user, setUser] = useState({})
    const { id } = useParams();

    const fetchUser = async () => {
        const response = await useApi.user.GetById({ id: parseInt(id) });
        return setUser(response.data.data);
    }

    useEffect(() => {
        fetchUser()
    }, []);


    const [roles, setRoles] = useState(undefined);
    const [status, setStatus] = useState(undefined);
    const [instruments, setInstruments] = useState(undefined);

    useEffect(() => {

        const fetchRoles = async () => {
            const response = await useApi.roles.GetAll();
            return setRoles(response.data);
        }

        const fetchStatus = async () => {
            const response = await useApi.status.GetAll();
            return setStatus(response.data);
        }

        const fetchInstruments = async () => {
            const response = await useApi.instruments.GetAll();
            return setInstruments(response.data);
        }

        fetchRoles()
        fetchStatus()
        fetchInstruments()
    }, []);

    return (
        <div className='usersPage'>
            <Helmet><title>La Concordia - Gestion des utilisteurs</title></Helmet>


            {!user?.userRoles || user.length <= 0 || !roles || !status || !instruments ? <LoadingScreen /> : <>
                <div id='category'>
                    <h2>Gestion des utilisateurs</h2>
                    <h3>Modification du profil de {user.firstName} {user.lastName}</h3>
                </div>

                <Link to='/espace-membre/utilisateurs' className='returnButton'>
                    <i class="fa-solid fa-circle-up fa-rotate-270"></i>
                </Link>

                <div className='profil usersPage__content'>
                    <div>
                        <h3 className='usersPage__subheading'>Informations personnelles</h3>
                        <div className='separator'></div>
                        <InformationsForm user={user} />
                    </div>
                    <div>
                        <h3 className='usersPage__subheading'>Rôles</h3>
                        <div className='separator'></div>
                        <SelectComponent options={roles} userData={user.userRoles} />
                    </div>
                    <div>
                        <h3 className='usersPage__subheading'>Status</h3>
                        <div className='separator'></div>
                        <SelectComponent options={status} userData={user.userStatus} />
                    </div>
                    <div>
                        <h3 className='usersPage__subheading'>Instruments pratiqués</h3>
                        <div className='separator'></div>
                        <SelectComponent options={instruments} userData={user.userInstruments} />
                    </div>
                </div>
            </>}
        </div>
    )
}
