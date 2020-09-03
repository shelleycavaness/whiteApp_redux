import React, {useState, useEffect} from 'react';
import api from '../utils/api'
import { useDispatch, useSelector} from "react-redux"; 
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import BookItem from '../components/bookItem';

export const DetailPage = (props) => {
  let { id } = useParams();
  let history = useHistory();
  let url = '' ; //the variable is initialed to avoid an error at rendering
  const [detailBook, setDetailBook] = useState({})

  // use strapi admin to find the exact route for the image
  useEffect(()=>{
    api 
     .get(`/books/${id}`)
     .then( response => {
       let bookObj = (response.data);
       setDetailBook(bookObj)
     })
     .catch(err => console.log('err fetching book', err))
  }, [])
// this is where we set the book image so that it doesnt throw an error
//if we created the variable here we would not have access 
//because of the local scope of the function
  if(detailBook.image){
    console.log('**************detailBook.image :>> ', detailBook.image);
    url = `http://localhost:1337` + detailBook.image[0].url
    console.log('url :>> ', url);
  }

  function handleClick() {
    history.push("/");
  }
  return (
    <div>
     <h2>Detail screen</h2>
     <div className="p-4">
          <span className="font-bold uppercases f4">{detailBook.title}</span>
          <p className="lh-4">{detailBook.author}</p>
          <p className="lh-4">{detailBook.description}</p>

     {     detailBook.image && 
      (   <div>        
      
        <img style={{height:"100px", width:"100px"}} 
        src={url} 
        /> 
        </div>
      )}

      </div> 

    <button type="button" onClick={handleClick}>
      Go back
    </button>
    </div>

  )
}

export default DetailPage