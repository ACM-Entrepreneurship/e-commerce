import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

import Layout from '../components/Layout'

export default function profile({ user }) {
    
    return (
    <Layout>
      <div className="mb-5" data-testid="ssr">
        <h1 data-testid="ssr-title">Profile : Server-side Rendered Page</h1>
        <div data-testid="ssr-text">
          SHOPPING CART PAGE
        </div>
      </div>
      <div className="result-block-container" data-testid="ssr-json">
        <div className="result-block">
          <h6 className="muted">User prop</h6>
          <div>{JSON.stringify(user, null, 2)}</div>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps = withPageAuthRequired();