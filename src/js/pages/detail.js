import React, {useState, useEffect} from 'react';
import api from '../utils/api'
import { useDispatch, useSelector} from "react-redux"; 
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import BookItem from '../components/bookItem';

export const DetailPage = (props) => {
  let { id } = useParams();
  let history = useHistory();
  let url = '' ;
  const [detailBook, setDetailBook] = useState({})
  const [imgStrapi, setImage] = useState('')
  // const url = `http://localhost:1337` + detailBook.image[0].url
    // let image = `http://localhost:1337` + detailBook.image[0].url
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

  if(detailBook.image){
    console.log('**************detailBook.image :>> ', detailBook.image);
    let url = `http://localhost:1337` + detailBook.image[0].url
    console.log('url :>> ', url);
  }  


  function handleClick() {
    history.push("/browse");
  }
  return (
    <div>
     <h2>return back</h2>
     <div className="p-4">
          <span className="font-bold uppercases f4">{detailBook.title}</span>
          <p className="lh-4">{detailBook.author}</p>
          <p className="lh-4">{detailBook.description}</p>

     {     detailBook.image && 
      (   <div>        
        <img  style={{height:"100px", width:"100px"}} 
        src={`http://localhost:1337`+ detailBook.image[0].url} 
        /> 
        <img  style={{height:"100px", width:"100px"}} 
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