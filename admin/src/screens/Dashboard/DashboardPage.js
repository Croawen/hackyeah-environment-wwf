import React from "react";
import { Card, CardBody, CardColumns, CardHeader } from "reactstrap";
import { getDashboardData } from "./dashboard.api";
import Chart from "./Chart";
import translate from "@common/translations/translate";

class DashboardPage extends React.Component {
  state = {
    isLoaded: false
  };

  async componentDidMount() {
    const res = await getDashboardData();
    if (res) {
      this.setState({
        isLoaded: true,

        rewardsTodayCount: res.claimedRewardsTodayCount,
        rewardsTotalCount: res.claimedRewardsTotalCount,
        rewardsTodayPerLocation: res.claimedRewardsPerLocationToday,
        rewardsTotalPerLocation: res.claimedRewardsPerLocationTotal,

        clientsTodayCount: res.registeredClientsTodayCount,
        clientsTotalCount: res.registeredClientsTotalCount,
        clientsTodayPerLocation: res.registeredClientsPerLocationToday,
        clientsTotalPerLocation: res.registeredClientsPerLocationTotal
      });
    }
  }

  render() {
    if (!this.state.isLoaded) return null;

    return (
      <div className="animated fadeIn">
        <CardColumns className="cols-2">
          <Card>
            <CardHeader>
              {translate("dashboard.charts.clients-per-location-today")}
            </CardHeader>
            <CardBody>
              <div className="chart-wrapper">
                <Chart chartData={this.state.clientsTodayPerLocation} />
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              {translate("dashboard.charts.clients-per-location-total")}
            </CardHeader>
            <CardBody>
              <div className="chart-wrapper">
                <Chart chartData={this.state.clientsTotalPerLocation} />
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              {translate("dashboard.charts.rewards-per-location-today")}
            </CardHeader>
            <CardBody>
              <div className="chart-wrapper">
                <Chart chartData={this.state.rewardsTodayPerLocation} />
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              {translate("dashboard.charts.rewards-per-location-total")}
            </CardHeader>
            <CardBody>
              <div className="chart-wrapper">
                <Chart chartData={this.state.rewardsTotalPerLocation} />
              </div>
            </CardBody>
          </Card>
        </CardColumns>
      </div>
    );
  }
}

export default DashboardPage;
