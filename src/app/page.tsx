'use client';
import React, { useState } from 'react';
import Dropdown from './components/Dropdown';
import CardList from './components/CardList';
import "./page.css";

export default function Page() {
  const [selectedHp, setSelectedHp] = useState<string>('');

  return (
      <main>
        <div className='mainContainer'>
        <h1>Card Browser</h1>
        <Dropdown onSelect={setSelectedHp} />
        {selectedHp && <CardList hp={selectedHp} />}
        </div>
      </main>
  );
}
