//package Simulations.Runner
//
//import API.Scenario
//import API.Scenario.Contribution
//
//import API.Scenario.Summary.summaryScenario
//import API.Utils.Environment
//import API.Utils.Environment.{baseURL, users}
//import io.gatling.core.Predef._
//import io.gatling.http.Predef._
//import _root_.Request.Leaderboard.SummaryModule
//import io.gatling.http.protocol.HttpProtocolBuilder
//
//import scala.language.postfixOps
//
//
//
//
//class Summary extends Simulation {
//  val scenarioC = summaryScenario
//  val httpProtocol: HttpProtocolBuilder = http.baseUrl(baseURL)
//  setUp(scenarioC.inject(rampUsers(10).during(1)).protocols(httpProtocol))
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
//
//
//
//
//
