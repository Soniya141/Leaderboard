package Simulations.Runner
//import API.Utils.Environment.{baseURL, users}
import API.Scenario.Tokenn.tokenScenario
import API.Utils.GetToken
import API.Utils.GetToken.{httpConf, tokenPath}
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.http.protocol.HttpProtocolBuilder

import scala.concurrent.duration.DurationInt
import scala.language.postfixOps
//
class Tokenn extends Simulation {
    val scenarioJ = tokenScenario

    val httpProtocol: HttpProtocolBuilder = http.baseUrl(tokenPath)
    setUp(scenarioJ.inject(rampUsers(1).during(1)).protocols(httpProtocol))
//    setUp(

//        scenarioJ.inject(nothingFor(2 seconds),
//            constantUsersPerSec(1) during (1 seconds)
//        )

  //{

}
//import API.Utils.GetToken
//import io.gatling.core.Predef._
//import io.gatling.http.Predef._
//
//import scala.concurrent.duration._
//import scala.language.postfixOps
//
//
//
//class Tokenn extends Simulation {
//
//
//
//
//  //Token define
//
//  private var token: String = ""
//
//  val auth = scenario("Retrieve Token")
//    .exec(
//      http("POST Auth Req")
//        .post("https://auth.knoldus.com/auth/realms/knoldus/protocol/openid-connect/token")
//        .body(StringBody(
//          s"""{
//                     "client_id": "${GetToken.client_id}",
//                     "client_secret": "${GetToken.client_secret}",
//                     "username": "${GetToken.username}",
//                     "password": "${GetToken.password}",
//                     "grant_type": "${GetToken.grant_type}",
//
//                   }"""
//        ))
//        .check(bodyString.saveAs("Auth_Response"))
//        .check(status.is(200))
//        .check(jsonPath("$.token").find.saveAs("accesskey")))
//    .exec { session => {
//      token = session("accesskey").as[String]
//      session
//    }
//    }
//
//
//
//
//  //Header Define
////
////  val httpConf = http
////
////    .authorizationHeader(s"Bearer $token")
////    .headers(Map("Content-Type" -> "application/json"))
//  //      .acceptCharsetHeader("UTF-8") // Here are the common headers
//  //      .doNotTrackHeader("1")
//  //      .acceptLanguageHeader("en-UK,en;q=0.5")
//  //      .acceptEncodingHeader("gzip, deflate")
//  //      .userAgentHeader("Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:16.0) Gecko/20100101 Firefox/16.0")
//  //      .shareConnections
//  //      .proxy(Proxy("localhost", 8888).httpsPort(8888))
//}
//
////    def myTestObjectMethod = {
////        exec { session => println("token print2"); session }
////        exec { session => println(token: String); session }
////        exec(http("Get all devices with pagination")
////          .get("/devices/getAllDevices?page=0&size=200")
////          .check(status.in(200 to 210)))
////          .pause(1, 20)
////    }
////
////
////    val scn = scenario("my_actual_load_test").exec(myTestObjectMethod)
////
////
////    setUp(
//        auth.inject(constantUsersPerSec(1) during (1 seconds)),
//        scn.inject(nothingFor(2 seconds),
//            constantUsersPerSec(50) during (300 seconds)
//        )
//          .protocols(httpConf))
//      .assertions(global.responseTime.max.lt(500))
//      .assertions(forAll.failedRequests.percent.lte(1))
//      .assertions(global.responseTime.mean.lte(100))
//}
