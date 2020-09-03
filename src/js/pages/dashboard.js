
import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector} from "react-redux"; 
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

  const handleFilter = (event) => {
      dispatch(getBooks(event.target.value));
      setCurrentFilter(event.target.value);
  }
  const filterAuto =(e) =>{
     dispatch(getBooks('?genre=autobiography'))
  }
    return (
      <div>
      <section>
         <header>

         <select value={currentFilter} onChange={handleFilter}>
                    <option value={''}>all genres</option>
                    <option value={'?genre=autobiography'}>autobiography</option>
                    <option value={'?genre=fiction'}>fiction</option>
                    <option value={'?genre=computer science'} > computer science</option>
                   
        </select>
   
      <button onClick={ filterAuto}>autobiography</button>
     
   
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
    )
        
      </div>
    )
}
export default Dashboard;