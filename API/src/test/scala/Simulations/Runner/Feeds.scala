//package Simulations.Runner
//
//import API.Scenario.Contribution.contributionScenario
//import API.Scenario.Feeds.feedsScenario
//import API.Utils.Environment
//import API.Utils.Environment.{baseURL, users}
//import io.gatling.core.Predef._
//import io.gatling.http.Predef._
//import io.gatling.http.protocol.HttpProtocolBuilder
//
//import scala.concurrent.duration.DurationInt
//import scala.language.postfixOps
//class Feeds extends Simulation {
//  val httpProtocol: HttpProtocolBuilder = http.baseUrl(baseURL)
//  val scenarioP = feedsScenario
//  setUp(scenarioP.inject(rampUsers(400).during(100)).protocols(httpProtocol))
//
//}
