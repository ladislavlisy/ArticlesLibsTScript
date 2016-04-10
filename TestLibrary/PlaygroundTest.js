/**
 * Created by ladislavlisy on 25.03.16.
 */
///<reference path='../typings/node/node.d.ts'/>
///<reference path='../typings/should/should.d.ts'/>
///<reference path='../typings/mocha/mocha.d.ts'/>
require("should");
var ns = require("../LibraryCode/Playground");
describe("TestLibrary", function () {
    it("Should_Return_53_For_Articles_Length", function () {
        var articlesAll = ns.Configure.ConfigureArticles();
        var expected = 53;
        expected.should.equal(articlesAll.length);
    });
});
