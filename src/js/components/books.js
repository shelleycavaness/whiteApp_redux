import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector} from "react-redux"; 
import { getBooks } from '../store/books'
import BookItem from './bookItem';
// import BookItem from './bookItem';

const Books = (props) => {
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

    return (
        <section>
            <header>
                <select value={currentFilter} onChange={handleFilter}>
                    <option value={''}>Tous</option>
                    <option value={'?_sort=title:ASC'}>Titles alphabetical</option>
                    <option value={'?_sort=publication:ASC'}>Publication date</option>
                    <option value={'?borrowed=false'} >Livre(s) disponible(s)</option>
                    <option value={'?borrowed=true'} >Books checked-out</option>
                </select>
                <select value={currentFilter} onChange={handleFilter}>
                    <option value={''}>all genres</option>
                    <option value={'?genre=autobiography'}>autobiography</option>
                    <option value={'?genre=fiction'}>fiction</option>
                    <option value={'?genre=computer science'} > computer science</option>
                   
                </select>

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
}

export default Books

 //     {/* <BookItem book={book} /> */}