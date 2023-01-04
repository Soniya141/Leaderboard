package Simulations


import API.Scenario.LeaderboardScenario
import io.gatling.core.Predef.{constantUsersPerSec, _}
import API.Scenario.LeaderboardScenario.createScenario
import API.Utils.Environment.{baseURL, users}
import io.gatling.http.Predef._
import io.gatling.http.protocol.HttpProtocolBuilder

import scala.concurrent.duration.DurationInt
import scala.language.postfixOps




class Create extends Simulation {


val scn = createScenario

//  val createUserExec = LeaderboardScenario.createScenario.inject(atOnceUsers(5))

  val httpProtocol: HttpProtocolBuilder = http.baseUrl(baseURL)



 setUp(
   scn inject(

     nothingFor(5),
rampUsers(100).during(30),





   )).protocols(httpProtocol)



}




