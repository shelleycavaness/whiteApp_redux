
import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector} from "react-redux"; 
import { Link } from 'react-router-dom';

import { getBooks } from '../store/books'
import BookItem from '../components/bookItem';
const Dashboard = () => {
  const dispatch = useDispatch();
  const books = useSelector(state => state.books.collection)
  const booksAreLoading = useSelector(state => state.books.isLoading)
  const [currentFilter, setCurrentFilter] = useState('');


  useEffect(() => {
    dispatch(getBooks());
  }, [])

  if (booksAreLoading) return <span className="f1 font-bold text-green">Fetching books...</span>


  const filterAll =(e) =>{
     dispatch(getBooks(''))
  }
  const filterFiction =(e) =>{
    dispatch(getBooks('?genre=fiction'))
 }
  const filterAuto =(e) =>{
    dispatch(getBooks('?genre=autobiography'))
  }
  const filterComputer =(e) =>{
  dispatch(getBooks('?genre=computer science'))
  }

  return (
   <div style={{backgroundColor:"gainsboro"}}>
          <div className="links">
          <Link to={`/`} className="link">Profile</Link>
          <Link to={`/home/comments`} className="link">Comments</Link>
          <Link to={`/home/contact`} className="link">Contact</Link>
        </div>
   
    <section>

     <header>
        <button onClick={filterAll}>all</button>
        <button onClick={filterFiction}>fiction</button>
        <button onClick={filterAuto}>autobiography</button>
        <button onClick={filterComputer}>computer science</button>
     </header>
       <ul className="flex flex-col">
        {
          books && books.length > 0 ? books.map(book => {
           return (
              <BookItem book={book} />
             )
           }) : <span>No books</span>
        }
        </ul>
    </section>
   </div>
  )
}
export default Dashboard;