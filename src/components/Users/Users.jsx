import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/user.png'
import {NavLink} from "react-router-dom";
// import * as axios from "axios";
import axios from 'axios'

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage}
                    onClick={(e) => { 
                        props.onPageChanged(p); 
                    }} key={p.id}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto} />
                        </NavLink>
                    </div>
                    <div>
                        {
                            u.followed
                                ? <button disabled={props.followingInProgress} onClick={() => {
                                    props.toggleFollowingProgress(true);
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                        {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "43c40454-28ef-42fc-aeed-5cc68ebf3cf4"
                                            }
                                        })

                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(u.id);
                                            }
                                            props.toggleFollowingProgress(false);
                                        });
                                }}>Unfollow</button>
                                : <button disabled={props.followingInProgress} onClick={() => {
                                    props.toggleFollowingProgress(true);
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                        {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "43c40454-28ef-42fc-aeed-5cc68ebf3cf4"
                                            }
                                        })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(u.id);
                                            }
                                            props.toggleFollowingProgress(false);
                                        });
                                }}>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
};

export default Users;

  // [
  //   {
  //     id: 1, photoUrl: 'https://www.culture.ru/storage/images/e4a2cddbe5b782ed2fe00ddb641bc6cb/430404b3c18f6e444235fe407fdcfad0.jpg/c_fill,g_center,w_150,h_225/375px-dmitry_levitzky_-cropped-.jpg',
  //     followed: true,
  //     fullName: 'Dmitry',
  //     status: 'I am a boss',
  //     location: { city: 'Minsk', country: 'Belarus' }
  //   },
  //   {
  //     id: 2, //photoUrl: '',
  //     followed: false,
  //     fullName: 'Sasha',
  //     status: "It's my first post",
  //     location: { city: 'Moscow', country: 'Russia' }
  //   },
  //   {
  //     id: 3, //photoUrl: '', 
  //     followed: false,
  //     fullName: 'Masha',
  //     status: 'manana',
  //     location: { city: 'Kiev', country: 'Ukraine' }
  //   },
  //   {
  //     id: 4, //photoUrl: '',
  //     followed: true,
  //     fullName: 'Vasya',
  //     status: 'banana',
  //     location: { city: 'Almaty', country: 'Kazakhstan' }
  //   },
  //   {
  //     id: 5, //photoUrl: '',
  //     followed: false,
  //     fullName: 'Lena',
  //     status: 'lalala',
  //     location: { city: 'Aktobe', country: 'Kazakhstan' }
  //   },
  //   {
  //     id: 6, //photoUrl: '',
  //     followed: true,
  //     fullName: 'Katya',
  //     status: 'nanana',
  //     location: { city: 'Astana', country: 'Kazakhstan' }
  //   }
  // ]
