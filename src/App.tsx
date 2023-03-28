import { useEffect } from 'react'

export function App() {
  function handleToggleTheme(theme: string) {
    localStorage.setItem('theme', theme)

    const html = document.querySelector('html')

    if (theme === 'light') {
      html?.style.setProperty('--gray1', '#fff')
    }

    if (theme === 'dark') {
      html?.style.setProperty('--gray1', '#000')
    }
  }

  function handleToggleColor(color: string) {
    localStorage.setItem('color', color)

    const html = document.querySelector('html')

    if (color === 'crimson') {
      console.log(color)

      html?.style.setProperty('--primary1', 'hsl(332, 100%, 99.4%)')
      html?.style.setProperty('--primary2', 'hsl(330, 100%, 98.4%)')
      html?.style.setProperty('--primary3', 'hsl(331, 85.6%, 96.6%)')
      html?.style.setProperty('--primary4', 'hsl(331, 78.1%, 94.2%)')
      html?.style.setProperty('--primary5', 'hsl(332, 72.1%, 91.1%)')
      html?.style.setProperty('--primary6', 'hsl(333, 67.0%, 86.7%)')
      html?.style.setProperty('--primary7', 'hsl(335, 63.5%, 80.4%)')
      html?.style.setProperty('--primary8', 'hsl(336, 62.3%, 72.9%)')
      html?.style.setProperty('--primary9', 'hsl(336, 80.0%, 57.8%)')
      html?.style.setProperty('--primary10', 'hsl(336, 73.7%, 53.5%)')
      html?.style.setProperty('--primary11', 'hsl(336, 75.0%, 47.2%)')
      html?.style.setProperty('--primary12', 'hsl(340, 65.0%, 14.5%)')
    }

    if (color === 'indigo') {
      html?.style.setProperty('--primary1', 'hsl(225, 60.0%, 99.4%)')
      html?.style.setProperty('--primary2', 'hsl(223, 100%, 98.6%)')
      html?.style.setProperty('--primary3', 'hsl(223, 98.4%, 97.1%)')
      html?.style.setProperty('--primary4', 'hsl(223, 92.9%, 95.0%)')
      html?.style.setProperty('--primary5', 'hsl(224, 87.1%, 92.0%)')
      html?.style.setProperty('--primary6', 'hsl(224, 81.9%, 87.8%)')
      html?.style.setProperty('--primary7', 'hsl(225, 77.4%, 82.1%)')
      html?.style.setProperty('--primary8', 'hsl(226, 75.4%, 74.5%)')
      html?.style.setProperty('--primary9', 'hsl(226, 70.0%, 55.5%)')
      html?.style.setProperty('--primary10', 'hsl(226, 58.6%, 51.3%)')
      html?.style.setProperty('--primary11', 'hsl(226, 55.0%, 45.0%)')
      html?.style.setProperty('--primary12', 'hsl(226, 62.0%, 17.0%)')
    }
  }

  useEffect(() => {
    function loadTheme() {
      const theme = localStorage.getItem('theme')
      const color = localStorage.getItem('color')

      if (!theme) {
        localStorage.setItem('theme', 'light')
      }

      if (!color) {
        localStorage.setItem('color', 'indigo')
      }

      handleToggleTheme(theme ?? 'light')
      handleToggleColor(color ?? 'indigo')
    }

    loadTheme()
  }, [])

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-1 flex-col gap-4">
      <div className="flex h-32 w-32 bg-primary-9" />

      <div className="flex">
        <button
          type="button"
          onClick={() => handleToggleTheme('light')}
          className="h-10 px-4 bg-gray-5 rounded-lg text-gray-12"
        >
          theme light
        </button>

        <button
          type="button"
          onClick={() => handleToggleTheme('dark')}
          className="h-10 px-4 bg-gray-12 rounded-lg text-gray-1"
        >
          theme dark
        </button>

        <button
          type="button"
          onClick={() => handleToggleColor('indigo')}
          className="h-10 px-4 bg-indigo-9 rounded-lg text-gray-1"
        >
          color indigo
        </button>

        <button
          type="button"
          onClick={() => handleToggleColor('crimson')}
          className="h-10 px-4 bg-crimson-9 rounded-lg text-gray-1"
        >
          color crimson
        </button>
      </div>
    </div>
  )
}
