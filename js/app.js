'use strict';
let hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

//seattle
let seattle={
  name:'seattle',
  minCustPerHour:23,
  maxCustPerHour:65,
  avgCookie:6.3,
  cookiesPerHour:[],
  cust:function(){
    for(let i=0;i<hours.lenght;i++){
      let numOfCustomers=randomCustomers(this.minCustPerHour,this.maxCustPerHour);
      this.cookiesPerHour.push(Math.floor(numOfCustomers*this.cookiesPerHour));
    }
  }
};

//Tokyo
let Tokyo={
  name:'Tokyo',
  minCustPerHour:3,
  maxCustPerHour:24,
  avgCookie:1.2,
  cookiesPerHour:[],
  cust:function(){
    for(let i=0;i<hours.lenght;i++){
      let numOfCustomers=randomCustomers(this.minCustPerHour,this.maxCustPerHour);
      this.cookiesPerHour.push(Math.floor(numOfCustomers*this.cookiesPerHour));
    }
  }
};

//Dubai
let Dubai={
  name:'Dubai',
  minCustPerHour:11,
  maxCustPerHour:38,
  avgCookie:3.7,
  cookiesPerHour:[],
  cust:function(){
    for(let i=0;i<hours.lenght;i++){
      let numOfCustomers=randomCustomers(this.minCustPerHour,this.maxCustPerHour);
      this.cookiesPerHour.push(Math.floor(numOfCustomers*this.cookiesPerHour));
    }
  }
};

//Paris
let Paris={
  name:'Paris',
  minCustPerHour:20,
  maxCustPerHour:38,
  avgCookie:2.3,
  cookiesPerHour:[],
  cust:function(){
    for(let i=0;i<hours.lenght;i++){
      let numOfCustomers=randomCustomers(this.minCustPerHour,this.maxCustPerHour);
      this.cookiesPerHour.push(Math.floor(numOfCustomers*this.cookiesPerHour));
    }
  }
};

//Lima
let Lima={
  name:'Lima',
  minCustPerHour:2,
  maxCustPerHour:16,
  avgCookie:4.6,
  cookiesPerHour:[],
  cust:function(){
    for(let i=0;i<hours.lenght;i++){
      let numOfCustomers=randomCustomers(this.minCustPerHour,this.maxCustPerHour);
      this.cookiesPerHour.push(Math.floor(numOfCustomers*this.cookiesPerHour));
    }
  }
};

//generating random numbers
function randomCustomers(minCustPerHour,maxCustPerHour){
  return Math.floor(Math.random()*(maxCustPerHour-minCustPerHour+1)+minCustPerHour);
}

//sales.html
let parent1=document.getElementById('location');
let image=document.createElement('img');

parent1.appendChild(image);
image.setAttribute('src','img/salmon.png');

//seattle
let totalcookies=0;
seattle.cust();

let firstHeader=document.createElement('h2');
parent1.appendChild(firstHeader);
firstHeader.textContent='seattle';

let firstlist=document.createElement('ul');
parent1.appendChild(firstlist);

//to add the items
for(let n=0;n<seattle.cookiesPerHour.length;n++){
  let listItem=document.createElement('li');
  firstlist.textContent=`${hours[n]}:${seattle.cookiesPerHour[n]} cookies`;
  totalcookies=totalcookies+seattle.cookiesPerHour[n];
}

//add the total
let listItem=document.createElement('li');
firstlist.appendChild(listItem);
listItem.textContent=`Total: ${totalcookies}cookies`;
