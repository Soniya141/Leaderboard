package Request.Leaderboard

import API.Utils.Environment.baseURL
import API.Utils.Headers.commonHeader
import io.gatling.core.Predef._
import io.gatling.http.Predef._


object Summarys {

  val reputation= scenario("Reputation")
    .exec(http("Reputation- Fetch monthly contributions and all-time contributions data")
      .get(baseURL + "/reputation")
      .headers(commonHeader)

      .check(status is 200))
    .pause(3)
  val dynamicScore = scenario("Studio score")
    .exec(http("Dynamic Score -Fetches all the points of Contribution")
      .get(baseURL + "/reputation/dynamicscoring")
      .headers(commonHeader)
      .check(status is 200))
      .pause(3)
  val WallOfFrame = scenario("Studio score")
    .exec(http("Hall of Frame-Fetches the top five monthly rankers for all the months in each year")
      .get(baseURL + "/walloffame/leader?year=2023")
      .headers(commonHeader)
      .check(status is 200))
    .pause(3)
  val redeemIndividual = scenario("Studio score")
    .exec(http("Individual Contribution-Retrieve the individual data of knolder like his email,contribution and the score of each contribution")
      .get(baseURL + "/redeemIndividual?knolderId=141")
      .formParam("KnolderId",1)
      .headers(commonHeader)
      .check(status is 200))
    .pause(3)
  val monthly = scenario("Studio score")
    .exec(http("Monthly Contribution-Fetch monthly data of user like contributions done in a month and scored according to contribution")
      .get(baseURL + "/reputation/1?month=January&year=2021")
      .formParam("month", "January")
      .formParam("year", "2021")
      .headers(commonHeader)
      .check(status is 200))
    .pause(3)
}
