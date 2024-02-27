/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';

function Homepage() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(false);
  const [showTable, setShowTable] = useState(false);

  const fetchBooks = () => {
    if (searchTerm.trim() === '') {
      setError(true);
      setSearchResults([]);
      setShowTable(false);
    } else {
      setError(false);
      axios.get('http://localhost:3000/books')
        .then(response => {
          const filteredResults = response.data.filter(book =>
            book.title.toLowerCase().includes(searchTerm.toLowerCase())
          );
          setSearchResults(filteredResults);
          setShowTable(true);
          console.log('Books fetched from backend:', filteredResults);
        })
        .catch(error => {
          console.error('Error fetching books from backend:', error);
          setSearchResults([]);
          setError(true);
          setShowTable(false);
        });
    }
  };

  const errorMessage = () => {
    if (searchResults.length === 0) {
      return <h2 className='text-5xl mt-20 text-center'>Result Not Found</h2>;
    } else {
      return null;
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center mt-10 items-center h-screen">
        <div className="w-[90%] h-[90vh] z-index md:flex bg-yellow-300 text-white">
          <div className=''>
            <div className="flex w-[130%]">
              <img className="md:h-[90vh] flex-shrink h-90 shadow-lg box-sizing object-full" src="https://images.unsplash.com/photo-1591951425328-48c1fe7179cd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Book image" />
            </div>
          </div>
          <div className="md:w-1/2 md:ml-60 ">
            <h2 className=" font-bold md:text-6xl text-3xl text-white md:mt-10 md:text-center">
              WELCOME TO
            </h2>
            <h2 className=" md:ml-40 font-bold md:text-6xl text-3xl text-white md:mt-3 md:text-center" >
              BOOK-STORE
            </h2>
            <div className='md:ml-10 md:mt-10'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              <h2 className="p-2 font-bold md:text-3xl text-3xl text-White md:mt-5 md:text-center">
                FIND YOUR BOOK CHOICE
              </h2>
              <div className='md:mt-3'>
                <input
                  type="text"
                  placeholder="Article, Book, and More"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className='p-2 w-[50%] text-black'
                />
                <select className='p-2 w-90 bg-gray-600 py-2 text-white border-2' id="searchType">
                  <option value="title">Title</option>
                  <option value="author">Author</option>
                  <option value="subject">Subject</option>
                  <option value="publishdate">PublishDate</option>
                </select>
                <button className='text-black font-bold p-2 border-2 w-[25%] hover:bg-black hover:text-white bg-yellow-500' onClick={fetchBooks}>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showTable && (
        <div className='bg-yellow-300 m-20 md:h-[100%] shadow-lg'>
          {errorMessage()}
          <div className="p-40 text-black overflow-x-auto">
            <h3 className='text-5xl font-bold mb-10 text-center'>List Of Books</h3>
            <table className="w-full border border-green-800">
              <thead>
                <tr className="bg-white text-xl">
                  <th className="border border-black px-4 py-2">Title</th>
                  <th className="border border-black px-4 py-2">Author</th>
                  <th className="border border-black px-4 py-2">Subject</th>
                  <th className="border border-black px-4 py-2">Publish Date</th>
                </tr>
              </thead>
              <tbody>
                {searchResults.map((result, i) => (
                  <tr key={i} className="bg-white">
                    <td className="border border-black px-4 font-semi-bold py-2">{result.title}</td>
                    <td className="border border-black px-4 font-semi-bold py-2">{result.author}</td>
                    <td className="border border-black px-4 font-semi-bold py-2">{result.subject}</td>
                    <td className="border border-black px-4 font-semi-bold py-2">{result.publishdate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default Homepage;
