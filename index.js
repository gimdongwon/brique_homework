function hello() {
  console.log("hello");
  document.querySelector(".demo").innerHTML = "Hello";
  document
    .querySelector(".form1")
    .parentNode.removeChild(document.querySelector(".form1"));
}
// 2번문제
// string으로 된 문제를 받아서 array에 분배후 후위 표기 연산법을 통해서 문제를 해결하려고 진행중
// 설계후 코딩 작업중

// 3번문제 해결 중
//borderwidth를 button요소로 조절하여서 문제를 해결하려고 했으나 바로 반영이 되지 않으므로 어려움에 봉착함
// 실시간으로 반영이 되도록 진행중..
let chartWidth = 5;
var ctx = document.getElementById("myChart").getContext("2d");
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "line",

  // The data for our dataset
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Form4",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45],
        borderWidth: chartWidth
      }
    ]
  },

  // Configuration options go here
  options: {}
});

document.querySelector(".plus").onclick = function() {
  chartWidth++;
  // console.log(chartWidth);
  // chart.update();
};
document.querySelector(".minus").onclick = function() {
  chartWidth--;
  console.log(chartWidth);
};

// 4번 문제
// 처음 다뤄보는 유형으로 접근법을 잘 몰라서 해결하지 못했습니다.
