import axios from 'axios';
import { useState } from "react";
import AddAvatarBtn from '../add-avatar-btn/AddAvatarBtn';
import Avatar from '../avatar/Avatar';
import Button from '../button/button';
import styles from './styles.module.css';

let newAvatars = [];
let avatarsUsed = 0;

function AvatarsApp() {

  let [renderAvatars, setRenderAvatars] = useState([])

  async function getAvatars() {
    let response = await axios.get('https://tinyfac.es/api/data?limit=50&quality=0')
    return response.data
  }

  async function getNewAvatars(count = 1) {
    const res = [];
    while (count) {
      if (newAvatars.length <= avatarsUsed) {
        newAvatars = await getAvatars();
        avatarsUsed = 0;
      }
      res.push(newAvatars[avatarsUsed++]);
      count--
    }
    return res
  }

  async function addAvatar() {
    setRenderAvatars(renderAvatars.concat(await getNewAvatars()));
  }

  async function changeAvatar(e) {
    e.currentTarget?.childNodes[1]?.setAttribute("src", `${(await getNewAvatars())[0].url}`)
  }

  async function refresh() {
    setRenderAvatars(await getNewAvatars(renderAvatars.length));
  }

  return (
    <div className={styles.container} >
      {renderAvatars.map(a => <Avatar key={a.id} onClickFunction={changeAvatar} avatarUrl={a.url} avatarId={a.id}></Avatar>)}
      <AddAvatarBtn onClickFunction={addAvatar}></AddAvatarBtn>
      <Button onClick={refresh} buttonText={'refresh all'}></Button>
    </div>
  );
}

export default AvatarsApp;