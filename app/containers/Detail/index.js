/**
 *
 * Detail
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { Line } from 'react-chartjs-2';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectDetail from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';

const MENU = {
  CHART: 'CHART',
  HISTORICAL_DATA: 'HICTORICAL DATA',
};
const randomNumber = (number) => Math.floor(Math.random() * number) + 10;

export class Detail extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      menu: MENU.CHART,
      hictoricalData: [],
    };
  }

  componentDidMount() {
    const arr = [];
    for (let i = 0; i <= 30; i += 1) {
      arr.push({
        date: `Dec ${i + 1}, 2017`,
        totalMention: randomNumber(10),
        positive: randomNumber(11),
        neutral: randomNumber(12),
        nagetive: randomNumber(11),
      });
    }
    setTimeout(() => {
      this.setState({
        hictoricalData: arr,
      });
    }, 100);
  }

  render() {
    const generateDataList = (number) => {
      const arr = [];
      for (let i = 0; i < 7; i += 1) {
        arr.push(randomNumber(number));
      }
      return arr;
    };
    const chartColors = {
      red: 'rgb(255, 99, 132)',
      orange: 'rgb(255, 159, 64)',
      yellow: 'rgb(255, 205, 86)',
      green: 'rgb(75, 192, 192)',
      blue: 'rgb(54, 162, 235)',
      purple: 'rgb(153, 102, 255)',
      grey: 'rgb(201, 203, 207)',
    };
    const cardChartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Positive',
          borderColor: chartColors.green,
          data: generateDataList(5),
          fill: false,
          id: 'y-axis-0',
        },
        {
          label: 'Negative',
          borderColor: chartColors.red,
          data: generateDataList(2),
          fill: false,
          id: 'y-axis-1',
        },
        {
          label: 'Neutral',
          borderColor: chartColors.grey,
          data: generateDataList(3),
          fill: false,
          id: 'y-axis-2',
        },
        {
          label: 'BTC Price',
          borderColor: chartColors.yellow,
          data: generateDataList(6),
          fill: false,
          id: 'y-axis-3',
        },
      ],
    };
    const cardChartOpts = {
      scaleShowVerticalLines: false,
      scaleShowHorizonalLines: false,
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      responsive: true,
      scales: {
        xAxes: [{
          display: true,
          scaleLabel: {
            display: true,
          },
        }],
        yAxes: [{
          display: true,
          scaleLabel: {
            display: true,
          },
        }],
      },
      tooltips: {
        mode: 'label',
        intersect: false,
      },
      hover: {
        mode: 'nearest',
        intersect: true,
      },
      elements: {
        line: {
          borderWidth: 1,
        },
      },
    };

    return (
      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
        <h3 className="text-left">Bitcoin (BTC)</h3>
        <nav className="nav nav-pills  mr-auto mt-3 mb-3 flex-column flex-sm-row">
          <button
            onClick={() => {
              this.setState({
                menu: MENU.CHART,
              });
            }}
            className={`flex-sm-fill text-sm-center nav-link mr-3 ${this.state.menu === MENU.CHART ? 'active' : ''}`}
          >Chart</button>
          <button
            onClick={() => {
              this.setState({
                menu: MENU.HISTORICAL_DATA,
              });
            }}
            className={`flex-sm-fill text-sm-center nav-link mr-3 ${this.state.menu === MENU.HISTORICAL_DATA ? 'active' : ''}`}
          >Hictorical Data</button>
        </nav>
        <div className="border-bottom mt-3 border-dark" style={{ border: '0.5px solid #c2cfd6' }}></div>
        <nav className="nav nav-pills  mr-auto mt-3 mb-3 flex-column flex-sm-row">
          <button type="button" className="btn btn-outline-dark btn-sm flex-sm-fill mr-2">1d</button>
          <button type="button" className="btn btn-outline-dark btn-sm flex-sm-fill mr-2">7d</button>
          <button type="button" className="btn btn-outline-dark btn-sm flex-sm-fill mr-2">1m</button>
          <button type="button" className="btn btn-outline-dark btn-sm flex-sm-fill mr-2">3m</button>
          <button type="button" className="btn btn-outline-dark btn-sm flex-sm-fill mr-2">1y</button>
          <button type="button" className="btn btn-outline-dark btn-sm flex-sm-fill mr-2">ALL</button>
          <form className="form-inline ml-auto my-2 my-lg-0">
            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
          </form>
        </nav>
        {
          this.state.menu === MENU.CHART &&
          <div>
            <div className="row">
              <div className="col-10 chart" style={{ maxHeight: '500px' }}>
                <Line data={cardChartData} options={cardChartOpts} height={500} />
              </div>
              <div className="col">
                <ul className="list-group">
                  {
                    cardChartData.datasets.map((data) => (<li key={data.label} className="list-group-item d-inline border-0 pl-0 pr-0">
                      <div className="float-left" style={{ height: '10px', width: '10px', backgroundColor: data.borderColor }}>
                      </div>
                      <div className="ml-3" style={{ lineHeight: '10px' }}>{data.label}</div>
                    </li>))
                  }
                </ul>
              </div>
            </div>
          </div>
        }
        {
          this.state.menu === MENU.HISTORICAL_DATA &&
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th className="text-right">Total mention</th>
                  <th className="text-right">Positive</th>
                  <th className="text-right">Neutral</th>
                  <th className="text-right">Negative</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.hictoricalData.map((data) => (<tr key={data.date}>
                    <td>{data.date}</td>
                    <td className="text-right">{data.totalMention}</td>
                    <td className="text-right">{data.positive}</td>
                    <td className="text-right">{data.neutral}</td>
                    <td className="text-right">{data.nagetive}</td>
                  </tr>))
                }
              </tbody>
            </table>
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-end">
                <li className="page-item disabled">
                  <a className="page-link" href="#">Previous</a>
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
        }
      </div>
    );
  }
}

Detail.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  detail: makeSelectDetail(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'detail', reducer });
const withSaga = injectSaga({ key: 'detail', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Detail);
