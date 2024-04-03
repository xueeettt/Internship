import React from 'react';
import { createRoot } from 'react-dom/client';
import AppRouter from './router';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <AppRouter />
);