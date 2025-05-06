import { useEffect, useState } from 'react';
import { isConnected, connect, getUserInfo } from '@stellar/freighter-api';

export default function App() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    checkConnection();
  }, []);

  async function checkConnection() {
    const connected = await isConnected();
    if (connected) {
      const info = await getUserInfo();
      setWalletAddress(info.publicKey);
      setWalletConnected(true);
    }
  }

  async function connectWallet() {
    try {
      await connect();
      await checkConnection();
    } catch (e) {
      setStatus('Bağlantı reddedildi.');
    }
  }

  function handleFreeze() {
    setStatus('Freeze fonksiyonu (örnek) tetiklendi.');
  }

  function handleUnfreeze() {
    setStatus('Unfreeze fonksiyonu (örnek) tetiklendi.');
  }

  function handleTransfer() {
    setStatus('Transfer fonksiyonu (örnek) tetiklendi.');
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Final Project Frontend</h1>
      {!walletConnected ? (
        <button
          onClick={connectWallet}
          className="px-4 py-2 bg-blue-600 text-white rounded shadow"
        >
          Cüzdanı Bağla
        </button>
      ) : (
        <div className="space-y-4">
          <div className="text-sm text-gray-600">Bağlı Cüzdan: {walletAddress}</div>
          <button onClick={handleFreeze} className="px-4 py-2 bg-red-500 text-white rounded">
            Freeze Account
          </button>
          <button onClick={handleUnfreeze} className="px-4 py-2 bg-green-500 text-white rounded">
            Unfreeze Account
          </button>
          <button onClick={handleTransfer} className="px-4 py-2 bg-yellow-500 text-black rounded">
            Transfer Token
          </button>
        </div>
      )}
      {status && <p className="mt-6 text-gray-700">{status}</p>}
    </div>
  );
}
