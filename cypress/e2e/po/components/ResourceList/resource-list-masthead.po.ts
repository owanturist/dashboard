import ComponentPo from '@/cypress/e2e/po/components/component.po';

export default class ResourceListMastheadPo extends ComponentPo {
  actions() {
    return this.self().get('.actions-container .actions .btn');
  }

  title() {
    return this.self().find('.title > h1').invoke('text');
  }
}
