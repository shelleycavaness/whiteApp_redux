import React from 'react';
import { Link } from 'react-router-dom';
import DetailPage from '../pages/detail'

const BookItem = ({book}) => {
  const date = new Date(book.created_at);
  // console.log('book.image777777777', book.image[0].url)
  const image = `http://localhost:1337` + book.image[0].url
  //in the click we recuperate the book object to be able to navigate to the new page 
  const getId = (params) => {
    return book.id
  }

  return(
  
    <li className="" key={book.id}>
      <div className="p-4">
          <span className="font-bold uppercases f4">{book.title}</span>
          <p className="lh-4">{book.author}</p>
          <p className="lh-4">{book.description}</p>

          <span className="text-blue font-bold">{`Date d'ajout : ${date.toLocaleDateString('fr-FR')}`}</span>
          <p className="text-blue font-bold">{`publication date : ${book.publication}`}</p>
          <Link to={`/books/${book.id}`} >   {/*this uses id of the book object as the url*/}
            <img  style={{height:"100px", width:"100px"}} src={image} /> 
          </Link>
          
      </div>
      <hr className="m-0" />
    </li>                            
  )
               

}
 export default BookItem;
