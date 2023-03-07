package API.Scenario

import _root_.Request.Dashboard.DashboardModule

import io.gatling.core.Predef.scenario
import io.gatling.http.protocol.HttpProtocolBuilder

object Dashboard {
  val dashboardScenario = scenario("Contribution API")
    .exec(DashboardModule.knolderID)
    .exec(DashboardModule.twelvemonths)
    .exec(DashboardModule.getAllRewards)
    .exec(DashboardModule.fetchProfilePic)
    .exec(DashboardModule.addReward)
    .exec(DashboardModule.updateReward)
}
