/**
 * Created by ladislavlisy on 25.03.16.
 */
///<reference path='../typings/node/node.d.ts'/>
///<reference path='../typings/should/should.d.ts'/>
///<reference path='../typings/mocha/mocha.d.ts'/>

require("should");

import * as ns from "../LibraryCode/Playground";

describe("TestLibrary", () => {

    it("Should_Return_53_For_Articles_Length", () => {
        let articlesAll: Array<ns.Article> = ns.Configure.ConfigureArticles();
        let expected = 53;
        expected.should.equal(articlesAll.length);
    });

});
