import { writable, derived } from 'svelte/store';

export const transactions = writable([]);

export const postTransactions = async (file) => {
  const formData = new FormData();
  formData.append('dataFile', file);
	const url = `http://127.0.0.1:3001`;
	const res = await fetch(url, {
    method: 'POST',
    body: formData
  });
	const data = await res.json();

  console.log(data.transactions);
	transactions.set(data);
};
