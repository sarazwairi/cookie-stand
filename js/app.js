'use strict';
let hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];


//generating random numbers
function randomCustomers(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);}
//seattle
let seattle = {
  minCust:23,
  maxCust:65,
  avgCook:6.3,
  numCook:[],
  cust:function(){
    for(let n=0;n<hours.length;n++){
      let numCust=randomCustomers(this.minCust,this.maxCust);
      this.numCook.push(Math.floor(numCust*this.avgCook));
    }
  }
};

//Tokyo
let tokyo={
  minCust:3,
  maxCust:24,
  avgCook:1.2,
  numCook:[],
  cust:function(){
    for(let n=0;n<hours.length;n++){
      let numCust=randomCustomers(this.minCust,this.maxCust);
      this.numCook.push(Math.floor(numCust*this.avgCook));
    }
  }
};

//Dubai
let dubai={
  minCust:11,
  maxCust:38,
  avgCook:3.7,
  numCook:[],
  cust:function(){
    for(let n=0;n<hours.length;n++){
      let numCust=randomCustomers(this.minCust,this.maxCust);
      this.numCook.push(Math.floor(numCust*this.avgCook));
    }
  }
};

//Paris

let paris={
  minCust:20,
  maxCust:38,
  avgCook:2.3,
  numCook:[],
  cust:function(){
    for(let n=0;n<hours.length;n++){
      let numCust=randomCustomers(this.minCust,this.maxCust);
      this.numCook.push(Math.floor(numCust*this.avgCook));
    }
  }
};

//Lima

let lima={
  minCust:2,
  maxCust:16,
  avgCook:4.6,
  numCook:[],
  cust:function(){
    for(let n=0;n<hours.length;n++){
      let numCust=randomCustomers(this.minCust,this.maxCust);
      this.numCook.push(Math.floor(numCust*this.avgCook));
    }
  }
};

//sales.html
let parent1=document.getElementById('location');

//seattle
let totalCook=0;
seattle.cust();

let firstHeader=document.createElement('h2');
parent1.appendChild(firstHeader);
firstHeader.textContent='seattle';

let firstlist=document.createElement('ul');
parent1.appendChild(firstlist);

//to add the items
for(let n=0;n<seattle.numCook.length;n++){
  let listItem=document.createElement('li');
  firstlist.appendChild(listItem);
  listItem.textContent=`${hours[n]}: ${seattle.numCook[n]} cookies`;
  totalCook=totalCook+seattle.numCook[n];
}
//add the total
let listItem=document.createElement('li');
firstlist.appendChild(listItem);
listItem.textContent=`Total: ${totalCook}cookies`;

//tokyo
totalCook=0;
tokyo.cust();

firstHeader=document.createElement('h2');
parent1.appendChild(firstHeader);
firstHeader.textContent='tokyo';

firstlist=document.createElement('ul');
parent1.appendChild(firstlist);
//to add the items
for(let n=0;n<tokyo.numCook.length;n++){
  let listItem=document.createElement('li');
  firstlist.appendChild(listItem);
  listItem.textContent=`${hours[n]}:${tokyo.numCook[n]} cookies`;
  totalCook=totalCook+tokyo.numCook[n];
}

//add the total
listItem=document.createElement('li');
firstlist.appendChild(listItem);
listItem.textContent=`Total: ${totalCook}cookies`;

//dubai
totalCook=0;
dubai.cust();

firstHeader=document.createElement('h2');
parent1.appendChild(firstHeader);
firstHeader.textContent='dubai';

firstlist=document.createElement('ul');
parent1.appendChild(firstlist);
//to add the items
for(let n=0;n<dubai.numCook.length;n++){
  let listItem=document.createElement('li');
  firstlist.appendChild(listItem);
  listItem.textContent=`${hours[n]}:${dubai.numCook[n]} cookies`;
  totalCook=totalCook+dubai.numCook[n];
}

//add the total
listItem=document.createElement('li');
firstlist.appendChild(listItem);
listItem.textContent=`Total: ${totalCook}cookies`;

//Paris
totalCook=0;
paris.cust();

firstHeader=document.createElement('h2');
parent1.appendChild(firstHeader);
firstHeader.textContent='paris';

firstlist=document.createElement('ul');
parent1.appendChild(firstlist);
//to add the items
for(let n=0;n<paris.numCook.length;n++){
  let listItem=document.createElement('li');
  firstlist.appendChild(listItem);
  listItem.textContent=`${hours[n]}:${paris.numCook[n]} cookies`;
  totalCook=totalCook+paris.numCook[n];
}

//add the total
listItem=document.createElement('li');
firstlist.appendChild(listItem);
listItem.textContent=`Total: ${totalCook}cookies`;

//Lima
totalCook=0;
lima.cust();

firstHeader=document.createElement('h2');
parent1.appendChild(firstHeader);
firstHeader.textContent='lima';

firstlist=document.createElement('ul');
parent1.appendChild(firstlist);
//to add the items
for(let n=0;n<lima.numCook.length;n++){
  let listItem=document.createElement('li');
  firstlist.appendChild(listItem);
  listItem.textContent=`${hours[n]}:${lima.numCook[n]} cookies`;
  totalCook=totalCook+lima.numCook[n];
}

//add the total
listItem=document.createElement('li');
firstlist.appendChild(listItem);
listItem.textContent=`Total: ${totalCook}cookies`;
