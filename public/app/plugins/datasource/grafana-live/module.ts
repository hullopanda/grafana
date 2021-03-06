///<reference path="../../../headers/common.d.ts" />

import angular from 'angular';
import {GrafanaStreamDS} from './datasource';
import {QueryCtrl} from 'app/plugins/sdk';

class GrafanaQueryCtrl extends QueryCtrl {
  static templateUrl = 'partials/query.editor.html';
}

export {
  GrafanaStreamDS as Datasource,
  GrafanaQueryCtrl as QueryCtrl,
};

