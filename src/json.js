import React, { useState } from 'react';

function Json() {
  const [items, setItems] = useState([]);

  const fetchItem = async (val) => {
    try {
      const url = "https://jsonplaceholder.typicode.com";
      const reqUrl = `${url}${val}`;
      const response = await fetch(reqUrl);
      
      if (!response.ok) {
        throw Error("Data not received");
      }

      const listItems = await response.json();
      setItems(listItems);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <button onClick={() => fetchItem("/comments")}>commands</button>
      <button onClick={() => fetchItem("/todos")}>todo</button>
      <button onClick={() => fetchItem("/posts")}>posts</button>

      <table>
        <thead>
          <tr>
            {Object.keys(items[0] || {}).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              {Object.values(item).map((value, index) => (
                <td key={index}>{JSON.stringify(value)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Json;
