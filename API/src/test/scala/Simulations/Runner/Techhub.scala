//package Simulations.Runner
//
//import API.Scenario.Techhub.techhubScenario
//
//import API.Utils.Environment.{baseURL, users}
//import io.gatling.core.Predef._
//import io.gatling.http.Predef._
//
//import io.gatling.http.protocol.HttpProtocolBuilder
//
//import scala.language.postfixOps
//
//class Techhub extends Simulation {
//  val scenarioG = techhubScenario
//
//  val httpProtocol: HttpProtocolBuilder = http.baseUrl(baseURL)
//  setUp(scenarioG.inject(rampUsers(10).during(1)).protocols(httpProtocol))
//
//}
