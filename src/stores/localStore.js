import { writable } from 'svelte/store';
import { browser } from '$app/env';

export const localStore = (key, initial) => {

  const toString = (value) => JSON.stringify(value, null, 2)
  const toObj = JSON.parse

  if (browser && (localStorage.getItem(key)) === null) {
    browser && (localStorage.setItem(key, toString(initial)))
  }

  const saved = toObj(browser && (localStorage.getItem(key)))

  const { subscribe, set, update } = writable(saved)

  return {
    subscribe,
    set: (value) => {
      browser && (localStorage.setItem(key, toString(value)))
      return set(value)
    },
    update
  }
}
