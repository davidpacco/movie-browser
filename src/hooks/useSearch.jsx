import { useState, useRef, useEffect } from "react"

export function useSearch() {
  const [search, setSearch] = useState('')
  const isInitialInput = useRef(true)

  useEffect(() => {
    if (isInitialInput.current) {
      isInitialInput.current = search === ''
      return
    }
    if (search === '') return
  }, [search])

  return { search, setSearch, }
}