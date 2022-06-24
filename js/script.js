const chart = document.getElementById("chart");




fetch('js/data.json', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    }, 
  })  .then(response => response.json())
        .then((data) => {
         data.forEach(e => {
           let html = `
           <ul>
                     <li class="graph">
                       <div class="bar" data-amount="${e.amount}">
                       <p class="amount text-center">$${e.amount}</p>
                       </div>
                      <p class="day text-center">${e.day}</p>
                      </li>
               </ul>
               `;
                  chart.innerHTML += html;        
         });


      

        const charts = document.querySelectorAll('.graph');
        charts.forEach(data => {
        const amountEle = data.querySelector('.amount').textContent;
        data.style.height = `${amountEle.substring(1) * 2.865}px`;
        
    });

const maxAmount = Math.max(...data.map(obj => obj.amount));

const bars = document.querySelectorAll(".bar");
const amount = document.getElementsByClassName('amount');

for (let i = 0; i < amount.length; i++) {
  if(amount[i].textContent === "$" + maxAmount){
   bars[i].classList.add("max");
  }
}
        })
        .then((error) => {
            console.log(error);
        });