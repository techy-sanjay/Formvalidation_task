
function getItem(){
    if(localStorage.getItem("formarray")){
     let item = JSON.parse( localStorage.getItem("formarray"))
     console.log('retrievedObject: ', item);
     var tablearea = document.getElementById('tablearea');

     item.forEach(element => {
        var tr = document.createElement('tr');

        tr.appendChild( document.createElement('td') );
        tr.appendChild( document.createElement('td') );
        tr.appendChild( document.createElement('td') );
        tr.appendChild( document.createElement('td') );
        tr.appendChild( document.createElement('td') );
        tr.appendChild( document.createElement('td') );
        tr.appendChild( document.createElement('td') );
        tr.appendChild( document.createElement('td') );
        // tr.appendChild( document.createElement('td') );
        
        tr.cells[0].appendChild( document.createTextNode(element.name) )
        tr.cells[1].appendChild( document.createTextNode(element.age) );
        tr.cells[2].appendChild( document.createTextNode(element.mobile_number) );
        tr.cells[3].appendChild( document.createTextNode(element.email_id) );
        tr.cells[4].appendChild( document.createTextNode(element.password) );
        tr.cells[5].appendChild( document.createTextNode(element.gender) );
        tr.cells[6].appendChild( document.createTextNode(element.department) );
        tr.cells[7].appendChild( document.createTextNode(element.address) );
        // tr.cells[8].appendChild( document.createTextNode('<button onclick="editData(this)">Edit</button>'+
        // '<button onclick="deleteData(this)">Delete</button>') );
    
        tablearea.appendChild(tr);

     
     });
    }}
const myTimeout = setTimeout(getItem, 500);

