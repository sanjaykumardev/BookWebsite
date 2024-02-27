import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import axios from 'axios';

const mockBooks = [
  { title: 'Hellboy Chronicles', author: 'Author 1', subject: 'Subject 1', publishdate: '2017-01-01' },
  { title: 'Playboy Adventures', author: 'Author 2', subject: 'Subject 2', publishdate: '2018-02-01' },
  { title: 'Micks Memoirs', author: 'Author 3', subject: 'Subject 3', publishdate: '2022-03-01' },
  { title: 'Hellboy Returns', author: 'Author 4', subject: 'Subject 1', publishdate: '2022-01-01' },
  { title: 'Playboy Unleashed', author: 'Author 5', subject: 'Subject 2', publishdate: '2023-02-01' },
  { title: 'Micks Journey', author: 'Author 6', subject: 'Subject 3', publishdate: '2022-03-01' },
  { title: 'Hellboy: The Untold Story', author: 'Author 7', subject: 'Subject 1', publishdate: '2022-01-01' },
  { title: 'Playboy Mysteries', author: 'Author 8', subject: 'Subject 2', publishdate: '2025-02-01' },
  { title: 'Micks Quest', author: 'Author 9', subject: 'Subject 3', publishdate: '2022-03-01' },
  { title: 'Hellboy Revisited', author: 'Author 10', subject: 'Subject 1', publishdate: '2022-07-11' },
  { title: 'Playboy Escapades', author: 'Author 11', subject: 'Subject 2', publishdate: '2015-02-01' },
  { title: 'Micks Odyssey', author: 'Author 12', subject: 'Subject 3', publishdate: '2024-03-01' },
  { title: 'Hellboy Chronicles', author: 'Author 1', subject: 'Subject 1', publishdate: '2017-01-01' },
  { title: 'Playboy Adventures', author: 'Author 2', subject: 'Subject 2', publishdate: '2018-02-01' },
  { title: 'Micks Memoirs', author: 'Author 3', subject: 'Subject 3', publishdate: '2022-03-01' },
  { title: 'Hellboy Returns', author: 'Author 4', subject: 'Subject 1', publishdate: '2022-01-01' },
  { title: 'Playboy Unleashed', author: 'Author 5', subject: 'Subject 2', publishdate: '2023-02-01' },
  { title: 'Micks Journey', author: 'Author 6', subject: 'Subject 3', publishdate: '2022-03-01' },
  { title: 'Hellboy: The Untold Story', author: 'Author 7', subject: 'Subject 1', publishdate: '2022-01-01' },
  { title: 'Playboy Mysteries', author: 'Author 8', subject: 'Subject 2', publishdate: '2025-02-01' },
  { title: 'Micks Quest', author: 'Author 9', subject: 'Subject 3', publishdate: '2022-03-01' },
  { title: 'Hellboy Revisited', author: 'Author 10', subject: 'Subject 1', publishdate: '2022-07-11' },
  { title: 'Playboy Escapades', author: 'Author 11', subject: 'Subject 2', publishdate: '2015-02-01' },
  { title: 'Micks Odyssey', author: 'Author 12', subject: 'Subject 3', publishdate: '2024-03-01' },
  { title: 'Hellboy Chronicles', author: 'Author 1', subject: 'Subject 1', publishdate: '2017-01-01' },
  { title: 'Playboy Adventures', author: 'Author 2', subject: 'Subject 2', publishdate: '2018-02-01' },
  { title: 'Micks Memoirs', author: 'Author 3', subject: 'Subject 3', publishdate: '2022-03-01' },
  { title: 'Hellboy Returns', author: 'Author 4', subject: 'Subject 1', publishdate: '2022-01-01' },
  { title: 'Playboy Unleashed', author: 'Author 5', subject: 'Subject 2', publishdate: '2023-02-01' },
  { title: 'Micks Journey', author: 'Author 6', subject: 'Subject 3', publishdate: '2022-03-01' },
  { title: 'Hellboy: The Untold Story', author: 'Author 7', subject: 'Subject 1', publishdate: '2022-01-01' },
  { title: 'Playboy Mysteries', author: 'Author 8', subject: 'Subject 2', publishdate: '2025-02-01' },
  { title: 'Micks Quest', author: 'Author 9', subject: 'Subject 3', publishdate: '2022-03-01' },
  { title: 'Hellboy Revisited', author: 'Author 10', subject: 'Subject 1', publishdate: '2022-07-11' },
  { title: 'Playboy Escapades', author: 'Author 11', subject: 'Subject 2', publishdate: '2015-02-01' },
  { title: 'Micks Odyssey', author: 'Author 12', subject: 'Subject 3', publishdate: '2024-03-01' },
  { title: 'Hellboy Chronicles', author: 'Author 1', subject: 'Subject 1', publishdate: '2017-01-01' },
  { title: 'Playboy Adventures', author: 'Author 2', subject: 'Subject 2', publishdate: '2018-02-01' },
  { title: 'Micks Memoirs', author: 'Author 3', subject: 'Subject 3', publishdate: '2022-03-01' },
  { title: 'Hellboy Returns', author: 'Author 4', subject: 'Subject 1', publishdate: '2022-01-01' },
  { title: 'Playboy Unleashed', author: 'Author 5', subject: 'Subject 2', publishdate: '2023-02-01' },
  { title: 'Micks Journey', author: 'Author 6', subject: 'Subject 3', publishdate: '2022-03-01' },
  { title: 'Hellboy: The Untold Story', author: 'Author 7', subject: 'Subject 1', publishdate: '2022-01-01' },
  { title: 'Playboy Mysteries', author: 'Author 8', subject: 'Subject 2', publishdate: '2025-02-01' },
  { title: 'Micks Quest', author: 'Author 9', subject: 'Subject 3', publishdate: '2022-03-01' },
  { title: 'Hellboy Revisited', author: 'Author 10', subject: 'Subject 1', publishdate: '2022-07-11' },
  { title: 'Playboy Escapades', author: 'Author 11', subject: 'Subject 2', publishdate: '2015-02-01' },
  { title: 'Micks Odyssey', author: 'Author 12', subject: 'Subject 3', publishdate: '2024-03-01' },
  { title: 'Hellboy Chronicles', author: 'Author 1', subject: 'Subject 1', publishdate: '2017-01-01' },
  { title: 'Playboy Adventures', author: 'Author 2', subject: 'Subject 2', publishdate: '2018-02-01' },
  { title: 'Micks Memoirs', author: 'Author 3', subject: 'Subject 3', publishdate: '2022-03-01' },
  { title: 'Hellboy Returns', author: 'Author 4', subject: 'Subject 1', publishdate: '2022-01-01' },
  { title: 'Playboy Unleashed', author: 'Author 5', subject: 'Subject 2', publishdate: '2023-02-01' },
  { title: 'Micks Journey', author: 'Author 6', subject: 'Subject 3', publishdate: '2022-03-01' },
  { title: 'Hellboy: The Untold Story', author: 'Author 7', subject: 'Subject 1', publishdate: '2022-01-01' },
  { title: 'Playboy Mysteries', author: 'Author 8', subject: 'Subject 2', publishdate: '2025-02-01' },
  { title: 'Micks Quest', author: 'Author 9', subject: 'Subject 3', publishdate: '2022-03-01' },
  { title: 'Hellboy Revisited', author: 'Author 10', subject: 'Subject 1', publishdate: '2022-07-11' },
  { title: 'Playboy Escapades', author: 'Author 11', subject: 'Subject 2', publishdate: '2015-02-01' },
  { title: 'Micks Odyssey', author: 'Author 12', subject: 'Subject 3', publishdate: '2024-03-01' },
  { title: 'Hellboy Chronicles', author: 'Author 1', subject: 'Subject 1', publishdate: '2017-01-01' },
  { title: 'Playboy Adventures', author: 'Author 2', subject: 'Subject 2', publishdate: '2018-02-01' },
  { title: 'Micks Memoirs', author: 'Author 3', subject: 'Subject 3', publishdate: '2022-03-01' },
  { title: 'Hellboy Returns', author: 'Author 4', subject: 'Subject 1', publishdate: '2022-01-01' },
  { title: 'Playboy Unleashed', author: 'Author 5', subject: 'Subject 2', publishdate: '2023-02-01' },
  { title: 'Micks Journey', author: 'Author 6', subject: 'Subject 3', publishdate: '2022-03-01' },
  { title: 'Hellboy: The Untold Story', author: 'Author 7', subject: 'Subject 1', publishdate: '2022-01-01' },
  { title: 'Playboy Mysteries', author: 'Author 8', subject: 'Subject 2', publishdate: '2025-02-01' },
  { title: 'Micks Quest', author: 'Author 9', subject: 'Subject 3', publishdate: '2022-03-01' },
  { title: 'Hellboy Revisited', author: 'Author 10', subject: 'Subject 1', publishdate: '2022-07-11' },
  { title: 'Playboy Escapades', author: 'Author 11', subject: 'Subject 2', publishdate: '2015-02-01' },
  { title: 'Micks Odyssey', author: 'Author 12', subject: 'Subject 3', publishdate: '2024-03-01' },
];

function Homepage() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    const results = mockBooks.filter(book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.publishdate.toLowerCase().includes(searchTerm.toLowerCase())
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
            <h2 className=" font-bold md:text-6xl text-3xl text-white md:mt-10 md:text-center">
              WELCOME TO
            </h2>
            <h2 className=" md:ml-40 font-bold md:text-6xl text-3xl text-white md:mt-3 md:text-center" >
              BOOK-STORE
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
                  className='p-2 w-[50%]    text-black  ' />
                <select className='p-2 w-90  bg-gray-600 py-2 text-white border-2  ' id="searchType">
                  <option className='' value="title">Title</option>
                  <option value="author">Author</option>
                  <option value="subject">Subject</option>
                  <option value="publishdate">PublishDate</option>
                </select>
                <button className='text-black font-bold p-2 border-2 w-[25%] hover:bg-black hover:text-white bg-yellow-500 ' onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:max-h-[60vh] p-40 text-black ">
        <h3 className='text-5xl font-bold mb-10 text-center'> List Of Book </h3>
        <table className="w-full  border border-green-800  overflow-y-auto">
          <thead>
            <tr className="bg-gray-300">
              <th className="border border-black px-4 py-2">Title</th>
              <th className="border border-black px-4 py-2">Author</th>
              <th className="border border-black px-4 py-2">Subject</th>
              <th className="border border-black px-4 py-2">Publish Date</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.map((result, index) => (
              <tr key={index} className="bg-gray-200">
                <td className="border border-black px-4 py-2">{result.title}</td>
                <td className="border border-black px-4 py-2">{result.author}</td>
                <td className="border border-black px-4 py-2">{result.subject}</td>
                <td className="border border-black px-4 py-2">{result.publishdate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  );
}

export default Homepage;
