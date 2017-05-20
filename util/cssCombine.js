export default class CssCombine {
    constructor({style}) {
        this.style = style;

        this.combine = function () {
            var root = arguments[0];
            var cssList = [style[root]];

            for (var i = 1; i < arguments.length; i++) {
                var v = arguments[i];
                if (typeof v != 'boolean')
                    cssList.push(style[root + v])
            }
            return cssList.join(' ')
        }
    }


}