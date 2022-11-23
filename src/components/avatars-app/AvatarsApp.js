import { render } from '@testing-library/react';
import axios from 'axios';
import { useState, useEffect, useRef } from "react";
import AddAvatarBtn from '../add-avatar-btn/AddAvatarBtn';
import Avatar from '../avatar/Avatar';
import Button from '../button/button';
import styles from './styles.module.css';

const MOCK_DATA = [
  {
    first_name: "Heinrich",
    last_name: "Nauarro",
    id: 1,
    url: "https://res.cloudinary.com/tinyfac-es/image/upload/w_1024,h_1024,c_fit/v1627199970/facebook/g1vbmsmohrypg3aqt8ig.jpg"
  },
  {
    first_name: "wert",
    last_name: "defsrdg",
    id: 2,
    url: "https://res.cloudinary.com/tinyfac-es/image/upload/w_1024,h_1024,c_fit/v1627199935/facebook/wzwh9yub69xt0rjotccg.jpg"
  },
  {
    first_name: "fbfhty",
    last_name: "ngfhgnhn",
    id: 3,
    url: "https://res.cloudinary.com/tinyfac-es/image/upload/w_1024,h_1024,c_fit/v1627200017/facebook/hlzrekjn6evmhaso7mr1.jpg"
  },
  {
    first_name: "gbgfbgb",
    last_name: ".lk,jmn",
    id: 4,
    url: "https://res.cloudinary.com/tinyfac-es/image/upload/w_1024,h_1024,c_fit/v1627199980/facebook/fdvfdailyvnb3gajgftk.jpg"
  },
  {
    first_name: "gfhfghgfhfght",
    last_name: "dghgfgfdg",
    id: 5,
    url: "https://res.cloudinary.com/tinyfac-es/image/upload/w_1024,h_1024,c_fit/v1627200029/facebook/xfnzuipzjjvq3n6dk7d7.jpg"
  },
  {
    first_name: "desfdgtfhyjgukh",
    last_name: "khjlrdg",
    id: 6,
    url: "https://res.cloudinary.com/tinyfac-es/image/upload/w_1024,h_1024,c_fit/v1627200082/facebook/vwbehyyyzmhilbukvrta.jpg"
  },
  {
    first_name: "lokijuhygtft",
    last_name: "mjngfbvdcdg",
    id: 7,
    url: "https://res.cloudinary.com/tinyfac-es/image/upload/w_1024,h_1024,c_fit/v1627200010/facebook/ucdnwa0siiwvpqjbbldl.jpg"
  },
  {
    first_name: "weghhhhhhhhrt",
    last_name: "dejkkkg",
    id: 8,
    url: "https://res.cloudinary.com/tinyfac-es/image/upload/w_1024,h_1024,c_fit/v1627199961/facebook/lboglhxqyqhvfshkcyvk.jpg"
  },
  {
    first_name: "gghyjgrt",
    last_name: "zxvcbng",
    id: 9,
    url: "https://res.cloudinary.com/tinyfac-es/image/upload/w_1024,h_1024,c_fit/v1627200023/facebook/cnsxe6jdlkdt87zxa3b7.jpg"
  },
  {
    first_name: "ghfkiult",
    last_name: "xcvbgj",
    id: 10,
    url: "https://res.cloudinary.com/tinyfac-es/image/upload/w_1024,h_1024,c_fit/v1627199951/facebook/fqyou19a5cpjordccun4.jpg"
  },
  {
    first_name: "Heinrich",
    last_name: "Nauarro",
    id: 11,
    url: "https://res.cloudinary.com/tinyfac-es/image/upload/w_1024,h_1024,c_fit/v1627199970/facebook/g1vbmsmohrypg3aqt8ig.jpg"
  },
  {
    first_name: "wert",
    last_name: "defsrdg",
    id: 12,
    url: "https://res.cloudinary.com/tinyfac-es/image/upload/w_1024,h_1024,c_fit/v1627199935/facebook/wzwh9yub69xt0rjotccg.jpg"
  },
  {
    first_name: "fbfhty",
    last_name: "ngfhgnhn",
    id: 13,
    url: "https://res.cloudinary.com/tinyfac-es/image/upload/w_1024,h_1024,c_fit/v1627200017/facebook/hlzrekjn6evmhaso7mr1.jpg"
  },
  {
    first_name: "gbgfbgb",
    last_name: ".lk,jmn",
    id: 14,
    url: "https://res.cloudinary.com/tinyfac-es/image/upload/w_1024,h_1024,c_fit/v1627199980/facebook/fdvfdailyvnb3gajgftk.jpg"
  },
  {
    first_name: "gfhfghgfhfght",
    last_name: "dghgfgfdg",
    id: 15,
    url: "https://res.cloudinary.com/tinyfac-es/image/upload/w_1024,h_1024,c_fit/v1627200029/facebook/xfnzuipzjjvq3n6dk7d7.jpg"
  },
  {
    first_name: "desfdgtfhyjgukh",
    last_name: "khjlrdg",
    id: 16,
    url: "https://res.cloudinary.com/tinyfac-es/image/upload/w_1024,h_1024,c_fit/v1627200082/facebook/vwbehyyyzmhilbukvrta.jpg"
  },
  {
    first_name: "lokijuhygtft",
    last_name: "mjngfbvdcdg",
    id: 17,
    url: "https://res.cloudinary.com/tinyfac-es/image/upload/w_1024,h_1024,c_fit/v1627200010/facebook/ucdnwa0siiwvpqjbbldl.jpg"
  },
  {
    first_name: "weghhhhhhhhrt",
    last_name: "dejkkkg",
    id: 18,
    url: "https://res.cloudinary.com/tinyfac-es/image/upload/w_1024,h_1024,c_fit/v1627199961/facebook/lboglhxqyqhvfshkcyvk.jpg"
  },
  {
    first_name: "gghyjgrt",
    last_name: "zxvcbng",
    id: 19,
    url: "https://res.cloudinary.com/tinyfac-es/image/upload/w_1024,h_1024,c_fit/v1627200023/facebook/cnsxe6jdlkdt87zxa3b7.jpg"
  },
  {
    first_name: "ghfkiult",
    last_name: "xcvbgj",
    id: 20,
    url: "https://res.cloudinary.com/tinyfac-es/image/upload/w_1024,h_1024,c_fit/v1627199951/facebook/fqyou19a5cpjordccun4.jpg"
  },
]


let avatarsArray = [];
let newAvatars = [];

function AvatarsApp() {

  const [countAvatar, setCountAvatar] = useState(0);


  async function getAvatars() {
    await axios.get('https://tinyfac.es/api/data?limit=50&quality=0').then((response) => {
      newAvatars = response.data;
    })
    console.log("getAvatars working")
  }


  console.log("length:", newAvatars.length);

  async function addAvatar(count) {
    if (newAvatars.length) {
      avatarsArray.push(newAvatars[count]);
      console.log("addAvatar counter:", count);
    } else {
      // console.log("avatars over");
      let b = await console.log('else addAvatar');
      let a = await getAvatars();
      let d = await console.log('newAvatars:', newAvatars);
      let c = await avatarsArray.push(newAvatars[count]);
      let i = await console.log('avatarsArray:', avatarsArray);
      render()
      // avatarsArray.push(newAvatars[count]);
    }
  }

  function changeAvatar(e) {
    if (newAvatars.length) {
      setCountAvatar(countAvatar + 1);
      e.currentTarget?.childNodes[1]?.setAttribute("src", `${newAvatars[countAvatar].url}`)
    } else {
      getAvatars();
      // setCountAvatar(countAvatar + 1);
      // e.currentTarget?.childNodes[1]?.setAttribute("src", `${newAvatars[countAvatar].url}`)
    }
  }

  return (
    <div className={styles.container} >
      {avatarsArray.map(a => <Avatar key={a.id} onClickFunction={changeAvatar} avatarUrl={a.url} avatarId={a.id}></Avatar>)}
      <AddAvatarBtn onClickFunction={() => { setCountAvatar(countAvatar + 1); addAvatar(countAvatar) }}></AddAvatarBtn>
      <Button buttonText={'refresh all'}></Button>

      <button onClick={getAvatars}>get Avatars</button>
    </div>

  );
}

export default AvatarsApp;