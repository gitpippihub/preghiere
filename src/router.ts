// Simple SPA Router

export class Router {
  private routes: Map<string, () => void> = new Map();
  private currentPath: string = '/';

  constructor() {
    window.addEventListener('popstate', () => this.handleRoute());
  }

  public register(path: string, handler: () => void): void {
    this.routes.set(path, handler);
  }

  public navigate(path: string): void {
    window.history.pushState({}, '', path);
    this.currentPath = path;
    this.handleRoute();
  }

  private handleRoute(): void {
    const path = window.location.pathname;
    
    // Match exact routes
    if (this.routes.has(path)) {
      this.routes.get(path)!();
      return;
    }

    // Match dynamic routes (e.g., /prayer/prayer-id)
    for (const [route, handler] of this.routes.entries()) {
      if (route.includes(':')) {
        const routePattern = route.replace(/:[^/]+/g, '([^/]+)');
        const regex = new RegExp(`^${routePattern}$`);
        
        if (regex.test(path)) {
          handler();
          return;
        }
      }
    }

    // Default to home if no match
    const homeHandler = this.routes.get('/');
    if (homeHandler) {
      homeHandler();
    }
  }

  public start(): void {
    this.handleRoute();
  }

  public getParam(paramName: string): string | null {
    const path = window.location.pathname;
    const parts = path.split('/').filter(p => p);
    
    // Simple implementation - assumes route like /prayer/:id
    if (paramName === 'id' && parts.length >= 2) {
      return parts[parts.length - 1];
    }
    
    return null;
  }
}

export const router = new Router();
