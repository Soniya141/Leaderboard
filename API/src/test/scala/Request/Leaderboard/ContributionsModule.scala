package Request.Leaderboard

import API.Utils.Environment.baseURL
import API.Utils.Headers.commonHeader
import io.gatling.core.Predef.{feed, _}
import io.gatling.http.Predef._


object ContributionsModule {

  //val sentHeaders = Map("Authorization" -> "bearer ${token}")

  val approvalContributions = scenario("Replay all contributions")
    .exec(http("/contribution/allContribution?pageNumber=1&limit=1000-Fetch all the other contributions which are available there for approval")
      .get(baseURL + "/contribution/allContribution?pageNumber=1&limit=1000")
      .formParam("pageNumber", 1)
      .formParam("limit", 1000)
      .headers(commonHeader)
      .check(status is 200))
    .pause(3)

  val addContributions = scenario("Add Contributions ")
    .exec(http("/contribution/addContribution-Helps us to add other contributions ")
      .post(baseURL + "/contribution/addContribution")
      .headers(commonHeader)
      .body(StringBody(
        """{
      "title": "test",
      "contributionType": "Book",
      "contributionDate": "2023-01-25 00:00:00",
      "urlDetails": "https://abc.18234com",
      "technologyDetails": "testing  kj mmhgfdfd wjhgfghjefgfd",
      "contributionId": 12761
  }""")).asJson
      .check(status is 200))
    .pause(3)
  val extraContributionKnolx= scenario("Contributions Knolx")
    .exec(http("Add extra knolx Contribution")
      .post(baseURL + "/contribution/knolx?highlightedAttendees=8&topViewers=8&tittle=1&sessionId=1")
      .headers(commonHeader)
      .formParam("Contribution ID", "1")
      .formParam("Knolder's ID", "132")
      .formParam("Name of knolder", "JohnLacalmita")
      .formParam("Knolder's Email", "John.lacalmita@knoldus.com")
      .formParam("Type Of Contribution", "Proposal")
      .formParam("Title of Contribution", "New Contribution")
      .formParam("Date Of Conribution", "12/04/2020")
      .formParam("Technology Details", "Akka")
      .formParam("URL Details", "https://abc")
      .formParam("Status of Contribution", "PENDING")
      .formParam("Knolder's studio", "Scala")
      .formParam("xref", "abc")
      .check(status is 200))
    .pause(3)
  val myContributions = scenario("get contributions")
    .exec(http("/Contribution/getknolderContribution-Fetch all the other contributions by the user")
      .get(baseURL + "/contribution/getKnolderContribution?pageNumber=1&limit=1000")
      .formParam("pageNumber", 1)
      .formParam("limit", 1000)
      .headers(commonHeader)
      .check(status is 200))
    .pause(3)
  val allContribution = scenario("contributions")
    .exec(http("/contribution/getApprovedContributionsForAll?pageNumber=1&limit=10000-Fetch other contributions are there which are approved")
      .get(baseURL + "/contribution/getApprovedContributionsForAll?pageNumber=1&limit=1000")
      .formParam("pageNumber", 1)
      .formParam("limit", 1000)

      .headers(commonHeader)
      .check(status is 200))
    .pause(3)
  val editProposalContribution = scenario("Update Scenario")
    .exec(http("/updateProposal?contributionId=12755-Helps us to edit the proposal contribution.")
    .put(baseURL + "/updateProposal?contributionId=12761")
      .formParam("contributionId",12761)
      .headers(commonHeader)
      .check(status is 200))
    .pause(3)
  val editContribution = scenario("Update Scenario")
    .exec(http("/updateProposal?contributionId=12755-Helps us to edit the proposal contribution.")
      .put(baseURL + "/contribution/editContribution")
      .body(StringBody(
        """{
            "title": "test",
            "contributionType": "Book",
            "contributionDate": "2023-01-25 00:00:00",
            "urlDetails": "https://abc.18234com",
            "technologyDetails": "testing  kj mmhgfdfd wjhgfghjefgfd",
            "contributionId": 12761
        }""")).asJson
      .headers(commonHeader)
      .check(status is 200))
    .pause(3)
  //Not Required
  val rejectContribution = scenario("Update Scenario")
    .exec(http("/contribution/reject?title=fghgf&contributionType=book&sessionId=1-Helps us to edit the proposal contribution.")
      .get(baseURL + "/contribution/reject?title=fghgf&contributionType=book")
      .formParam("title", "test")
      .formParam("contributionType", "book")
      .headers(commonHeader)
      .check(status is 200))
    .pause(3)
  val reviewedContribution = scenario("Update Scenario")
    .exec(http("/ReviewedContribution?pageNumber=1&limit=10-Helps us to edit the proposal contribution.")
      .get(baseURL + "/ReviewedContribution?pageNumber=1&limit=1000")
      .formParam("pageNumber", 1)
      .formParam("limit", 1000)
      .headers(commonHeader)
      .check(status is 200))
    .pause(3)
  val updateContributionstatus = scenario("Update Scenario")
    .exec(http("/contribution-Helps us to update the status of the contribution")
      .put(baseURL + "/contribution")
      .headers(commonHeader)
      .check(status is 200))
    .pause(3)
  val updateProposalContributionstatus = scenario("Update Scenario")
    .exec(http("/proposal/editProposal-Helps us to update the proposal status of the contribution")
      .put(baseURL + "/proposal/editProposal")
      .body(StringBody(
        """{
            "id": 12755,
            "status": "APPROVED",
            "remark": ""
        }""")).asJson
      .headers(commonHeader)
      .check(status is 200))
    .pause(3)
}

