let food=[
  {
    name:"A2B - Adyar Ananda Bhavan",
    imgurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/puci5j1isadzx532bco3",
    cusine:"South Indian, North Indian, Sweets, Chinese",
    rating:4.5,
    time:"29 MINS",
    rate:"₹300 FOR TWO",
    offer:"Flat ₹150 off | Use NYFIESTA"
  },
  {
    name:"Geetham Veg restaurant",
    imgurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ukjks4pkgniuxolng0t7",
    cusine:"Indian",
    rating:3.5,
    time:"46 MINS",
    rate:"₹250 FOR TWO",
    offer:"50% off | Use WELCOME50"
  },
  {
    name:"Hotel Saravana Bhavan",
    imgurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ak0pqmhlslxqpsbrdcc6",
    cusine:"South Indian, North Indian, Sweets",
    rating:4.5,
    time:"30 MINS",
    rate:"₹300 FOR TWO",
    offer:"Flat ₹150 off | Use NYFIESTA"
  },
  {
    name:"Sangeetha Veg Restaurant",
    imgurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/g2lo64ejsddy18l1g1mp",
    cusine:"North Indian, South Indian",
    rating:1.6,
    time:"31 MINS",
    rate:"₹450 FOR TWO",
    offer:"50% off | Use WELCOME50"
  },
  {
    name:"All Day Breakfast Company",
    imgurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ed141fee2d080c38deea62303010a9c2",
    cusine:"Beverages, Indian",
    rating:4.4,
    time:"57 MINS",
    rate:"₹300 FOR TWO",
    offer:"Flat ₹150 off | Use NYFIESTA"
  },
  {
    name:"Swamy Cafe",
    imgurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/qmpmqzlnx5tjok1nuzai",
    cusine:"South Indian",
    rating:3.7,
    time:"42 MINS",
    rate:"₹200 FOR TWO",
    offer:"50% off | Use WELCOME50"
  },
  {
    name:"HOTEL FRIENDS FOOD COURT",
    imgurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bwn0kooj3ec8vmkurd8v",
    cusine:"South Indian, North Indian, Chinese",
    rating:4.2,
    time:"47 MINS",
    rate:"₹200 FOR TWO",
    offer:"50% off | Use WELCOME50"
  },
  {
    name:"Ratna Cafe (Estd.1948)",
    imgurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bkwkwux4bzs19qoylumo",
    cusine:"South Indian",
    rating:2.5,
    time:"37 MINS",
    rate:"₹300 FOR TWO",
    offer:"50% off | Use WELCOME50"
  },
  {
    name:"Bharani Vegetarian",
    imgurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/cndsoe44e7bfmivdobxa",
    cusine:"North Indian, South Indian",
    rating:4.2,
    time:"30 MINS",
    rate:"₹300 FOR TWO",
    offer:"Flat ₹150 off | Use NYFIESTA"
  },
  {
    name:"NAKSHATRA PURE VEG",
    imgurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ipjsuasggph9zabfsrlv",
    cusine:"Indian",
    rating:4.4,
    time:"46 MINS",
    rate:"₹200 FOR TWO",
    offer:"50% off | Use WELCOME50"
  },
  {
    name:"Vishranthi",
    imgurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/knyjoetekz2ay61jvhwo",
    cusine:"Indian, South Indian",
    rating:1.5,
    time:"25 MINS",
    rate:"₹250 FOR TWO",
    offer:"50% off | Use WELCOME50"
  },
  {
    name:"Bakya Veg Restaurant",
    imgurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/w06omkzgzv8dmvbzhxxm",
    cusine:"South Indian, Chinese, North Indian",
    rating:0.9,
    time:"48 MINS",
    rate:"₹150 FOR TWO",
    offer:"Flat ₹175 off | Use NYFIESTA"
  }
];

let container=document.querySelector(".container");

let row=document.createElement("div");
row.classList.add("row");
container.appendChild(row);

let position=document.querySelector(".position");

food.forEach(values => {

  let col=document.createElement("div");
  col.classList.add("col");
  row.appendChild(col);

  let card=document.createElement("div");
  card.classList.add("card");
  col.appendChild(card);

  let img=document.createElement("img");
  img.src=values.imgurl;
  card.appendChild(img);

  let heading=document.createElement("h4");
  heading.innerText=values.name;
  card.appendChild(heading);

  let para=document.createElement("p");
  para.innerText=values.cusine;
  card.appendChild(para);

  let details=document.createElement("div");
  details.classList.add("details");
  card.appendChild(details);

  let content1=document.createElement("div");
  content1.classList.add("content");
  content1.classList.add("rating");
  details.appendChild(content1);
  
  if(values.rating>=4 && values.rating<=5){
    content1.style.backgroundColor="#48c479"
  }
  else if(values.rating>=2 && values.rating<4){
    content1.style.backgroundColor="red"
  }
  else{
    content1.style.backgroundColor="skyblue"
  }


  let icon=document.createElement("i");
  icon.setAttribute("class","bi bi-star-fill")
  content1.appendChild(icon)

  let ratings=document.createElement("span");
  ratings.innerText=values.rating;
  content1.appendChild(ratings);

  let content2=document.createElement("div");
  content2.classList.add("content");
  content2.classList.add("time");
  details.appendChild(content2)

  let times=document.createElement("p");
  times.innerText=values.time;
  content2.appendChild(times);

  let content3=document.createElement("div");
  content3.classList.add("content");
  details.appendChild(content3);

  let rates=document.createElement("p");
  rates.innerText=values.rate;
  content3.appendChild(rates);

  let offr=document.createElement("div");
  offr.classList.add("offr");
  card.appendChild(offr); 
  
  let image=document.createElement("img");
  image.src="image/offer.png";
  offr.appendChild(image);

  let offers=document.createElement("span");
  offers.innerText=values.offer;
  offr.appendChild(offers);
  
  let button=document.createElement("div");
  button.classList.add("button");
  card.appendChild(button) 

  let add=document.createElement("div");
  add.classList.add("add");
  button.appendChild(add);

  let minus=document.createElement("button");
  minus.innerText="-";
  add.appendChild(minus);

  let click=document.createElement("p");

  minus.addEventListener("click",function() {
    if(quantity.value>0){
      --quantity.value
    }
    if(quantity.value==0){
      click.remove();
    }
    else{
      click.innerText=`${heading.innerText} (${quantity.value})`;
    }
  })

  let quantity=document.createElement("input");
  quantity.value="0";
  add.appendChild(quantity);

  let plus=document.createElement("button");
  plus.innerText="+";
  add.appendChild(plus);

  plus.addEventListener("click",function() {
    ++quantity.value;
    click.innerText=`${heading.innerText} (${quantity.value})`;
    click.style.padding="10px 0px"
    position.appendChild(click);
    position.style.display="flex";
  })
})


  




 