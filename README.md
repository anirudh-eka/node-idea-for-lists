# Node Idea for making lists within lists

All the code is in App.js. Basically data is expected in a structure like this:
```javascript
{
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
```

And it nests lists inside lists. To be clear the data representation of a single node is
```javascript
{ name: 'node name', nodes: ... }

```
Basically it just has a name and optionally a list of child nodes.

I've also implemented a simple onClick callback implementation that basically tells a parent node if a child has been 
clicked. The parent will then tell it's parent all the way to the root node. If you run the app (`$ yarn start`) and 
click on the node it will print the name and it's ancestors on top. 

I suppose you can call this a recursive react component if that is a phrase?   