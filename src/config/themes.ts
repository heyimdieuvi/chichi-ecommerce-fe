interface Theme {
  colors: {
    primary: string
    secondary: string
    background: string
    text: string
    error: string
    success: string
  }
  fonts: {
    primary: string
    secondary: string
  }
  spacing: {
    small: string
    medium: string
    large: string
  }
}

export const lightTheme: Theme = {
  colors: {
    primary: '#2563eb',
    secondary: '#fbbf24',
    background: '#ffffff',
    text: '#1f2937',
    error: '#ef4444',
    success: '#10b981',
  },
  fonts: {
    primary: "'Roboto', sans-serif",
    secondary: "'Open Sans', sans-serif",
  },
  spacing: {
    small: '0.5rem',
    medium: '1rem',
    large: '1.5rem',
  },
}

export const darkTheme: Theme = {
  colors: {
    primary: '#3b82f6',
    secondary: '#f59e0b',
    background: '#1f2937',
    text: '#f3f4f6',
    error: '#f87171',
    success: '#34d399',
  },
  fonts: {
    primary: "'Roboto', sans-serif",
    secondary: "'Open Sans', sans-serif",
  },
  spacing: {
    small: '0.5rem',
    medium: '1rem',
    large: '1.5rem',
  },
}

export const defaultTheme = lightTheme
