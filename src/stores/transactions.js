import { localStore } from "@stores/localStore";
import { get } from 'svelte/store';

export const transactions = localStore('transactions', []);

export const postTransactions = async (file) => {
  const formData = new FormData();
  formData.append('dataFile', file);
	const url = `http://127.0.0.1:3001/api/v1/transactions/import`;
	const res = await fetch(url, {
    method: 'POST',
    body: formData
  });
	const data = await res.json();

  transactions.set(data)
};

export const saveTransactions = async () => {
  let data = get(transactions);

	const url = `http://127.0.0.1:3001/api/v1/transactions/save`;
	const req = await fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  return req.status == 200;
};

export const flushTransactions = () => {
  transactions.set([]);
}
