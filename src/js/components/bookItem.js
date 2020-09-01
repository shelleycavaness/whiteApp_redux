import React from 'react';

const BookItem = (book) => {

  return(
  
    <li className="" key={book.id}>
      <div className="p-4">
          <span className="font-bold uppercases f4">{book.title}</span>
          <p className="lh-4">{book.author}</p>
          <p className="lh-4">{book.description}</p>
          <span className="text-blue font-bold">{`Date d'ajout : ${date.toLocaleDateString('fr-FR')}`}</span>
          <p className="text-blue font-bold">{`publication date : ${book.publication}`}</p>
      </div>
      <hr className="m-0" />
    </li>                            
  )
               

}
 export default BookItem;
