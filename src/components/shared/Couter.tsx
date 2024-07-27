import { createSignal, type Component } from 'solid-js'

interface Props {
  initValue: number
}

export const Counter: Component<Props> = (props) => {
  const [counter, setCounter] = createSignal(props.initValue)

  return (
    <>
      <h1 class="text-4xl">Counter</h1>
      <h3 class="text-xl">Value: {counter()}</h3>

      <button
        onClick={() => setCounter((prev) => ++prev)}
        class="bg-blue-500 btn-primary p-2 mr-2 rounded-2xl"
      >
        +1
      </button>
      <button
        onClick={() => setCounter((prev) => --prev)}
        class="bg-blue-500 btn-primary p-2 mr-2 rounded-2xl"
      >
        -1
      </button>
    </>
  )
}
