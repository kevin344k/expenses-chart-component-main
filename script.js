import data from "./data.json" assert { type: "json" };

const ctx = document.getElementById("myChart");

fetch("./data.json")
  .then((resp) => resp.json())
  .then((jsonData) => {
    drawGraph(jsonData);
  });




function drawGraph(data) {
  let labels = [];
  let amount = [];
  data.forEach((element) => {
    labels.push(element.day);
    amount.push(element.amount);
  });

  const titleTooltip = (tooltipItems) => {
    return "";
  };
  const labelTooltip = (tooltipItems) => {
    return `$ ${tooltipItems.raw}`;
  };

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "df",
          data: amount,
          backgroundColor:  colorDayBar(labels) ,
          borderWidth: 1,
          borderRadius: 5,
        },
      ],
    },
    options: {
      maintainAspectRatio:false,
      plugins: {
        legend: {
          display: false,
        
        },
        tooltip: {
          yAlign: "bottom",
          displayColors: false,
          callbacks: {
            title: titleTooltip,
            label: labelTooltip,
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          display: false,
          min:0,
          max:60,
          grace:1,
          ticks:{
            stepSize:5
          }
        },
        x: {
          grid: {
            display: false,
          },
        },
      },
    },
  });

 
}

//console.log(data);

function colorDayBar(labels) {

  const date=new Date();
  let today=date.toDateString().split(" ")
  let daySearch=today[0].toLowerCase()
  let setColorIndex= labels.indexOf(daySearch )
  let bg=[]
for (let i = 0; i < labels.length; i++) {
  
if (i==setColorIndex) {
  bg.push("hsl(186, 34%, 60%)")
} else{
  bg.push("hsl(10, 79%, 65%)")
}
  
}

  console.log(bg);
return bg
}