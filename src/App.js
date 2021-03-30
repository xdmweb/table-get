
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      table1: {
        header1: "",
        header2: "",
        rows: [{
          col1: "",
          col2: ""
        }]
      },
      table2: {
        header1: "",
        header2: "",
        rows: [{
          col1: "",
          col2: ""
        }]
      },
      html: ""
    }
  }

  render() {
    const table = (<div>
      <div style={{ padding: "20px" }}>
        <div >Table 1</div>
        <table style={{ border: "1px solid gray", padding: "20px" }}>
          <thead>
            <tr>
              <th><input type="text" value={this.state.table1.header1} onChange={(e) => {
                this.setState(state => ({
                  table1: { ...state.table1, header1: e.target.value }
                }));
              }}></input></th>
              <th><input type="text" value={this.state.table1.header2} onChange={(e) => {
                this.setState(state => ({
                  table1: { ...state.table1, header2: e.target.value }
                }));
              }}></input></th>
            </tr>
          </thead>
          <tbody>
            {this.state.table1.rows.map((row, index) => (
              <tr key={index}>
                <td><input type="text" value={row.col1} onChange={(e) => {
                  this.setState(state => {
                    let makeNewRow = false;
                    if (index === this.state.table1.rows.length - 1) {
                      makeNewRow = true;
                    }
                    let table = { ...state.table1 };
                    table.rows[index].col1 = e.target.value;
                    if (makeNewRow) {
                      table.rows.push({
                        col1: "",
                        col2: ""
                      });
                      console.log("added row");
                    }
                    return ({
                      table1: table
                    });
                  });
                }}></input></td>
                <td><input type="text" value={row.col2} onChange={(e) => {
                  this.setState(state => {
                    let makeNewRow = false;
                    if (index === this.state.table1.rows.length - 1) {
                      makeNewRow = true;
                    }
                    let table = { ...state.table1 };
                    table.rows[index].col2 = e.target.value;
                    if (makeNewRow) {
                      table.rows.push({
                        col1: "",
                        col2: ""
                      });
                      console.log("added row");
                    }
                    return ({
                      table1: table
                    });
                  });
                }}></input></td>
                <td><button onClick={e => {
                  let table = { ...this.state.table1 };
                  if (table.rows.length === 1) return;
                  table.rows.splice(index, 1);
                  this.setState({
                    table1: table
                  });
                }}>X</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ paddingTop: "30px" }}>Table 2</div>
        <table style={{ border: "1px solid gray", padding: "20px" }} >
          <thead>
            <tr>
              <th><input type="text" value={this.state.table2.header1} onChange={(e) => {
                this.setState(state => ({
                  table2: { ...state.table2, header1: e.target.value }
                }));
              }}></input></th>
              <th><input type="text" value={this.state.table2.header2} onChange={(e) => {
                this.setState(state => ({
                  table2: { ...state.table2, header2: e.target.value }
                }));
              }}></input></th>
            </tr>
          </thead>
          <tbody>
            {this.state.table2.rows.map((row, index) => (
              <tr key={index}>
                <td><input type="text" value={row.col1} onChange={(e) => {
                  this.setState(state => {
                    let makeNewRow = false;
                    if (index === this.state.table2.rows.length - 1) {
                      makeNewRow = true;
                    }
                    let table = { ...state.table2 };
                    table.rows[index].col1 = e.target.value;
                    if (makeNewRow) {
                      table.rows.push({
                        col1: "",
                        col2: ""
                      });
                      console.log("added row");
                    }
                    return ({
                      table2: table
                    });
                  });
                }}></input></td>
                <td><input type="text" value={row.col2} onChange={(e) => {
                  this.setState(state => {
                    let makeNewRow = false;
                    if (index === this.state.table2.rows.length - 1) {
                      makeNewRow = true;
                    }
                    let table = { ...state.table2 };
                    table.rows[index].col2 = e.target.value;
                    if (makeNewRow) {
                      table.rows.push({
                        col1: "",
                        col2: ""
                      });
                      console.log("added row");
                    }
                    return ({
                      table2: table
                    });
                  });
                }}></input></td>
                <td><button onClick={e => {
                  let table = { ...this.state.table2 };
                  if (table.rows.length === 1) return;
                  table.rows.splice(index, 1);
                  this.setState({
                    table2: table
                  });
                }}>X</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ padding: "20px" }}>
        <button onClick={e => this.setState({
          html: this.generateTable()
        })}>Generate code</button>
      </div>
      <div style={{ padding: "20px" }}>
        <textarea value={this.state.html} rows={"30"} cols={100} readOnly={true}>
        </textarea>
      </div>
      {/* <iframe src={new Blob(['hello'], {type : 'text/html'})} title={"dummy"}></iframe> */}
    </div>)
    return table;
  }

  generateTable = () => {
    let tr1 = "";
    this.state.table1.rows.forEach((row, index) => {
      if (row.col1 !== "" && row.col2 !== "")
        tr1 += "<tr>\n<td scope='row'>" + (index + 1) + "</td>\n<td>" + row.col1 + "</td>\n<td>" + row.col2 + "</td>\n</tr>";
    });
    let tr2 = "";
    this.state.table2.rows.forEach((row, index) => {
      if (row.col1 !== "" && row.col2 !== "")
        tr2 += "<tr>\n<td scope='row'>" + (index + 1) + "</td>\n<td>" + row.col1 + "</td>\n<td>" + row.col2 + "</td>\n</tr>";
    });
    return `<table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">${this.state.table1.header1}</th>
        <th scope="col">${this.state.table1.header2}</th>
      </tr>
    </thead>
    <tbody>
      ${tr1}
    </tbody>
  </table>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">${this.state.table2.header1}</th>
        <th scope="col">${this.state.table2.header2}</th>
      </tr>
    </thead>
    <tbody>
      ${tr2}
    </tbody>
  </table>`;
  }
}

export default App;
