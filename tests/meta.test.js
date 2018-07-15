/**
 * @jest-environment jsdom
 */
import 'jest-dom/extend-expect';
import { JSDOM } from 'jsdom';
import fs from 'fs';


describe('Meta', () => {
    it('Page title exists', () => {
        let content = fs.readFileSync('tests/test.html', 'utf8')
        console.log(content);

        document.body.innerHTML = content;

        let mapId = document.getElementById('map');

        expect(mapId).not.toBeNull();
    })
})

test('use jsdom in this test file', () => {
    const element = document.createElement('div');
    expect(element).not.toBeNull();
});