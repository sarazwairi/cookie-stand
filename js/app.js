'use strict';
let hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];


//generating random numbers
function randomCustomers(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}
//seattle
let seattle={
  minCust:23,
  maxCust:65,
  avgCook:6.3,
  numCook:[],
  cust:function(){
    for(let n=0;n<hours.lenght;n++){
      let numCust=randomCustomers(this.minCust,this.maxCust);
      this.numCook.push(Math.floor(numCust*this.avgCook));
    }
  }
};

//Tokyo
// eslint-disable-next-line no-unused-vars
let Tokyo={
  minCust:3,
  maxCust:24,
  avgCook:1.2,
  numCook:[],
  cust:function(){
    for(let n=0;n<hours.lenght;n++){
      let numCust=randomCustomers(this.minCust,this.maxCust);
      this.numCook.push(Math.floor(numCust*this.avgCook));
    }
  }
};

//Dubai
// eslint-disable-next-line no-unused-vars
let Dubai={
  minCust:11,
  maxCust:38,
  avgCook:3.7,
  numCook:[],
  cust:function(){
    for(let n=0;n<hours.lenght;n++){
      let numCust=randomCustomers(this.minCust,this.maxCust);
      this.numCook.push(Math.floor(numCust*this.avgCook));
    }
  }
};

//Paris
// eslint-disable-next-line no-unused-vars
let Paris={
  minCust:20,
  maxCust:38,
  avgCook:2.3,
  numCook:[],
  cust:function(){
    for(let n=0;n<hours.lenght;n++){
      let numCust=randomCustomers(this.minCust,this.maxCust);
      this.numCook.push(Math.floor(numCust*this.avgCook));
    }
  }
};

//Lima
// eslint-disable-next-line no-unused-vars
let Lima={
  minCust:2,
  maxCust:16,
  avgCook:4.6,
  numCook:[],
  cust:function(){
    for(let n=0;n<hours.lenght;n++){
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
  listItem.textContent=`${hours[n]}:${seattle.numCook[n]} cookies`;
  totalCook=totalCook+seattle.numCook[n];
}

//add the total
let listItem=document.createElement('li');
firstlist.appendChild(listItem);
listItem.textContent=`Total: ${totalCook}cookies`;

//tokyo
totalCook=0;
Tokyo.cust();

firstHeader=document.createElement('h2');
parent1.appendChild(firstHeader);
firstHeader.textContent='Tokyo';

firstlist=document.createElement('ul');
parent1.appendChild(firstlist);
//to add the items
for(let n=0;n<Tokyo.numCook.length;n++){
  let listItem=document.createElement('li');
  firstlist.appendChild(listItem);
  listItem.textContent=`${hours[n]}:${Tokyo.numCook[n]} cookies`;
  totalCook=totalCook+Tokyo.numCook[n];
}

//add the total
listItem=document.createElement('li');
firstlist.appendChild(listItem);
listItem.textContent=`Total: ${totalCook}cookies`;

//dubai
totalCook=0;
Dubai.cust();

firstHeader=document.createElement('h2');
parent1.appendChild(firstHeader);
firstHeader.textContent='Dubai';

firstlist=document.createElement('ul');
parent1.appendChild(firstlist);
//to add the items
for(let n=0;n<Dubai.numCook.length;n++){
  let listItem=document.createElement('li');
  firstlist.appendChild(listItem);
  listItem.textContent=`${hours[n]}:${Dubai.numCook[n]} cookies`;
  totalCook=totalCook+Dubai.numCook[n];
}

//add the total
listItem=document.createElement('li');
firstlist.appendChild(listItem);
listItem.textContent=`Total: ${totalCook}cookies`;

//Paris
totalCook=0;
Paris.cust();

firstHeader=document.createElement('h2');
parent1.appendChild(firstHeader);
firstHeader.textContent='Paris';

firstlist=document.createElement('ul');
parent1.appendChild(firstlist);
//to add the items
for(let n=0;n<Paris.numCook.length;n++){
  let listItem=document.createElement('li');
  firstlist.appendChild(listItem);
  listItem.textContent=`${hours[n]}:${Paris.numCook[n]} cookies`;
  totalCook=totalCook+Paris.numCook[n];
}

//add the total
listItem=document.createElement('li');
firstlist.appendChild(listItem);
listItem.textContent=`Total: ${totalCook}cookies`;

//Lima
totalCook=0;
Lima.cust();

firstHeader=document.createElement('h2');
parent1.appendChild(firstHeader);
firstHeader.textContent='Lima';

firstlist=document.createElement('ul');
parent1.appendChild(firstlist);
//to add the items
for(let n=0;n<Lima.numCook.length;n++){
  let listItem=document.createElement('li');
  firstlist.appendChild(listItem);
  listItem.textContent=`${hours[n]}:${Lima.numCook[n]} cookies`;
  totalCook=totalCook+Lima.numCook[n];
}

//add the total
listItem=document.createElement('li');
firstlist.appendChild(listItem);
listItem.textContent=`Total: ${totalCook}cookies`;
