import { calculateInvestmentResults, formatter } from "../util/investment";
export default function Result() {
  let tableData = calculateInvestmentResults({
    initialInvestment: 15000,
    annualInvestment: 900,
    expectedReturn: 5.56,
    duration: 10,
  });
  let totalInterest = 0;
  let investedCapital=15000

  return (
    <table id="result">
      <thead>
        <tr>
          <th scope="col">Year</th>
          <th scope="col">Investment Value</th>
          <th scope="col">Interest (Year)</th>
          <th scope="col">Total Interest</th>
          <th scope="col">Invested capital</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((e, idx) => {
          idx = idx > 0 ? idx - 1 : idx;
          totalInterest = totalInterest + tableData[idx].interest;
          investedCapital=investedCapital+e.annualInvestment
          let data = (
            <tr>
              <td>{formatter.format(e.year)}</td>
              <td>{formatter.format(e.valueEndOfYear)}</td>
              <td>{formatter.format(e.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(investedCapital)}</td>
            </tr>
          );
          return data;
        })}
      </tbody>
    </table>
  );
}
