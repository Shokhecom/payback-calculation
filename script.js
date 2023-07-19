function calculate() {
    const initialInvestment = parseFloat(document.getElementById('initialInvestment').value);
    const initialMonthlyRevenue = parseFloat(document.getElementById('monthlyRevenue').value);
    const growthRate = parseFloat(document.getElementById('growthRate').value);
  
    if (isNaN(initialInvestment) || isNaN(initialMonthlyRevenue) || isNaN(growthRate)) {
      document.getElementById('result').innerHTML = "Please enter valid numbers.";
    } else {
      const monthlyGrowthFactor = 1 + (growthRate / 100);
      let monthlyRevenue = initialMonthlyRevenue;
      let totalRevenue = 0;
      let months = 0;
  
      while (totalRevenue < initialInvestment) {
        totalRevenue += monthlyRevenue;
        monthlyRevenue *= monthlyGrowthFactor;
        months++;
      }
  
      const yearsToBreakEven = Math.floor(months / 12);
      const remainingMonths = months % 12;
  
      const resultString = `The new project will break even in approximately ${yearsToBreakEven} years and ${remainingMonths} months. Total revenue at that time will be approximately $${totalRevenue.toFixed(2)}.`;
  
      document.getElementById('result').innerHTML = resultString;
    }
  }
  