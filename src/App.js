import React, {Component, Fragment} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {nodeClicked: 'Nothing'}
        this.onClickOfNode = this.onClickOfNode.bind(this);
    }

    onClickOfNode(nodeClicked) {
        console.log(nodeClicked)
        this.setState({nodeClicked})
    }

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
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Node Clicked: {this.state.nodeClicked}</h1>
                </header>
                <div style={nodeStyling}>
                    <Node data={rootData} onClick={this.onClickOfNode}></Node>
                </div>
            </div>
        );
    }
}


function Node(props) {

    const onChildClick = (childName) => props.onClick(`${props.data.name} > ${childName}`)

    const nodeData = (props.data.nodes ? props.data.nodes : []);
    const nodes = nodeData.map((n, i) => <Node key={i} data={n} onClick={onChildClick}/>);


    return (<Fragment>
        <label onClick={() => props.onClick(props.data.name)}>{props.data.name}</label>
        <ul>
            {nodes.map(n => <li>{n}</li>)}
        </ul>
    </Fragment>);
}


export default App;
