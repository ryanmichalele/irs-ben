export default {
  name: 'clientReviewReport',
  title: 'Client Account Review Report',
  type: 'document',
  fields: [
    {
      name: 'reportTitle',
      title: 'Report Title',
      type: 'string',
      initialValue: 'CLIENT ACCOUNT REVIEW REPORT',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'reportDate',
      title: 'Report Date',
      type: 'string',
      initialValue: 'August 17, 2026',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
      initialValue: 'SHUI MANTODD',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'userId',
      title: 'User ID',
      type: 'string',
      initialValue: 'CR-2026-9999-A1GMTQ',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'taxYear',
      title: 'Tax Year',
      type: 'string',
      initialValue: '2026',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'accountSummary',
      title: 'Account Summary',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'institution',
              title: 'Institution',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'accountStatus',
              title: 'Account Status',
              type: 'string',
              options: {
                list: [
                  { title: 'Flagged', value: 'Flagged' },
                  { title: 'Blocked', value: 'Blocked' },
                  { title: 'Under Review', value: 'Under Review' },
                  { title: 'Cleared', value: 'Cleared' },
                  { title: 'Normal', value: 'Normal' },
                  { title: 'Restricted', value: 'Restricted' },
                  { title: 'Pending', value: 'Pending' },
                ],
              },
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: { title: 'institution', subtitle: 'accountStatus' },
            prepare({ title, subtitle }) {
              return { title: title, subtitle: subtitle };
            },
          },
        },
      ],
    },
    {
      name: 'transactions',
      title: 'Transaction Details',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'transactionDate',
              title: 'Date',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'amount',
              title: 'Amount',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'destination',
              title: 'Destination',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'status',
              title: 'Status',
              type: 'string',
              options: {
                list: [
                  { title: 'Under Review', value: 'Under Review' },
                  { title: 'Flagged', value: 'Flagged' },
                  { title: 'Blocked', value: 'Blocked' },
                  { title: 'Cleared', value: 'Cleared' },
                  { title: 'Completed', value: 'Completed' },
                  { title: 'Returned', value: 'Returned' },
                  { title: 'Rejected', value: 'Rejected' },
                ],
              },
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: { title: 'transactionDate', subtitle1: 'amount', subtitle2: 'status' },
            prepare({ title, subtitle1, subtitle2 }) {
              return { title: title + ' \u2014 ' + subtitle1, subtitle: subtitle2 };
            },
          },
        },
      ],
    },
    {
      name: 'alertTitle',
      title: 'Alert Heading',
      type: 'string',
      initialValue: 'ALERT NOTICE',
    },
    {
      name: 'alertNotice',
      title: 'Alert Notice Content',
      type: 'text',
      rows: 4,
      initialValue:
        'Your account has been flagged for unusual international activity. This may result in restrictions being placed on financial assets or account access while the matter is reviewed. Additional documentation or verification may be required if the matter remains unresolved.',
    },
    {
      name: 'advisoryTitle',
      title: 'Advisory Heading',
      type: 'string',
      initialValue: 'ADVISORY NOTE',
    },
    {
      name: 'advisoryNote',
      title: 'Advisory Note Content',
      type: 'text',
      rows: 4,
      initialValue:
        'This report is provided for informational purposes only and does not constitute a legal determination of tax liability. Retain a copy for your records and consult an authorized tax, legal, or financial professional if assistance is required.',
    },
    {
      name: 'footerText',
      title: 'Footer Text',
      type: 'text',
      rows: 2,
    },
    {
      name: 'lastUpdated',
      title: 'Last Updated',
      type: 'datetime',
    },
  ],
  preview: {
    select: { title: 'clientName', subtitle: 'userId' },
    prepare({ title, subtitle }) {
      return { title: title || 'Client Account Review Report', subtitle: subtitle };
    },
  },
};
