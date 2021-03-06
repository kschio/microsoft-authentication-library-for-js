// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

/**
 * @hidden
 */
export class Constants {
  static get errorDescription(): string { return "error_description"; }
  static get error(): string { return "error"; }
  static get scope(): string { return "scope"; }
  static get acquireTokenUser(): string { return "msal.acquireTokenUser"; }
  static get clientInfo(): string { return "client_info"; }
  static get clientId(): string { return "clientId"; }
  static get authority(): string { return "msal.authority"; }
  static get idToken(): string { return "id_token"; }
  static get accessToken(): string { return "access_token"; }
  static get expiresIn(): string { return "expires_in"; }
  static get sessionState(): string { return "session_state"; }
  static get msalClientInfo(): string { return "msal.client.info"; }
  static get msalError(): string { return "msal.error"; }
  static get msalErrorDescription(): string { return "msal.error.description"; }
  static get msalSessionState(): string { return "msal.session.state"; }
  static get tokenKeys(): string { return "msal.token.keys"; }
  static get accessTokenKey(): string { return "msal.access.token.key"; }
  static get expirationKey(): string { return "msal.expiration.key"; }
  static get stateLogin(): string { return "msal.state.login"; }
  static get stateAcquireToken(): string { return "msal.state.acquireToken"; }
  static get stateRenew(): string { return "msal.state.renew"; }
  static get nonceIdToken(): string { return "msal.nonce.idtoken"; }
  static get userName(): string { return "msal.username"; }
  static get idTokenKey(): string { return "msal.idtoken"; }
  static get loginRequest(): string { return "msal.login.request"; }
  static get loginError(): string { return "msal.login.error"; }
  static get renewStatus(): string { return "msal.token.renew.status"; }
  static get msal(): string { return "msal"; }
  static get no_user(): string { return "NO_USER"; }
  static get login_hint(): string { return "login_hint"; }
  static get domain_hint(): string { return "domain_hint"; }
  static get organizations(): string { return "organizations"; }
  static get consumers(): string { return "consumers"; }
  static get consumersUtid(): string { return "9188040d-6c67-4c5b-b112-36a304b66dad"; }
  static get sid(): string { return "sid"; }
  static get upn(): string { return "upn"; }
  static get adalIdToken(): string { return "adal.idtoken"; }
  static get prompt_select_account(): string { return "&prompt=select_account"; }
  static get prompt_none(): string { return "&prompt=none"; }
  static get prompt(): string { return "prompt"; }
  static get response_mode_fragment(): string { return "&response_mode=fragment"; }
  static get resourceDelimeter(): string { return "|"; }
  static get tokenRenewStatusCancelled(): string { return "Canceled"; }
  static get tokenRenewStatusCompleted(): string { return "Completed"; }
  static get tokenRenewStatusInProgress(): string { return "In Progress"; }
  private static _popUpWidth: number = 483;
  static get popUpWidth(): number { return this._popUpWidth; }
  static set popUpWidth(width: number) {
    this._popUpWidth = width;
  }
  private static _popUpHeight: number = 600;
  static get popUpHeight(): number { return this._popUpHeight; }
  static set popUpHeight(height: number) {
    this._popUpHeight = height;
  }
  static get login(): string { return "LOGIN"; }
  static get renewToken(): string { return "RENEW_TOKEN"; }
  static get unknown(): string { return "UNKNOWN"; }
  static get urlHash(): string { return "msal.urlHash"; }
  static get angularLoginRequest(): string { return "msal.angular.login.request"; }
  static get userIdentifier(): string { return "userIdentifier"; }
  static get common(): string { return "common"; }
}

/**
 * @hidden
 */
export class ErrorCodes {
  static get loginProgressError(): string { return "login_progress_error"; }
  static get acquireTokenProgressError(): string { return "acquiretoken_progress_error"; }
  static get inputScopesError(): string { return "input_scopes_error"; }
  static get endpointResolutionError(): string { return "endpoints_resolution_error"; }
  static get popUpWindowError(): string { return "popup_window_error"; }
  static get userLoginError(): string { return "user_login_error"; }
  static get userCancelledError(): string { return "user_cancelled"; }
}

/**
 * @hidden
 */
export class ErrorDescription {
  static get loginProgressError(): string { return "Login is in progress"; }
  static get acquireTokenProgressError(): string { return "Acquire token is in progress"; }
  static get inputScopesError(): string { return "Invalid value of input scopes provided"; }
  static get endpointResolutionError(): string { return "Endpoints cannot be resolved"; }
  static get popUpWindowError(): string { return "Error opening popup window. This can happen if you are using IE or if popups are blocked in the browser."; }
  static get userLoginError(): string { return "User login is required"; }
  static get userCancelledError(): string { return "User closed the popup window and cancelled the flow"; }
}

/**
 * @hidden
 */
export const CacheKeys = {
    AUTHORITY: "msal_authority",
    ACQUIRE_TOKEN_USER: "msal.acquireTokenUser"
};
