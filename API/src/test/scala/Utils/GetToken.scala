package API.Utils
object GetToken {


  val client_id: String = System.getProperty("leaderboard-ui")
 val client_secret: String = System.getProperty("8090ed15-4cd1-483c-9fee-2a8b35941852")
  val username: String = System.getProperty("testadmin")
  val password: String = System.getProperty("testadmin")
   val grant_type: String = System.getProperty("password")
 val tokenPath: String = "http://auth.knoldus.com/auth/realms/knoldus/protocol/openid-connect/token"



}