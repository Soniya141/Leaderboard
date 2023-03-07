package Request.Radar

import API.Utils.Environment.baseURL
import API.Utils.Headers.commonHeader
import io.gatling.core.Predef.{feed, _}
import io.gatling.http.Predef._
object RadarModule {
  val radarTechnology= scenario("Radar Technology")
    .exec(http("Radar Technology")
      .get("https://backend-radar.qa.go1percent.com/knoldus-backend/rest/radar-service/technology")
      .headers(commonHeader)
      .check(status is 200))
    .pause(3)
  val radarStudio = scenario("Radar Studio")
    .exec(http("Radar Studio")
      .get("https://backend-radar.qa.go1percent.com//knoldus-backend/rest/radar-service/ui-support/studios")
      .headers(commonHeader)
      .check(status is 200))
    .pause(3)
  val radarQuarter = scenario("Radar Studio")
    .exec(http("Radar Quarter")
      .get("https://backend-radar.qa.go1percent.com//knoldus-backend/rest/radar-service/ui-support/quarters")
      .headers(commonHeader)
      .check(status is 200))
    .pause(3)
  val radarCreate = scenario("Radar Studio")
    .exec(http("Radar Create")
      .get("https://backend-radar.qa.go1percent.com/knoldus-backend/rest/radar-service/technology/creates")
      .headers(commonHeader)
      .check(status is 200))
    .pause(3)
}
