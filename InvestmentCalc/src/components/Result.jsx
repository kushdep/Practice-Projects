import { calculateInvestmentResults, formatter } from "../util/investment";
export default function Result({ data }) {
  console.log(data)
  let tableData = calculateInvestmentResults(data);
  let totalInterest = 0;
  let investedCapital = data.initialInvestment;

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
          investedCapital = investedCapital + e.annualInvestment;
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
