import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'irs-ben-studio',
  title: 'IRS BEN Studio',
  projectId: 'fgt58spn',
  dataset: 'production',
  plugins: [structureTool()],
  document: {
    actions: (prev) =>
      prev.filter(
        (action) =>
          action.action === 'publish' ||
          action.action === 'discardChanges' ||
          action.action === 'restore'
      ),
  },
  schema: {
    types: schemaTypes,
  },
});
