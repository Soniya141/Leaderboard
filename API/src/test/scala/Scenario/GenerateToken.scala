package API.Scenario
import _root_.Request.Knolx.Token
import io.gatling.core.Predef.scenario
object GenerateToken {
  val generateTokenn = scenario("Scenario: Load Simulation With rampingUp Users")
//    .exec(session => {
//      val mytoken = session("accessToken") // -->Trying the capture the token here
//      println(mytoken.as[String])
//      session
//    })
    .exec(Token.getAccessToken)

}
