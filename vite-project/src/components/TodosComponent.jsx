import React from "react";
const NewTodoList = (props) => {
  let val = props.data;
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ALL TASKS</th>
          </tr>
        </thead>
        <tbody>
          {val.map((e) => {
            return (
              <tr>
                <td>{e}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default NewTodoList;
