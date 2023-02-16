package API.Utils

import Request.Knolx.Token.getAccessToken
import java.util

object Environment{
  val baseURL = scala.util.Properties.envOrElse("baseURL", "https://backend-qa.knoldus.com")
  val users = scala.util.Properties.envOrElse("numberOfUsers", "5000")
  val maxResponseTime = scala.util.Properties.envOrElse("maxResponseTime", "5000") // in milliseconds
//val tokenURL = String ="http://auth.knoldus.com/auth/realms/knoldus/protocol/openid-connect/token")token
//    .authorizationHeader(s"Bearer $access_token),
//      .baseURL("https://backend-qa.knoldus.com")
}