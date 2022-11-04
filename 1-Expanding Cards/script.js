let myDivs = [...document.getElementsByTagName(`div`)];

myDivs.forEach((div, i, arr) => {
  div.addEventListener(
    `click`,
    (event) => {
      console.log(div);
myDivs.forEach(d=>{
    d.classList.remove(`clicked`)
})
    //   const myPromise = new Promise((resolve, reject) => {
        div.classList.add(`clicked`);
        // resolve();
    //   })
    //   myPromise.then((e) => {
      
    //     arr.forEach((d,index)=>{index!==i?d.classList.remove(`clicked`):null})
    //   });

 
    },
    true
  );
});
