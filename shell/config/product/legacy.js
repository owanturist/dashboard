import { LEGACY } from '@shell/store/features';
import { DSL, IF_HAVE } from '@shell/store/type-map';

export const NAME = 'legacy';

export function init(store) {
  const {
    product,
    basicType,
    virtualType,
  } = DSL(store, NAME);

  product({
    weight:              80,
    ifFeature:           LEGACY,
    showNamespaceFilter: true,
    inExplorer:          true,
  });

  virtualType({
    labelKey:   'legacy.alerts',
    name:       'v1-alerts',
    group:      'Root',
    namespaced: true,
    weight:     111,
    route:      { name: 'c-cluster-legacy-pages-page', params: { page: 'alerts' } },
    exact:      true
  });

  virtualType({
    labelKey:   'legacy.catalogs',
    name:       'v1-catalogs',
    group:      'Root',
    namespaced: true,
    weight:     111,
    route:      { name: 'c-cluster-legacy-pages-page', params: { page: 'catalogs' } },
    exact:      true
  });

  virtualType({
    labelKey:   'legacy.notifiers',
    name:       'v1-notifiers',
    group:      'Root',
    namespaced: true,
    weight:     111,
    route:      { name: 'c-cluster-legacy-pages-page', params: { page: 'notifiers' } },
    exact:      true
  });

  virtualType({
    ifHave:     IF_HAVE.PROJECT,
    labelKey:   'legacy.project.label',
    namespaced: true,
    name:       'v1-project',
    weight:     105,
    route:      { name: 'c-cluster-project-apps' },
    exact:      true,
    overview:   false,
  });

  virtualType({
    ifHave:     IF_HAVE.NO_PROJECT,
    labelKey:   'legacy.project.label',
    namespaced: true,
    name:       'v1-project-overview',
    weight:     105,
    route:      { name: 'c-cluster-legacy-project' },
    exact:      true,
    overview:   false,
  });

  basicType([
    'v1-alerts',
    'v1-catalogs',
    'v1-notifiers',
    'v1-project-overview'
  ]);

  // Project Pages

  virtualType({
    ifHave:     IF_HAVE.PROJECT,
    labelKey:   'legacy.alerts',
    namespaced: true,
    name:       'project-alerts',
    weight:     105,
    route:      { name: 'c-cluster-legacy-project-page', params: { page: 'alerts' } },
    exact:      true,
    overview:   false,
  });

  virtualType({
    ifHave:     IF_HAVE.PROJECT,
    labelKey:   'legacy.apps',
    namespaced: true,
    name:       'project-apps',
    weight:     110,
    route:      { name: 'c-cluster-legacy-project-page', params: { page: 'apps' } },
    exact:      true,
    overview:   false,
  });

  virtualType({
    ifHave:     IF_HAVE.PROJECT,
    labelKey:   'legacy.catalogs',
    namespaced: true,
    name:       'project-catalogs',
    weight:     105,
    route:      { name: 'c-cluster-legacy-project-page', params: { page: 'catalogs' } },
    exact:      true,
    overview:   false,
  });

  virtualType({
    ifHave:     IF_HAVE.PROJECT,
    labelKey:   'legacy.monitoring',
    namespaced: true,
    name:       'project-monitoring',
    weight:     105,
    route:      { name: 'c-cluster-legacy-project-page', params: { page: 'monitoring' } },
    exact:      true,
    overview:   false,
  });

  virtualType({
    ifHave:     IF_HAVE.PROJECT,
    labelKey:   'legacy.secrets',
    namespaced: true,
    name:       'project-secrets',
    weight:     104,
    route:      { name: 'c-cluster-legacy-project-page', params: { page: 'secrets' } },
    exact:      true,
    overview:   false,
  });

  virtualType({
    ifHave:     IF_HAVE.PROJECT,
    labelKey:   'legacy.configMaps',
    namespaced: true,
    name:       'project-config-maps',
    weight:     104,
    route:      { name: 'c-cluster-legacy-project-page', params: { page: 'config-maps' } },
    exact:      true,
    overview:   false,
  });

  basicType([
    'project-apps',
    'project-alerts',
    'project-catalogs',
    'project-config-maps',
    'project-monitoring',
    'project-secrets',
  ], 'Project');
}
