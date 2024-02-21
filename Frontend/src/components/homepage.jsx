// import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { useState, useEffect } from 'react';
import axios from 'axios';

const mockBooks = [
  { title: 'Hellboy Chronicles', author: 'Author 1', subject: 'Subject 1', publishDate: '2022-01-01' },
  { title: 'Playboy Adventures', author: 'Author 2', subject: 'Subject 2', publishDate: '2022-02-01' },
  { title: 'Micks Memoirs', author: 'Author 3', subject: 'Subject 3', publishDate: '2022-03-01' },
  { title: 'Hellboy Returns', author: 'Author 1', subject: 'Subject 1', publishDate: '2022-01-01' },
  { title: 'Playboy Unleashed', author: 'Author 2', subject: 'Subject 2', publishDate: '2022-02-01' },
  { title: 'Micks Journey', author: 'Author 3', subject: 'Subject 3', publishDate: '2022-03-01' },
  { title: 'Hellboy: The Untold Story', author: 'Author 1', subject: 'Subject 1', publishDate: '2022-01-01' },
  { title: 'Playboy Mysteries', author: 'Author 2', subject: 'Subject 2', publishDate: '2022-02-01' },
  { title: 'Micks Quest', author: 'Author 3', subject: 'Subject 3', publishDate: '2022-03-01' },
  { title: 'Hellboy Revisited', author: 'Author 1', subject: 'Subject 1', publishDate: '2022-01-01' },
  { title: 'Playboy Escapades', author: 'Author 2', subject: 'Subject 2', publishDate: '2022-02-01' },
  { title: 'Micks Odyssey', author: 'Author 3', subject: 'Subject 3', publishDate: '2022-03-01' },
];


function Homepage() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    const results = mockBooks.filter(book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.publishDate.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(results);
    console.log(results);
  };



  // Function to send mockBooks data to the backend
  const sendMockBooksToBackend = () => {
    axios.post('/books', { books: mockBooks }) // Send a POST request to backend endpoint with mockBooks data in the request body
      .then(response => {
        console.log('MockBooks sent to backend:', response.data);
      })
      .catch(error => {
        console.error('Error sending mockBooks to backend:', error);
      });
  };

  // Call the function to send mockBooks data when the component mounts
  useEffect(() => {
    sendMockBooksToBackend();
  }, []);

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
            <h2 className="p-5 font-bold md:text-6xl text-3xl text-black md:mt-10 md:text-center">
              WELCOME TO BOOK-STORE
            </h2>
            <div className='md:ml-10 md:mt-10'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              <h2 className="p-2  font-bold md:text-3xl text-3xl text-White md:mt-5  md:text-center">
                FIND YOUR BOOK CHOICE
              </h2>
              <div className='md:mt-3 '>
                <input
                  type="text"
                  placeholder="Artical,Book,and More"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className='p-2 w-[50%]  border-2  text-black  ' />
                <select className='p-2 w-90  bg-gray-600 py-2 text-white border-2  ' id="searchType">
                  <option className='' value="name">Title</option>
                  <option value="category">Author</option>
                  <option value="description">Subject</option>
                  <option value="description">PublishDate</option>
                </select>
                <button className='text-black font-bold p-2 border-2 w-[25%] hover:bg-black hover:text-white bg-yellow-500 ' onClick={handleSearch}>Search</button>
              </div>
            </div>
            <div className="md:max-h-[60vh] text-black overflow-y-auto">
              {searchResults.map((result, index) => (
                <div key={index} className="p-2 border-b bg-gray-300  border-gray-300">
                  <p>{result.title}
                    <p>{result.author}</p>
                    <p>{result.subject}</p>
                    <p>{result.publishDate}</p>
                  </p>

                </div>
              ))}
            </div>
            <div className="flex  p-10">
              <p> eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
