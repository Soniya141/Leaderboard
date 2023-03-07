package API.Scenario

import Request.Leaderboard.TechHubModule
import io.gatling.core.Predef.scenario

object Techhub {
  val techhubScenario = scenario("Summary API")
    .exec(TechHubModule.myTechup)
    .exec(TechHubModule.approvalTechup)
    .exec(TechHubModule.allTechup)
    .exec(TechHubModule.draftTechup)
    .exec(TechHubModule.reviewTechup)

}
