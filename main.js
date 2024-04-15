 // Katelyn Curtiss, 5-15-24, Customer stats
 
 
 
 //Input
 const peaktime1 = parseInt(prompt("Peak time#1:"));
 const peaktime2 = parseInt(prompt("Peak time #2:"));
 const peaktime3 = parseInt(prompt("Peak time #3:"));
 const peaktime4 = parseInt(prompt("Peak time #4:"));

 
 //Process
 // Calculate the TOTAL number of customers who visited the store during the 
 // four-hour period

 const totalCustomers = peaktime1 + peaktime2 + peaktime3 + peaktime4;

 // Calculate the AVERAGE number of customers that visited the store in the
 // four-hour period

 const numPeakHours = 4;
 const averageNumCustomers = totalCustomers / numPeakHours;
 
 //Output
const myOutput = `

Rolling W Feed Store Customer Statistics

Number of Customers (First Hour): ${peaktime1}
Number of Customers (Second Hour): ${peaktime2}
Number of Customers (Third Hour): ${peaktime3}
Number of Customers (Four Hour): ${peaktime4}

Total Customers Over Four Hour: ${totalCustomers}
AVG Number of Customers Per Hour: ${averageNumCustomers}`;
  
console.log(myOutput);