var path = require('path');
const puppeteer = require('puppeteer');
const { checkAndGenerate, generateText } = require('./util');

const TIMEOUT = 10000;

test('should outcome name and age', () => {
    const text = generateText('Max', 25);
    expect(text).toBe('Max (25 years old)');
});

test('should generate output text', () => {
    const text = checkAndGenerate('Max', 25);
    expect(text).toBe('Max (25 years old)');
})

test('should click around',  async () => {
    const browser = await puppeteer.launch({
        headless: false,
        // slowMo: 80, // to make the ui automation slow
        args: ['--window-size=1920,1080']
    });
    
    const page = await browser.newPage();
    const dirPath = path.resolve(__dirname);
        
    await page.goto(`file://${dirPath}/index.html`);
    await page.click('input#name');
    await page.type('input#name', 'Anna');
    await page.click('input#age');
    await page.type('input#age', '28');
    await page.click('#btnAddUser');

    const finalText = await page.$eval('.user-item', el => el.textContent);
    expect(finalText).toBe('Anna (28 years old)')
}, TIMEOUT);