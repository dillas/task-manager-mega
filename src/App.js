import React from 'react';
import * as todoApi from './api/todo-api';

function App() {




  async function f() {
    await todoApi.getTodos();
    // todoApi.deleteTodo(633);
    await todoApi.createTodo('qwerty');
    // todoApi.updateTodo(630 ,'ytrewq1');
    await todoApi.getTodos();
  }

  f();

  return (
    
    {/*<div className="App">
      <div className="container">
        <header>
          Список задач
          <button>Добавить</button>
        </header>
        <div className="main">
          <table>
            <tbody>
              <tr>
                <td>617</td>
                <td>111</td>
                <td>
                  <button>|</button>
                  <button>Х</button>
                </td>
              </tr>
              <tr>
                <td>620</td>
                <td>222</td>
                <td>
                  <button>|</button>
                  <button>Х</button>
                </td>
              </tr>
              <tr>
                <td>624</td>
                <td>333</td>
                <td>
                  <button>|</button>
                  <button>Х</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <footer>© 2019</footer>
      </div>
    </div>*/}
  );
}

export default App;
