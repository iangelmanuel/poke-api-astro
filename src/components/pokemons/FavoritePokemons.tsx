import type { FavoritePokemon } from '@/types/favorite-pokemon'
import { createSignal, For } from 'solid-js'
import { FavoritePokemonCard } from './FavoritePokemon'

const getLocalStoragePokemons = (): FavoritePokemon[] => {
  const favoritePokemons = JSON.parse(
    localStorage.getItem('favoritePokemons') || '[]'
  )

  return favoritePokemons
}

export const FavoritePokemons = () => {
  const [pokemons] = createSignal(getLocalStoragePokemons())
  return (
    <div class="grid grid-cols-2 sm:grid-cols-4">
      <For each={pokemons()}>
        {(pokemon) => <FavoritePokemonCard pokemon={pokemon} />}
      </For>
    </div>
  )
}
