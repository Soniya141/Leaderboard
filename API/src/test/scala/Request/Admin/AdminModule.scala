package Request.Admin


import API.Utils.Environment.baseURL
import API.Utils.Headers.commonHeader
import io.gatling.core.Predef._
import io.gatling.http.Predef._
object AdminModule {
  val getDetails = scenario("Fetch open helpdesk tickets")
    .exec(http("Get Details of open ticket- Fetch open helpdesk tickets")
      .get("https://ticket-backend.qa.go1percent.com/tickets/getDetails?status=Open&limit=5&pageNumber=1")
      .formParam("limit",5)
      .formParam("pageNumber",1)

      .headers(commonHeader)
      .check(status is 200))
    .pause(3)
  val ticketDetails = scenario("Fetch open helpdesk tickets")
    .exec(http("Ticket Details- Fetch all the tickets of helpdesk- Open, close, overdue, unassigned")
      .get("https://ticket-backend.qa.go1percent.com/tickets/summary")
      .headers(commonHeader)
      .check(status is 200))
    .pause(3)
  val getAllSkills = scenario("Fetch open helpdesk tickets")
    .exec(http("Get all Skills- Fetch all the skills")
      .get(baseURL + "/getAllSkills")
      .headers(commonHeader)
      .check(status is 200))
    .pause(3)


  val fetchallskills = scenario("Fetch open helpdesk tickets")
    .exec(http("Fetch all skills- Fetch all skills")
      .get("https://backend-qa.knoldus.com/getSkillUsers?skills=01GRXM7F6GWEB8YRXQSJZZ6CB0&compentancy=0&pageNumber=0&limit=500")
      .formParam("skills","01GRXM7F6GWEB8YRXQSJZZ6CB0")
      .formParam("skills","01GRXM7F6GWEB8YRXQSJZZ6CB0")
      .headers(commonHeader)
      .check(status is 200))
    .pause(3)
  val addremoveskills = scenario("Fetch open helpdesk tickets")
    .exec(http("Add and Remove Skills- Fetch added and removed skills ")
      .get(baseURL + "/skills")
      .body(StringBody(
        """{
            "knolder_id": 414,
            "studio": 17,
            "skillId": "",
            "skill": "testing",
            "status": "ADD",
            "compentancy": 2
        }""")).asJson
      .headers(commonHeader)
      .check(status is 200))
    .pause(3)
  val fetchaddedskills = scenario("Fetch Added skills")
    .exec(http("Fetch Added  Skills- Fetch added skills")
      .get(baseURL + "/skills?knolderid=414")
      .formParam("knolderid",414)

      .headers(commonHeader)
      .check(status is 200))
    .pause(3)
//
//  AdminModule fetch
//    update wordpress
}
