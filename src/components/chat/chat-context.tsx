import { createContext, MutableRefObject, ReactNode, useContext, useRef } from "react"

export interface IChatContext {
  promptRef?: MutableRefObject<HTMLInputElement | null>
  focusPromptInput(): void
}

const Context = createContext<IChatContext>({} as IChatContext)

// eslint-disable-next-line react-refresh/only-export-components
export const useChatContext = () => useContext(Context)

export function ChatContextProvider(props: { children?: ReactNode }) {
  // valores
  const promptRef = useRef<HTMLInputElement>(null)

  function focusPromptInput () {
    promptRef.current?.focus()
  }

  // objeto do provider
  const value = {
    promptRef,
    focusPromptInput
  } satisfies IChatContext

  return <Context.Provider value={value}>
    {props.children}
  </Context.Provider>
}