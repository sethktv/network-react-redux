import React, { useState } from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );
    }

    return (
        <div className={s.profileBlock}>
            <div >
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            </div>

            <div className={s.descriptionBlock}>
                <img alt='' src={profile.photos.large || userPhoto} className={s.mainPhoto} />
                <div className={s.fileOpen}>
                    {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
                </div>
            </div>
            <div className={s.form}>
            { editMode
                ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
                : <ProfileData goToEditMode={() => { setEditMode(true) }} profile={profile} isOwner={isOwner} />}
            </div>


        </div>
    )
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
    return <div className={s.profileDataText}>
        {isOwner && <div><button onClick={goToEditMode}>Редактировать</button></div>}
        <div>
            <b>Имя</b>: {profile.fullName}
        </div>
        <div>
            <b>Ищу работу</b>: {profile.lookingForAJob ? "Да" : "Нет"}
        </div>
        {profile.lookingForAJob &&
            <div>
                <b>Профессиональные навыки</b>: {profile.lookingForAJobDescription}
            </div>
        }

        <div>
            <b>Обо мне</b>: {profile.aboutMe}
        </div>
        <div>
            <b>Контакты</b>: {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
            })}
        </div>
    </div>
}


const Contact = ({ contactTitle, contactValue }) => {
    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;