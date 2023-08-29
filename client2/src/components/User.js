import React, { useState, useEffect } from 'react';

function User() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [ageFilter, setAgeFilter] = useState('');
  const [countryFilter, setCountryFilter] = useState('');

  useEffect(() => {
    // Fetch user data from the API
    fetch('https://randomuser.me/api/?results=10')
      .then(response => response.json())
      .then(data => {
        setUsers(data.results);
        setFilteredUsers(data.results);
      });
  }, []);

  useEffect(() => {
    // Apply filters when ageFilter or countryFilter changes
    let filteredResults = users;

    if (ageFilter) {
      const [minAge, maxAge] = ageFilter.split('-');
      filteredResults = filteredResults.filter(user => user.dob.age >= minAge && user.dob.age <= maxAge);
    }

    if (countryFilter) {
      filteredResults = filteredResults.filter(user => user.location.country.toLowerCase() === countryFilter.toLowerCase());
    }

    setFilteredUsers(filteredResults);
  }, [ageFilter, countryFilter, users]);

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">User Profiles</h1>
      <div className="flex justify-center mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={() => setShowFilterDropdown(!showFilterDropdown)}
        >
          Filters
        </button>
        {showFilterDropdown && (
          <div className="absolute bg-white mt-2 p-2 rounded border shadow-lg">
            <div className="mb-2">
              <label className="mr-2">Age Range:</label>
              <select
                className="border rounded p-1"
                value={ageFilter}
                onChange={e => setAgeFilter(e.target.value)}
              >
                <option value="">All</option>
                <option value="20-30">20-30</option>
                <option value="30-40">30-40</option>
                {/* Add more age ranges */}
              </select>
            </div>
            <div>
              <label className="mr-2">Country:</label>
              <input
                type="text"
                className="border rounded p-1"
                value={countryFilter}
                onChange={e => setCountryFilter(e.target.value)}
              />
            </div>
            <button
              className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
              onClick={() => {
                setAgeFilter('');
                setCountryFilter('');
              }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
      {filteredUsers.map((user, index) => (
        <div key={index} className="border p-4 mb-4 flex items-center">
          <img src={user.picture.thumbnail} alt={`Thumbnail of ${user.name.first}`} className="w-16 h-16 rounded-full mr-4" />
          <div>
            <h2 className="text-xl font-semibold mb-2">
            {`${user.name.first} ${user.name.last}`} </h2>
            <p className="mb-1">Age: {user.dob.age}</p>
            <p className="mb-1">Country: {user.location.country}</p>
          </div>
          <hr className="my-2" />
        </div>
      ))}
    </div>
  );
}

export default User;
