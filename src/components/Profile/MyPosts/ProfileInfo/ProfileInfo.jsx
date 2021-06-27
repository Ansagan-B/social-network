import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div>
                 <img src="https://100oboi.ru/upload/iblock/32f/100oboi_ru_wg_00369_maledive_island.jpg"></img>
            </div>
            <div className={s.descriptionBlock}>
                 <img src={props.profile.photos.large}></img>
                <div>{props.profile.fullName}</div>
                <div>Ищу работу: {props.profile.lookingForAJobDescription}</div>
                <div> {props.profile.lookingForAJob}</div>
            </div>

        </div>
    )
}

export default ProfileInfo;
