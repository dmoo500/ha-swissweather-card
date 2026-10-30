export function sanitizeHtml(dirty: string): string {
  const template = document.createElement('template');
  template.innerHTML = dirty;
  template.content
    .querySelectorAll('script,style,iframe,object,embed,form,meta,base')
    .forEach(el => el.remove());
  template.content.querySelectorAll('*').forEach(el => {
    Array.from(el.attributes).forEach(attr => {
      if (/^on/i.test(attr.name)) el.removeAttribute(attr.name);
    });
    if (el.tagName === 'A') {
      const href = el.getAttribute('href') ?? '';
      if (!/^https?:\/\//i.test(href)) el.removeAttribute('href');
    }
  });
  const div = document.createElement('div');
  div.appendChild(template.content);
  return div.innerHTML;
}
