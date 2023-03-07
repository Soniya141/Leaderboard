//package Simulations.Runner
//
//import API.Scenario.Helpdesk.helpdeskScenario
//import API.Utils.Environment.{baseURL, users}
//import io.gatling.core.Predef._
//import io.gatling.http.Predef._
//
//import io.gatling.http.protocol.HttpProtocolBuilder
//
//import scala.language.postfixOps
//
//class Helpdesk extends Simulation {
//  val httpProtocol: HttpProtocolBuilder = http.baseUrl(baseURL)
//  val scenarioI = helpdeskScenario
//  setUp(scenarioI.inject(rampUsers(10).during(1)).protocols(httpProtocol))
//
//}
