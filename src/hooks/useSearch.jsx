import { useState, useRef, useEffect } from "react"

export function useSearch() {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isInitialInput = useRef(true)

  useEffect(() => {
    if (isInitialInput.current) {
      isInitialInput.current = search === ''
      return
    }
    if (search === '') {
      setError('Empty')
      return
    }
    setError(null)
  }, [search])

  return { search, setSearch, error }
}