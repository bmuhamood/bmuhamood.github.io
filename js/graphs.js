let labels1 = ['Resolved With In 24hrs', 'More than 24hrs'];
let data1 = [69, 31];
let colors1 = ['#49A9EA', '#36CAAB'];
let myChart1 = document.getElementById("myChart").getContext('2d');

let chart1 = new Chart(myChart1, {
  type: 'doughnut',
  data: {
    labels: labels1,
    datasets: [{
      data: data1,
      backgroundColor: colors1,
    }]
  },
  options: {
    title: {
      text: "Do you like Doughnuts?",
      display: true
    }
  }
});

// bar chart
let labels2 = ['ARETC', 'CIV02', 'SAUZN', 'IRQKK', 'YEMYY', 'KWTMT', 'CAFAT', 'LBY01', 'BEN02', 'SYRSP'];
let data2 = [100, 79, 35, 50, 74, 10, 30, 60, 40, 90];
let colors2 = ['#49A9EA', '#36CAAB', '#140698', '#0e0e0e', '#ff00ff', '#000061', '#002400', '#ffff1f', '#00FFFF'];
let myChart2 = document.getElementById("myChart2").getContext('2d');

let chart2 = new Chart(myChart2, {
  type: 'bar',
  data: {
    labels: labels2,
    datasets: [{
      data: data2,
      backgroundColor: colors2,
    }]
  },
  options: {
    title: {
      text: "Number of clients Requests",
      display: true
    },
    legend: {
        display: false
    }
  }
});

// stack Bar Chart
var myChart3 = document.getElementById('myChart3').getContext('2d');
var myChart3 = new Chart(myChart3, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Pending In/Out files',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// line graph
var ctx = document.getElementById('myChart4');
var myChart4 = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['CIV02', 'MRTMM', 'BEN02', 'ARETC', 'CAFAT', 'GMB01'],
        datasets: [{
            label: 'Realtime Files Delays',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// FTP Down alerts
var labels5 = ['ARETC', 'CIV02', 'SAUZN', 'IRQKK', 'YEMYY', 'KWTMT'];
var data5 = [100, 79, 35, 50, 74, 10];
var colors5 = ['#49A9EA', '#36CAAB', '#140698', '#ff00ff', '#000061', '#002400'];
var myChart5 = document.getElementById("myChart5").getContext('2d');

var chart5 = new Chart(myChart5, {
  type: 'pie',
  data: {
    labels: labels5,
    datasets: [{
      data: data5,
      backgroundColor: colors5,
    }]
  },
  options: {
    title: {
      text: "FTP Down Alerts",
      display: true
    },
    legend: {
        display: false
    }
  }
});

// CDR/CPF Alerts
var labels6 = ['ARETC', 'CIV02', 'SAUZN', 'IRQKK', 'YEMYY', 'KWTMT'];
var data6 = [100, 79, 35, 50, 74, 10];
var colors6 = ['#49A9EA', '#36CAAB', '#140698', '#ff00ff', '#000061', '#002400'];
var myChart6 = document.getElementById("myChart6").getContext('2d');

var chart5 = new Chart(myChart6, {
  type: 'polarArea',
  data: {
    labels: labels6,
    datasets: [{
      data: data6,
      backgroundColor: colors6,
    }]
  },
  options: {
    title: {
      text: "CPF/CDR delayed Alerts",
      display: true
    },
    legend: {
        display: false
    }
  }
});