const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {


  constructor() {
    this.root1 = null;
  }


  root() {
    return this.root1;
  }

  add(data) {
    this.root1 = addNewNode(this.root1, data);

    function addNewNode(node, data) {
      if(!node) {
        return new Node(data);
      }

      if(node.data === data) {
        return node;
      }

      if(data < node.data) {
        node.left = addNewNode(node.left, data);
      } else {
        node.right = addNewNode(node.right, data)
      }

      return node;

    }
    

  

    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  has(data) {

    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return searchNode(this.root1, data);

    function searchNode(node, data) {
     
      if(!node) {
        return false;
      }
      
      if(node.data === data) {
       return true;
      }
   
      
      if(data < node.data) {
        return searchNode(node.left, data);
      } else {
        return searchNode(node.right, data);
      }

      
    }
   }
 

  find( data ) {
    return  getNode(this.root1, data);

    function getNode(node, data) {
      if(!node) {
        return null;
      }

      if(node.data === data) {
        console.log(node.data);
        return node;
      }

      if(node.data > data) {
        return getNode(node.left, data);
      } else{
        return getNode(node.right, data);
      }
   }
  }

  remove( data ) {
    this.root1 = removeNode(this.root1, data);

    function removeNode(node, data) {
      if(!node) {
        return null;
      }

      if(node.data > data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if(node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if(!node.left && !node.right) {
          return null;
        }

        if(!node.left) {
          node = node.right;
          return node;
        }

        if(!node.right) {
          node = node.left;
          return node;
        }

        let minRight = node.right;
        while(minRight.left) {
          minRight = minRight.left;
        }

        node.data = minRight.data;

        node.right = removeNode(node.right, minRight.data);

        return node;


      }


    } 
  }

  min() {
    return minNode(this.root1);
    
    function minNode(node) {
      let min = null;
      if(!node) {
        return min;
      }
      if(node.data && !node.left ) {
       return node.data;
      } else {
        return minNode(node.left);
      }
          
   }
   
  }

  max() {
    return maxNode(this.root1);
    
    function maxNode(node) {
      let max = null;
      if(!node) {
        return max;
      }
      if(node.data && !node.right ) {
       return node.data;
      } else {
        return maxNode(node.right);
      }
          
   }
  }

}