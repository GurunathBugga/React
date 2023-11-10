import React, { useState } from 'react';

const Table2 = () => {
  const data = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Carol', age: 35 },
  ];

  const [search, setSearch] = useState('');

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };


  const filteredData = data.filter((searchValue) => {
    const itemSearched = search.toLowerCase(); 


    return (
      searchValue.name.toLowerCase().includes(itemSearched) ||
      searchValue.age.toString().includes(itemSearched)  ||
      searchValue.id.toString().includes(itemSearched)
    );
  });

  return (
    <div>
      
      <input type="text" value={search} onChange={handleInputChange} />

      <h1>{filteredData.length}</h1>

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>id</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table2;
