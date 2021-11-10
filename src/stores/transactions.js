import { localStore } from "@stores/localStore";
import { get } from 'svelte/store';

export const transactions = localStore('transactions', []);

export const postTransactions = async (file) => {
  const formData = new FormData();
  formData.append('dataFile', file);
	const url = `http://127.0.0.1:3001/api/transactions/import`;
	const res = await fetch(url, {
    method: 'POST',
    body: formData
  });
	const data = await res.json();

  transactions.set(data)
};

export const saveTransactions = async () => {
  let data = get(transactions);

	const url = `http://127.0.0.1:3001/api/transactions/save`;
	const req = await fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  //const res = await req.json();

  console.log(data)

  return req.status == 200;
};

export const flushTransactions = () => {
  transactions.set([]);
}


/*
export const saveTransactions = async () => {
  let data = get(transactions);

  console.log(data);

	const url = `http://127.0.0.1:3001/api/transactions/save`;
	const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  return await res.json();
};
*/
/*
import { writable, get } from 'svelte/store';
import { browser } from '$app/env';

const getTransactions = () => browser && (JSON.parse(localStorage.getItem("transactions")) || []);

export const transactions = writable(getTransactions());
transactions.subscribe( val => browser && (localStorage.setItem("transactions", JSON.stringify(val))));

export const flushTransactions = () => {
  localStorage.removeItem("transactions");
  transactions.set([]);
}

export const postTransactions = async (file) => {
  const formData = new FormData();
  formData.append('dataFile', file);
	const url = `http://127.0.0.1:3001/api/transactions/import`;
	const res = await fetch(url, {
    method: 'POST',
    body: formData
  });
	const data = await res.json();

	transactions.set(data);
};

export const saveTransactions = async () => {
  let data = get(transactions);

  console.log(data);

	const url = `http://127.0.0.1:3001/api/transactions/save`;
	const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  return await res.json();
};
*/