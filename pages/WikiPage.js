class WikiPage {
  constructor(page) {
    this.page = page;
    this.searchInput = page.locator('#searchInput');
    this.firstHeading = page.locator('#firstHeading');
  }

  async goto() {
    await this.page.goto('https://www.wikipedia.org');
  }

  async search(keyword) {
    await this.searchInput.fill(keyword);
    await this.searchInput.press('Enter');
  }
}

module.exports = { WikiPage };