package API.Scenario

import io.gatling.core.Predef.scenario
import _root_.Request.TicketService.HelpDesk
object Helpdesk {

  val helpdeskScenario = scenario("Contribution API")
    .exec(HelpDesk.ticketAssignedtome)
    .exec(HelpDesk.ticketRaisedByMe)
    .exec(HelpDesk.ticketAssignedtomeclosed)
    .exec(HelpDesk.ticketRaisedByMeClosed)
//    .exec(HelpDesk.createNewTicket)
}
