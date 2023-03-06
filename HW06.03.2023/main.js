//  1 уровень сложности: Реализовать DFS inorder, preorder and postorder
// function inorder(tree) {
// }
// function preorder(tree) {
// }
// function postorder(tree) {
// }

//Inorder
function inorder(node) {
  if (node != null) {
    inorder(node.left);
    console.log(node.data);
    inorder(node.right);
  }
}


//Preorder

function preorder(node) {
  if (node != null) {
    console.log(node.data);
    preorder(node.left);
    preorder(node.right);
  }
}


//Postorder

function postorder(node) {
  if (node != null) {
    postorder(node.left);
    postorder(node.right);
    console.log(node.data);
  }
}