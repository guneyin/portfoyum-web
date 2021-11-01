import { writable } from 'svelte/store';
import { browser } from '$app/env';

const getTransactions = () => browser && (JSON.parse(localStorage.getItem("transactions")) || []);

export const transactions = writable(getTransactions());
transactions.subscribe( val => browser && (localStorage.setItem("transactions", JSON.stringify(val))));

export const postTransactions = async (file) => {
  const formData = new FormData();
  formData.append('dataFile', file);
	const url = `http://127.0.0.1:3001`;
	const res = await fetch(url, {
    method: 'POST',
    body: formData
  });
	const data = await res.json();

  console.log(data);
	transactions.set(data);
};
