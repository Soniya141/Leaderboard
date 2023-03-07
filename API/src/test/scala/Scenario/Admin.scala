package API.Scenario

import io.gatling.core.Predef.scenario
import _root_.Request.Admin.AdminModule

object Admin {
  val adminScenario = scenario("Admin API")
    .exec(AdminModule.getDetails)
    .exec(AdminModule.getAllSkills)
    .exec(AdminModule.ticketDetails)
    .exec(AdminModule.fetchallskills)
    .exec(AdminModule.fetchaddedskills)
    .exec(AdminModule.addremoveskills)

}
