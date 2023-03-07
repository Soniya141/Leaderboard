package API.Scenario

import io.gatling.core.Predef.scenario
import Request.Knolx.TokenModule
object Tokenn {
  val tokenScenario = scenario("Token API")
    .exec(TokenModule.getAccessToken)
}
