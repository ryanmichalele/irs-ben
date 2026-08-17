import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'fgt58spn',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

function key() {
  return Math.random().toString(36).slice(2, 12) + Date.now().toString(36);
}

const doc = {
  _type: 'clientReviewReport',
  _id: 'singleton-clientReviewReport',
  reportTitle: 'CLIENT ACCOUNT REVIEW REPORT',
  reportDate: 'August 17, 2026',
  clientName: 'SHUI MANTODD',
  userId: 'CR-2026-9999-A1GMTQ',
  taxYear: '2026',
  accountSummary: [
    { _key: key(), _type: 'object', institution: 'Capital One NA', accountStatus: 'Flagged' },
    { _key: key(), _type: 'object', institution: 'Chase Bank', accountStatus: 'Flagged' },
    { _key: key(), _type: 'object', institution: 'Bank of America', accountStatus: 'Blocked' },
  ],
  transactions: [
    { _key: key(), _type: 'object', transactionDate: 'August 13', amount: '$1,000,000', destination: 'Bank of Tehran', status: 'Under Review' },
    { _key: key(), _type: 'object', transactionDate: 'August 13', amount: '$700,000', destination: 'Bank of Tehran', status: 'Under Review' },
    { _key: key(), _type: 'object', transactionDate: 'August 14', amount: '$49,000', destination: 'Islamic Wellfare', status: 'Under Review' },
    { _key: key(), _type: 'object', transactionDate: 'August 13', amount: '$22,000', destination: 'Aid for Palestine--Transferred back to Sofi', status: 'Under Review' },
  ],
  alertTitle: 'ALERT NOTICE',
  alertNotice:
    'Your account has been flagged for unusual international activity. This may result in restrictions being placed on financial assets or account access while the matter is reviewed. Additional documentation or verification may be required if the matter remains unresolved.',
  advisoryTitle: 'ADVISORY NOTE',
  advisoryNote:
    'This report is provided for informational purposes only and does not constitute a legal determination of tax liability. Retain a copy for your records and consult an authorized tax, legal, or financial professional if assistance is required.',
  footerText: '',
  lastUpdated: new Date().toISOString(),
};

async function seed() {
  try {
    await client.createOrReplace(doc);
    console.log('Seeded singleton-clientReviewReport successfully');
  } catch (err) {
    console.error('Seed failed:', err.message);
    process.exit(1);
  }
}

seed();
