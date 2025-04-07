class TokenStorageService {
  private storageKeys = {
    access: 'tires',
    // access_refresh: 'tires_refresh',
  }

  getToken() {
    return localStorage.getItem(this.storageKeys.access) || null
  }

  setToken(access: string) {
    localStorage.setItem(this.storageKeys.access, access)
    // localStorage.setItem(this.storageKeys.access_refresh, refresh)
  }

  // getRefresh() {
  //   return localStorage.getItem(this.storageKeys.access_refresh) || null
  // }

  clearToken() {
    localStorage.removeItem(this.storageKeys.access)
    // localStorage.removeItem(this.storageKeys.access_refresh)
  }
}

export default new TokenStorageService()
