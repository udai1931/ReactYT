import React,{useState,useEffect} from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { database } from '../firebase';

function Like({userData,postData}) {
    const [like,setLike] = useState(null);
    useEffect(()=>{
        let check = postData.likes.includes(userData.userId)?true:false
        setLike(check)
    },[postData])
    const handleLike = () => {
        if(like==true){
            let narr = postData.likes.filter((el)=>el!=userData.userId)
            database.posts.doc(postData.postId).update({
                likes:narr
            })
        }else{
            let narr = [...postData.likes,userData.userId]
            database.posts.doc(postData.postId).update({
                likes:narr
            })
        }
    }
    return (
        <div>
            {
                like!=null?
                <>
                {
                    like==true?<FavoriteIcon style={{padding:'1rem',paddingTop:'0.5rem'}} className={`like`} onClick={handleLike}/> :<FavoriteIcon style={{padding:'1rem',paddingTop:'0.5rem'}} className={`unlike2`} onClick={handleLike}/>
                }
                </>:
                <></>
            }
        </div>
    )
}

export default Like
