//package Simulations.Runner
//import API.Scenario.AddRemoveStudio.addremoveScenaio
//import API.Utils.Environment
//import API.Utils.Environment.{baseURL, users}
//import io.gatling.core.Predef._
//import io.gatling.http.Predef._
//import io.gatling.http.protocol.HttpProtocolBuilder
//class AddRemoveStudio extends Simulation{
//  val httpProtocol: HttpProtocolBuilder = http.baseUrl(baseURL)
//  val scenarioP = addremoveScenaio
//  setUp(scenarioP.inject(rampUsers(3000).during(100)).protocols(httpProtocol))
//}
