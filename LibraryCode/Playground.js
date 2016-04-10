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
    Configure.ConfigureContractTermArticles = function () {
        var configCategory = 0;
        var articleArray = [
            new Article(101, configCategory, Configure.EMPTY_PENDING_NAMES),
            new Article(110, configCategory, this.PendingArticleNames1(101)),
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
