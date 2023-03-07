package Request.TicketService

 import API.Utils.Environment.baseURL
import API.Utils.Headers.commonHeader
import io.gatling.core.Predef.{feed, _}
import io.gatling.http.Predef._
object HelpDesk{
val ticketRaisedByMe =scenario("Ticked raised by me")
    .exec(http("Ticket Raised By Me [open] - Fetch alt the opened tickets which created by the users")
      .get("https://ticket-backend.qa.go1percent.com/tickets/my?status=Open&limit=5&page=1")
      .headers(commonHeader)
      .check(status is 200))
    .pause(3)
  val ticketRaisedByMeClosed= scenario("Closed Ticket of the user")
    .exec(http("Ticket Raised By Me[closed] - Fetch all the closed tickets which created by the user")
      .get("https://ticket-backend.qa.go1percent.com/tickets/my?status=Closed&limit=5&page=1")
      .headers(commonHeader)
      .check(status is 200))
    .pause(3)
  val ticketAssignedtome = scenario("Ticket assigned to the user")
    .exec(http("Assigned to me [open] - Fetch all the opened tickets that is assigned to the users")
      .get("https://ticket-backend.qa.go1percent.com/tickets/assigned/me?status=Open&limit=5&pageNumber=1")
      .headers(commonHeader)
      .check(status is 204))
    .pause(3)
  val ticketAssignedtomeclosed= scenario("Closed tickets that is assigned to the user")
    .exec(http("Assigned assigned to me[closed] - Fetch all the closed tickets which is assigned to the user")
      .get("https://ticket-backend.qa.go1percent.com/tickets/assigned/me?status=Closed&limit=5&pageNumber=1")
      .headers(commonHeader)
      .check(status is 204))
    .pause(3)
  val createNewTicket = scenario("Closed tickets that is assigned to the user")
    .exec(http("Create New Ticket- Fetch the new ticket which created by the user")
      .post("https://ticket-backend.qa.go1percent.com/tickets/submit")
      .queryParam("form_data","{\"title\":test}")
      .queryParam("form_data","{\"description\":test}")
      .queryParam("form_data","{\"subCategory\":Blog}")
      .queryParam("form_data","{\"priority\":High}")

      .headers(commonHeader)
      .check(status is 204))
    .pause(3)
}