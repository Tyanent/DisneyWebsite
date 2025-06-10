// function ticketMenuItem(){

// // document.querySelector('.offers').style.display ='block';  
// document.querySelector('.menuitem').style.backgroundColor = 'white';    
// document.querySelector('.menuitem').style.color = 'rgb(156, 156, 255)';  
// document.querySelector('.menuitem').style.borderStyle = 'solid'; 
// document.querySelector('.menuitem').style.borderWidth = '2px'; 
// document.querySelector('.menuitem').style.borderColor = 'rgb(156, 156, 255);'; 
// document.querySelector('.menuitem').style.padding = '8px'; 
// document.querySelector('.menuitem').style.borderColor = 'rgb(156, 156, 255);'; 
// document.querySelector('.menuitem').style.borderBottomColor  = 'white';
// document.querySelector('.tab').setAttr
// }

function init(){
  // console.log('initing order')
ticketMenuItem();
addItem();
undo();
}
function ticketMenuItem() {
    const offers = document.querySelector('.offers');
    const ticketMenuItem = document.querySelector('.menuitem');
  
    offers.style.display = 'flex';  
    ticketMenuItem.style.backgroundColor = 'white';    
    ticketMenuItem.style.color = 'rgb(156, 156, 255)';  
    ticketMenuItem.style.borderStyle = 'solid'; 
    ticketMenuItem.style.borderWidth = '2px'; 
    ticketMenuItem.style.borderColor = 'rgb(156, 156, 255)'; 
    ticketMenuItem.style.padding = '8px'; 
    ticketMenuItem.style.borderBottomColor = 'white';
  
    const allMenuItems = document.querySelectorAll('.menuitem');
    allMenuItems.forEach(item => {
      item.onmouseover = function() {
        offers.style.display = 'none';
        ticketMenuItem.style.backgroundColor = '';
        ticketMenuItem.style.color = '';  
        ticketMenuItem.style.borderStyle = ''; 
        ticketMenuItem.style.borderWidth = ''; 
        ticketMenuItem.style.borderColor = ''; 
        ticketMenuItem.style.padding = ''; 
        ticketMenuItem.style.borderBottomColor = '';
      };
    });
  
    ticketMenuItem.onmouseover = function() {
      offers.style.display = 'flex';
      ticketMenuItem.style.backgroundColor = 'white';    
      ticketMenuItem.style.color = 'rgb(156, 156, 255)';  
      ticketMenuItem.style.borderStyle = 'solid'; 
      ticketMenuItem.style.borderWidth = '2px'; 
      ticketMenuItem.style.borderColor = 'rgb(156, 156, 255)'; 
      ticketMenuItem.style.padding = '8px'; 
      ticketMenuItem.style.borderBottomColor = 'white';
    };
  }

  function addItem(){
    var addBtn = document.querySelectorAll('.addbtn')
    var label = document.querySelectorAll('.input > label')
    var quantity = document.querySelectorAll('.input > input[type=number]')
    for (let i = 0; i < addBtn.length; i++){
      addBtn[i].addEventListener('click',(function (i) {
        return function () {
          addRow(label[i].innerText, quantity[i].value);
        }
      })(i))
    }
  }

  function addRow(label, quantity){
    var parentNode = document.getElementById('orderTableBody');
    var tdLabel = document.createElement('td');
    tdLabel.innerText = label;
    var tdQuant = document.createElement('td');
    tdQuant.innerText = quantity;
    var trNew = document.createElement('tr');
    trNew.appendChild(tdLabel);
    trNew.appendChild(tdQuant);
    parentNode.appendChild (trNew)

    recal(quantity);

  }

  function recal(quantity){
    var NewSum = parseInt(document.getElementById('sum').innerText);
    NewSum += parseInt(quantity);
    document.getElementById('sum').innerHTML = NewSum;
  }

  function undo(){
    var undoBtn = document.getElementById('undo');
    var parentNode = document.getElementById('orderTableBody');
    undoBtn.addEventListener('click', function(){ 
      var prevItem = document.getElementById('orderTableBody').lastChild;
      var quant = parseInt(prevItem.lastChild.innerText);
      recal(-quant);
      if(parentNode.hasChildNodes()){
        parentNode.removeChild(prevItem);
        
      }
      
    });
   
  }