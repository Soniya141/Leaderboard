//package Simulations.Runner
//
//
//
//  import API.Scenario
//  import API.Scenario.Studio.studioScenario
//
//  import API.Utils.Environment
//  import API.Utils.Environment.{baseURL, users}
//  import io.gatling.core.Predef._
//  import io.gatling.http.Predef._
//  import API.Scenario.Dashboard.dashboardScenario
//  import io.gatling.http.protocol.HttpProtocolBuilder
//
//  import scala.language.postfixOps
//
//
//
//
//  class Dashboard extends Simulation {
//    val httpProtocol: HttpProtocolBuilder = http.baseUrl(baseURL)
//    val scenarioM = dashboardScenario
//    setUp(scenarioM.inject(rampUsers(10).during(100)).protocols(httpProtocol))
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//}
