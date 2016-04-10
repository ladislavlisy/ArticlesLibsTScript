/**
 * Created by ladislavlisy on 25.03.16.
 */
var Article = (function () {
    function Article(code, catg, pendings) {
        this.code = code;
        this.catg = catg;
        this.pendings = pendings;
    }
    Article.prototype.Code = function () {
        return this.code;
    };
    Article.prototype.Catg = function () {
        return this.catg;
    };
    Article.prototype.Pendings = function () {
        return this.pendings;
    };
    Article.prototype.compareTo = function (other) {
        var compareResult = (this.code === other.code) ? 0 : (this.code - other.code);
        return compareResult;
    };
    return Article;
})();
exports.Article = Article;
var Configure = (function () {
    function Configure() {
    }
    Configure.PendingArticleNames1 = function (code1) {
        return [code1];
    };
    Configure.PendingArticleNames2 = function (code1, code2) {
        return [code1, code2];
    };
    Configure.PendingArticleNames3 = function (code1, code2, code3) {
        return [code1, code2, code3];
    };
    Configure.PendingArticleNames4 = function (code1, code2, code3, code4) {
        return [code1, code2, code3, code4];
    };
    Configure.PendingArticleNames5 = function (code1, code2, code3, code4, code5) {
        return [code1, code2, code3, code4, code5];
    };
    Configure.PendingArticleNames9 = function (code1, code2, code3, code4, code5, code6, code7, code8, code9) {
        return [code1, code2, code3, code4, code5, code6, code7, code8, code9];
    };
    Configure.ConfigureContractTermArticles = function () {
        var configCategory = 0;
        var articleArray = [
            new Article(101, configCategory, Configure.EMPTY_PENDING_NAMES),
            new Article(110, configCategory, this.PendingArticleNames1(101)),
        ];
        return articleArray;
    };
    Configure.ConfigurePositionTimeArticles = function () {
        var configCategory = 2;
        var articleArray = [
            new Article(201, configCategory, PendingArticleNames1(110)),
            new Article(251, configCategory, PendingArticleNames1(201)),
            new Article(252, configCategory, PendingArticleNames2(251, 110)),
            new Article(253, configCategory, PendingArticleNames1(252)),
            new Article(254, configCategory, PendingArticleNames1(252)),
            new Article(255, configCategory, PendingArticleNames1(253)),
        ];
        return articleArray;
    };
    Configure.ConfigureGrossIncomeArticles = function () {
        var configCategory = 3;
        var articleArray = [
            new Article(202, configCategory, PendingArticleNames2(254, 255))
        ];
        return articleArray;
    };
    Configure.ConfigureTotalIncomeArticles = function () {
        var configCategory = 9;
        var articleArray = [
            new Article(501, configCategory, EMPTY_PENDING_NAMES),
            new Article(502, configCategory, PendingArticleNames9(501, 418, 433, 456, 341, 342, 351, 352, 361))
        ];
        return articleArray;
    };
    Configure.ConfigureNettoDeductsArticles = function () {
        var configCategory = 5;
        var articleArray = [
            new Article(418, configCategory, PendingArticleNames2(416, 417)),
            new Article(416, configCategory, PendingArticleNames1(414)),
            new Article(417, configCategory, PendingArticleNames1(415)),
            new Article(456, configCategory, PendingArticleNames1(454)),
            new Article(341, configCategory, PendingArticleNames1(311)),
            new Article(342, configCategory, PendingArticleNames1(312)),
            new Article(351, configCategory, PendingArticleNames1(321)),
            new Article(352, configCategory, PendingArticleNames1(322)),
            new Article(361, configCategory, PendingArticleNames1(331))
        ];
        return articleArray;
    };
    Configure.ConfigureBasisHealthArticles = function () {
        var configCategory = 5;
        var articleArray = [
            new Article(301, configCategory, EMPTY_PENDING_NAMES),
            new Article(305, configCategory, PendingArticleNames1(301)),
            new Article(311, configCategory, PendingArticleNames1(305)),
            new Article(312, configCategory, PendingArticleNames2(311, 305)),
            new Article(313, configCategory, PendingArticleNames2(311, 305))
        ];
        return articleArray;
    };
    Configure.ConfigureBasisSocialArticles = function () {
        var configCategory = 5;
        var articleArray = [
            new Article(302, configCategory, EMPTY_PENDING_NAMES),
            new Article(306, configCategory, PendingArticleNames1(302)),
            new Article(321, configCategory, PendingArticleNames1(306)),
            new Article(322, configCategory, PendingArticleNames1(306)),
            new Article(323, configCategory, PendingArticleNames1(306))
        ];
        return articleArray;
    };
    Configure.ConfigureBasisGarantArticles = function () {
        var configCategory = 5;
        var articleArray = [
            new Article(303, configCategory, EMPTY_PENDING_NAMES),
            new Article(307, configCategory, PendingArticleNames1(303)),
            new Article(331, configCategory, PendingArticleNames1(307)),
            new Article(332, configCategory, PendingArticleNames1(307))
        ];
        return articleArray;
    };
    Configure.ConfigureBasisTaxingArticles = function () {
        var configCategory = 5;
        var articleArray = [
            new Article(401, configCategory, EMPTY_PENDING_NAMES),
            new Article(402, configCategory, EMPTY_PENDING_NAMES),
            new Article(403, configCategory, EMPTY_PENDING_NAMES)
        ];
        return articleArray;
    };
    Configure.ConfigureBasisAdvancesArticles = function () {
        var configCategory = 5;
        var articleArray = [
            new Article(411, configCategory, PendingArticleNames1(401)),
            new Article(412, configCategory, PendingArticleNames1(402)),
            new Article(413, configCategory, PendingArticleNames1(403)),
            new Article(414, configCategory, PendingArticleNames3(411, 412, 413)),
            new Article(415, configCategory, PendingArticleNames1(414))
        ];
        return articleArray;
    };
    Configure.ConfigureBasisWithholdArticles = function () {
        var configCategory = 5;
        var articleArray = [
            new Article(451, configCategory, PendingArticleNames1(401)),
            new Article(452, configCategory, PendingArticleNames1(402)),
            new Article(453, configCategory, PendingArticleNames1(403)),
            new Article(454, configCategory, PendingArticleNames3(451, 452, 453))
        ];
        return articleArray;
    };
    Configure.ConfigureAllowanceTaxisArticles = function () {
        var configCategory = 5;
        var articleArray = [
            new Article(421, configCategory, PendingArticleNames1(411)),
            new Article(423, configCategory, PendingArticleNames1(411)),
            new Article(424, configCategory, PendingArticleNames1(411)),
            new Article(422, configCategory, PendingArticleNames1(411))
        ];
        return articleArray;
    };
    Configure.ConfigureRebateTaxisArticles = function () {
        var configCategory = 5;
        var articleArray = [
            new Article(431, configCategory, PendingArticleNames4(421, 418, 423, 424)),
            new Article(432, configCategory, PendingArticleNames3(422, 418, 431)),
            new Article(433, configCategory, PendingArticleNames3(418, 431, 432))
        ];
        return articleArray;
    };
    Configure.ConfigureArticles = function () {
        return this.ConfigureContractTermArticles();
    };
    Configure.EMPTY_PENDING_NAMES = [];
    return Configure;
})();
exports.Configure = Configure;
