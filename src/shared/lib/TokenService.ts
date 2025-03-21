class TokenStorageService {
  private storageKeys = {
    access: 'tires',
  }

  getToken() {
    return localStorage.getItem(this.storageKeys.access) || ''
  }

  setToken(access: string) {
    localStorage.setItem(this.storageKeys.access, access)
  }

  clearToken() {
    localStorage.removeItem(this.storageKeys.access)
  }
}

export default new TokenStorageService()
