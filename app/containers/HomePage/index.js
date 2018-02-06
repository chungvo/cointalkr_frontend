/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const cardChartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          borderColor: 'rgba(255,255,255,.55)',
          data: [65, 59, 84, 84, 51, 55, 40],
        },
      ],
    };
    const cardChartOpts = {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      scales: {
        xAxes: [{
          gridLines: {
            color: 'transparent',
            zeroLineColor: 'transparent',
          },
          ticks: {
            fontSize: 2,
            fontColor: 'transparent',
          },

        }],
        yAxes: [{
          display: false,
          ticks: {
            display: false,
            min: Math.min(...cardChartData.datasets[0].data) - 5,
            max: Math.max(...cardChartData.datasets[0].data) + 5,
          },
        }],
      },
      elements: {
        line: {
          borderWidth: 1,
        },
        point: {
          radius: 0,
          hitRadius: 10,
          hoverRadius: 4,
        },
      },
    };
    const listData = [
      {
        name: 'Bitcoin (BTC)',
        price: '$13,999.20',
        mentioned: '102,355',
        positive: '833,343 (11.2%)',
        negative: '401,234 (8.1%)',
        changed: '10.1 %',
      },
      {
        name: 'Etherium (ETH)',
        price: '$1220',
        mentioned: '10,000',
        positive: '833,343 (11.2%)',
        negative: '401,234 (8.1%)',
        changed: '10.1 %',
      },
      {
        name: 'Ripple (XRP)',
        price: '$1.2',
        mentioned: '10,000',
        positive: '833,343 (11.2%)',
        negative: '401,234 (8.1%)',
        changed: '10.1 %',
      },
      {
        name: 'NEO (NEO)',
        price: '$122',
        mentioned: '10,000',
        positive: '833,343 (11.2%)',
        negative: '401,234 (8.1%)',
        changed: '10.1 %',
      },
      {
        name: 'Lumen (XLM)',
        price: '$12',
        mentioned: '10,000',
        positive: '833,343 (11.2%)',
        negative: '401,234 (8.1%)',
        changed: '10.1 %',
      },
      {
        name: 'Verge (XVG)',
        price: '$12',
        mentioned: '10,000',
        positive: '833,343 (11.2%)',
        negative: '401,234 (8.1%)',
        changed: '10.1 %',
      },
      {
        name: 'Nxt (NXT)',
        price: '$12',
        mentioned: '10,000',
        positive: '833,343 (11.2%)',
        negative: '401,234 (8.1%)',
        changed: '10.1 %',
      },
    ];
    return (
      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
        <h3 className="text-center">Bit Reports/Rumors</h3>
        <div className="border-bottom mt-3 border-dark" style={{ border: '0.5px solid #c2cfd6' }}></div>
        <nav className="nav nav-pills  mr-auto mt-3 mb-3 flex-column flex-sm-row">
          <a className="flex-sm-fill text-sm-center nav-link active" href="#">All</a>
          <a className="flex-sm-fill text-sm-center nav-link" href="#">Twitter</a>
          <a className="flex-sm-fill text-sm-center nav-link" href="#">Reddit</a>
          <a className="flex-sm-fill text-sm-center nav-link" href="#">Bitcointalk</a>
          <form className="form-inline ml-auto my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </nav>
        <table className="table main-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th className="text-right">Price</th>
              <th className="text-right">Mentioned (24h)</th>
              <th className="text-right">Positive (24h)</th>
              <th className="text-right">Negative (24h)</th>
              <th className="text-right">T. Changed (24h)</th>
              <th>Chart (7d)</th>
            </tr>
          </thead>
          <tbody>
            {
              listData.map((data, index) => (<tr>
                <td>{index + 1}</td>
                <td><Link to="/chart">{data.name}</Link></td>
                <td className="text-right">{data.price}</td>
                <td className="text-right">{data.mentioned}</td>
                <td className="text-right">{data.positive}</td>
                <td className="text-right">{data.negative}</td>
                <td className="text-right">{data.changed}</td>
                <td>
                  <Line width="100" data={cardChartData} options={cardChartOpts} height={50} />
                </td>
              </tr>))
            }
          </tbody>
        </table>
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-end">
            <li className="page-item disabled">
              <a className="page-link" href="#" tabIndex="-1">Previous</a>
            </li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item">
              <a className="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
