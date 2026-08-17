import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'irs-ben-studio',
  title: 'IRS BEN Studio',
  projectId: 'fgt58spn',
  dataset: 'production',
  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Client Account Review Report')
              .child(
                S.document()
                  .schemaType('clientReviewReport')
                  .documentId('singleton-clientReviewReport')
              ),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});
