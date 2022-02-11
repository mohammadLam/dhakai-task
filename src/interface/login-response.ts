export default interface Response {
  message: 'SUCCESS' | 'ERROR'
  statusCode: number
  result: Result
}

interface Result {
  token: string
  refreshToken: string
  expiresAt: string
}
