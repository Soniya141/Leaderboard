package Request.Leaderboard


import API.Utils.Environment.baseURL
import API.Utils.Headers.commonHeader
import io.gatling.core.Predef._
import io.gatling.http.Predef._
object ProfileModule {
  val getProfile = scenario("Leaderboard APIs")
    .exec(http("Get Profile - Fetch user profile information")
    .get("https://backend-qa.knoldus.com/profile/getProfilePic?email=testadmin@knoldus.com")
      .headers(commonHeader)
    .formParam("email", "testadmin@knoldus.com")
      .check(status is 200))
    .pause(3)
  val reputation = scenario("Leaderboard APIs")
    .exec(http("Reputation - Fetch user contribution details")
      .get("https://backend-qa.knoldus.com/profile/getProfilePic?email=testadmin@knoldus.com")
      .headers(commonHeader)

      .check(status is 200))
    .pause(3)
  val monthlyReputation = scenario("Leaderboard APIs")
    .exec(http("Reputation - Fetch user monthly contribution details")
      .get("https://backend-qa.knoldus.com/reputation/414?month=march&year=2023")
      .headers(commonHeader)
      .formParam("month", "march")
      .formParam("year", "2023")
      .check(status is 200))
    .pause(3)
  val skills= scenario("Leaderboard APIs")
    .exec(http("Skills - Fetch all the users' skills that were added")
      .get("https://backend-qa.knoldus.com/skills?knolderid=414")
      .headers(commonHeader)
      .formParam("knolderid", "414")
      .check(status is 200))
    .pause(3)
}
