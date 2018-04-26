import Component from '@ember/component';
import TableCommon from '../mixins/table-common';
import { computed } from '@ember/object';

export default Component.extend(TableCommon, {
  currentScrollOffset: 0,
  scrollTo: 0,
  scrollToRow: null,

  columns: computed(function() {
    return [
      { label: 'Accrued', valuePath: 'accrued' },
      { label: 'Coupon', valuePath: 'coupon' },
      { label: 'Cov', valuePath: 'cov' },
      { label: 'Currency', valuePath: 'currency' },
      { label: 'CUSIP', valuePath: 'cusip' },
      { label: 'Description', valuePath: 'description' },
      { label: 'Dur', valuePath: 'dur' },
      { label: 'Market Value', valuePath: 'market_value' },
      { label: 'Maturity', valuePath: 'maturity' },
      { label: 'OAS', valuePath: 'oas' },
      { label: 'Par Value', valuePath: 'par_value' },
      { label: 'PD', valuePath: 'pd' },
      { label: 'Price', valuePath: 'price' },
      { label: 'Quality', valuePath: 'quality' },
      { label: 'Sector', valuePath: 'sector' },
      { label: 'Sprd Dur', valuePath: 'sprd_dur' },
      { label: 'Weight', valuePath: 'weight' },
      { label: 'Yield', valuePath: 'yield' }
    ];
  })
});
