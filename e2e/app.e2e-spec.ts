import { AngularAnalyticsEventPage } from './app.po';

describe('angular-analytics-event App', function() {
  let page: AngularAnalyticsEventPage;

  beforeEach(() => {
    page = new AngularAnalyticsEventPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
