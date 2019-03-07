let body=document.getElementById('body');

let sourceData=fetch('data.json').then((response)=>{
    return response.json();
});

sourceData.then((data)=>{    
    createNode(body,data);

    
});

function createNode(parent,data){  
    ///creating div and appending it to the parent element  
    let div = document.createElement('div');
    parent.appendChild(div);
    div.id=data.id;

    //creating checkbox 
    let cb = document.createElement('input');
    cb.type = 'checkbox';    
    div.appendChild(cb);
    let newlabel = document.createElement("Label");    
    newlabel.innerHTML = data.text;
    div.appendChild(newlabel);

    elementId= data.id;   
    

    // checking if the node has child nodes then calling the function again
    if (data.expanded===true){
        parent= document.getElementById(`${elementId}`);
        for(let i=0;i< data.items.length;i++){
            createNode(parent,data.items[i]);
        }
    }
    
}


