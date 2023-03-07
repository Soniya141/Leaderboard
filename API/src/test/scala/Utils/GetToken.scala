package API.Utils

import io.gatling.http.Predef.http
import Request.Knolx.TokenModule.getAccessToken
import io.gatling.core.Predef.configuration

object GetToken {


  val client_id: String = System.getProperty("leaderboard-ui")
 val client_secret: String = System.getProperty("8090ed15-4cd1-483c-9fee-2a8b35941852")
  val username: String = System.getProperty("bhavya")
  val password: String = System.getProperty("india1978")
   val grant_type: String = System.getProperty("password")
 val tokenPath = "https://auth.knoldus.com/auth/realms/knoldus/protocol/openid-connect/token"
 val httpConf = http.baseUrl("https://auth.knoldus.com/auth/realms/knoldus/protocol/openid-connect/token")



}