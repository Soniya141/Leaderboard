package Request.Leaderboard

import API.Utils.Environment.baseURL
import API.Utils.Headers.commonHeader
import Request.Knolx.TokenModule
import io.gatling.core.Predef._
import io.gatling.http.Predef._


object StudioModule {

  val studioScore= scenario("Studio score")
    .exec(http("/studios/score?studioId=1- Fetch reward score ")
      .get(baseURL + "/studios/score?studioId=1")
      .headers(commonHeader)
      .formParam("studioId", 1)
      .check(status is 200))
    .pause(3)
  val studioId = scenario("Studio ID")

    .exec(http("/studios/1- Get Studio details by Studio Id")
      .get(baseURL + "/studios/1")
      .headers(commonHeader)
      .check(status is 200))
    .pause(3)
  val studioSummary = scenario("Studio summary")

    .exec(http("/studios-Get list of studio head all information like total members, monthly score, studio type")
      .get(baseURL + "/studios")
      .headers(commonHeader)
      .check(status is 200))
    .pause(3)
  val studioDetails = scenario("Studio Details")

    .exec(http("/studioDetails- Fetch all Studio Ids and Studio names")
      .get(baseURL + "/studioDetails")
      .headers(commonHeader)
      .check(status is 200))
    .pause(3)
  val studioCharter = scenario("Studio Details")

    .exec(http("/getStudioCharter?studioId=1- Fetch charter(Image) on the basis of studio Id")
      .get(baseURL + "/getStudioCharter?studioId=1")
      .headers(commonHeader)
      .check(status is 200))
    .pause(3)
  val studioMonthlyContributions = scenario("Studio Details")

    .exec(http("/studio/1?month=March&year=2021- Get monthly contribution score for particular studio-")
      .get(baseURL + "/studio/1?month=March&year=2021")
      .formParam("month", "March")
      .formParam("year", "2021")
      .headers(commonHeader)
      .check(status is 200))
    .pause(3)
  val studioSummaryalltime = scenario("Studio Details")
    .exec(http("studioSummaryalltime- Get monthly contribution score for particular studio-")
      .get(baseURL + "/summary?period=alltime")
      .formParam("period", "alltime")
      .headers(commonHeader)
      .check(status is 200))
    .pause(3)
  val studioSummarymonthly = scenario("Studio Details")
    .exec(http("studioSummarymonthly- Get monthly contribution score for particular studio")
      .get(baseURL + "/summary?period=monthly")
      .formParam("period", "monthly")
      .headers(commonHeader)
      .check(status is 200))
    .pause(3)
}

