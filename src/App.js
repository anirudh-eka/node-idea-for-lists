import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
      let rootData = {
          name: 'Living things', nodes: [
              {
                  name: 'plants', nodes: [
                      {
                          name: 'banyan tree'
                      },
                      {
                          name: 'redwood tree'
                      }
                  ]
              },
              {
                  name: 'animals', nodes: [
                      {
                          name: 'Tiger', nodes: [
                              {
                                  name: 'Bengal Tiger'
                              },
                              {
                                  name: 'Siberian Tiger'
                              }
                          ]
                      }
                  ]
              },
          ]
      };

      const nodeStyling = {
          margin: 'auto',
          width: '400px',
          paddingTop: '80px',
          textAlign: 'left'

      }

      return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">The Node Idea</h1>
        </header>
          <div style={nodeStyling}>
              <Node data={rootData}></Node>
          </div>
      </div>
    );
  }
}


function Node(props) {
    const nodeData = (props.data.nodes ? props.data.nodes : []);

    const nodes = nodeData.map((n, i) => <Node key={i} data={n}/>);
    return (<Fragment>
            {props.data.name}
            <ul>
                {nodes.map(n => <li>{n}</li>)}
            </ul>
    </Fragment>);
}


export default App;
