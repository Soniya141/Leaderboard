package Request.Leaderboard

import API.Utils.Environment.baseURL
import API.Utils.Headers.commonHeader
import io.gatling.core.Predef._
import io.gatling.http.Predef._

object TechHubModule {
  val myTechup = scenario("My Techup")
    .exec(http("My Techup - Fetch approved Techup")
      .get("https://techhub-backend.qa.go1percent.com/templates/my?state=approved&limit=20&page=1")
      .headers(commonHeader)
      .formParam("state","approved")
      .formParam("limit","20")
      .formParam("page","1")
      .check(status is 204))
    .pause(3)
  val allTechup = scenario("allTechup")
    .exec(http("AllTechup - Fetch all Techup")
      .get("https://techhub-backend.qa.go1percent.com/templates/orgWide?state=approved&limit=20&page=1")
      .headers(commonHeader)
      .formParam("state", "approved")
      .formParam("limit", "20")
      .formParam("page", "1")
      .check(status is 200))
    .pause(3)
  val approvalTechup = scenario("allTechup")
    .exec(http("Approval Techup - Fetch approval Techups")
      .get("https://techhub-backend.qa.go1percent.com/template/viewRequested?limit=20&page=1")
      .headers(commonHeader)

      .formParam("limit", "20")
      .formParam("page", "1")
      .check(status is 200))
    .pause(3)
  val reviewTechup = scenario("review Techup")
    .exec(http("Review Techup - Fetch review Techups")
      .get("https://techhub-backend.qa.go1percent.com/templates/my?state=review&limit=20&page=1")
      .headers(commonHeader)
      .formParam("state", "review")
      .formParam("limit", "20")
      .formParam("page", "1")
      .check(status is 204))
    .pause(3)
  val draftTechup = scenario("dreft Techup")
    .exec(http("draft Techup - Fetch dreft Techups")
      .get("https://techhub-backend.qa.go1percent.com/templates/my?state=draft&limit=20&page=1")
      .headers(commonHeader)
      .formParam("state", "draft")
      .formParam("limit", "20")
      .formParam("page", "1")
      .check(status is 200))
    .pause(3)
}
