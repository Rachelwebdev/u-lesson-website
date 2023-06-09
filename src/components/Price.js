import Table from 'react-bootstrap/Table';
import '../styles/Price.css';

function Price() {
  return (
    <>
      <div className="price-cont">
        <h2 className="price-heading">PRICING</h2>
        <Table
          striped
          bordered
          hover
        >
          <thead>
            <tr>
              <th>#</th>
              <th>Country</th>
              <th>Currency</th>
              <th>3 months (New)</th>
              <th>6 Months (New)</th>
              <th>12 Months(New)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Nigeria</td>
              <td>Naira</td>
              <td>20,000</td>
              <td>-</td>
              <td>50,000</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Ghana</td>
              <td>Cedis</td>
              <td>225</td>
              <td>-</td>
              <td>525</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Uganda</td>
              <td>Uganda Shilling</td>
              <td>175,000</td>
              <td>-</td>
              <td>430,000</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Kenya</td>
              <td>Kenya Shilling</td>
              <td>-</td>
              <td>8700</td>
              <td>15,950</td>
            </tr>
            <tr>
              <td>5</td>
              <td>South Africa</td>
              <td>Rand</td>
              <td>-</td>
              <td>1200</td>
              <td>2,100</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Rwanda</td>
              <td>US Dollars</td>
              <td>-</td>
              <td>80</td>
              <td>120</td>
            </tr>
            <tr>
              <td>7</td>
              <td>The Gambia</td>
              <td>US Dollars</td>
              <td>-</td>
              <td>80</td>
              <td>120</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Sierra Leone</td>
              <td>Leone</td>
              <td>-</td>
              <td>870,000</td>
              <td>1,400,000</td>
            </tr>
            <tr>
              <td>9</td>
              <td>USA</td>
              <td>US Dollars</td>
              <td>-</td>
              <td>80</td>
              <td>130</td>
            </tr>
            <tr>
              <td>10</td>
              <td>UK</td>
              <td>Pounds</td>
              <td>-</td>
              <td>60</td>
              <td>110</td>
            </tr>
            <tr>
              <td>11</td>
              <td>Liberia</td>
              <td>US Dollars</td>
              <td>-</td>
              <td>80</td>
              <td>120</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Price;
