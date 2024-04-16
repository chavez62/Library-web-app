export const oktaConfig = {
    clientId: '0oag0amoyc3wV5Dhu5d7',
    issuer: 'https://dev-53275729.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}