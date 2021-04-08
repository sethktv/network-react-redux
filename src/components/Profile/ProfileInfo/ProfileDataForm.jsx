import React from "react";
import s from './ProfileInfo.module.css';
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import style from "../../common/FormsControls/FormsControls.module.css";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div><button>Сохранить</button></div>
        {error && <div className={style.formSummaryError}>
            {error}
        </div>
        }
        <div>
            <b>Имя</b>: {createField("Имя", "fullName", [], Input)}
        </div>
        <div>
            <b>Ищу работу</b>:  { createField("", "lookingForAJob", [], Input,  {type: "checkbox" } )}
        </div>

        <div>
            <b>Профессиональные навыки</b>:
            { createField("профессиональные навыки", "lookingForAJobDescription", [], Textarea  )}
        </div>


        <div>
            <b>Обо мне</b>:
            { createField("Обо мне", "aboutMe", [], Textarea  )}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={s.contact}>
            <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
            </div>
        })}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;