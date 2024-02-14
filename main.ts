import { Hono } from 'hono/mod';
import { logger, poweredBy } from 'hono/middleware';

const app = new Hono();

app.use('*', logger(), poweredBy());
// TODO: add favicon
// app.all('/favicon.ico', serveStatic('./public/favicon.ico'));

app.get('/', (c) => {
  return c.redirect('https://pulsate.dev', 302);
});

app.get('/discord', (c) => {
  return c.redirect('https://discord.gg/Pf5EFQ5zbj', 302);
});

app.get('/github', (c) => {
  return c.redirect('https://github.com/pulsate-dev/', 302);
});

app.get('/x', (c) => {
  return c.redirect('https://x.com/PulsateDev', 302);
});

app.get('/youtube', (c) => {
  return c.redirect('https://youtube.com/@pulsate-dev', 302);
});

app.get('/community', (c) => {
  return c.redirect('https://github.com/orgs/pulsate-dev/discussions', 302);
});

// TODO: replace pulsate.dev/code-of-conduct
app.get('/rules', (c) => {
  return c.redirect(
    'https://github.com/pulsate-dev/.github/blob/main/CODE_OF_CONDUCT.md',
    302,
  );
});

// TODO: replace pulsate.dev/code-of-conduct-ja
app.get('/rules-ja', (c) => {
  return c.redirect(
    'https://github.com/pulsate-dev/.github/blob/main/CODE_OF_CONDUCT_JA.md',
    302,
  );
});

Deno.serve(app.fetch);
