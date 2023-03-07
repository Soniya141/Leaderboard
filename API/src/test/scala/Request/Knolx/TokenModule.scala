
package Request.Knolx

//
//import API.Utils.Environment.baseURL
import API.Utils.GetToken
import API.Utils.Headers.commonHeader
import com.typesafe.scalalogging.LazyLogging
import io.gatling.core.Predef._
import io.gatling.http.Predef._

import java.io.{BufferedWriter, FileWriter}
import java.lang.System.console

object TokenModule {
//  private var token: String = ""
  val getAccessToken = scenario("token")
    .exec(http("Get access token")

      .post("https://auth.knoldus.com/auth/realms/knoldus/protocol/openid-connect/token")

      .body(StringBody(
        s"""{
               "client_id": "${GetToken.client_id}",
               "client_secret": "${GetToken.client_secret}",
               "username": "${GetToken.username}",
               "password": "${GetToken.password}",
               "grant_type": "${GetToken.grant_type}",

             }"""
      ))
      .headers(Map("Content-Type" -> "application/x-www-form-urlencoded"))
      .headers(Map("Content-Length" -> "<calculated when request is sent>"))
      .check(jsonPath("$..access_token").saveAs("Access_Token"))
      .check(status.is(200)))

}

