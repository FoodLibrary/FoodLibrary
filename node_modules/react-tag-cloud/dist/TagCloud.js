"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:jsx-no-multiline-js */
const d3_cloud_1 = __importDefault(require("d3-cloud"));
const PropTypes = __importStar(require("prop-types"));
const React = __importStar(require("react"));
const react_measure_1 = __importDefault(require("react-measure"));
class TagCloud extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            children: undefined,
            height: 0,
            width: 0,
            wrappedChildren: [],
        };
        this.mounted = false;
        this.resizeTimer = undefined;
        this.fontFamily = this.getStyleValue.bind(this, "fontFamily");
        this.fontSize = this.getStyleValue.bind(this, "fontSize");
        this.fontWeight = this.getStyleValue.bind(this, "fontWeight");
        this.fontStyle = this.getStyleValue.bind(this, "fontStyle");
        this.padding = this.getStyleValue.bind(this, "padding");
        this.rotate = (word) => {
            const value = word.child.props.rotate ||
                this.props.rotate ||
                TagCloud.defaultProps.rotate;
            if (typeof value === "function") {
                return value(word.child.props);
            }
            else {
                return value;
            }
        };
        this.text = (word) => {
            let text = word.child.props.text;
            if (!text) {
                const children = word.child.props.children;
                text = Array.isArray(children) ? children[0] : children;
            }
            return text;
        };
        this.onResize = (contentRect) => {
            const { width, height } = contentRect.bounds;
            if (this.state.width !== width || this.state.height !== height) {
                // Handle the initial size observer immediately
                if (!this.state.width && !this.state.height) {
                    this.setState({
                        height,
                        width,
                    });
                    return;
                }
                // Handle resizes with a debounce timeout of 100ms
                if (this.resizeTimer) {
                    clearTimeout(this.resizeTimer);
                }
                this.resizeTimer = setTimeout(() => {
                    this.resizeTimer = undefined;
                    if (this.mounted) {
                        this.setState({
                            children: undefined,
                            height,
                            width,
                        });
                    }
                }, 100);
            }
        };
    }
    componentDidMount() {
        this.mounted = true;
    }
    componentWillUnmount() {
        this.mounted = false;
    }
    calculateLayout(props, state) {
        const { children, spiral, random, style } = props;
        const { width, height } = state;
        const spiralAny = spiral;
        return new Promise((resolve) => {
            const words = React.Children.map(children, (child) => ({ child }));
            let res = d3_cloud_1.default()
                .size([width, height])
                .words(words)
                .text(this.text)
                .font(this.fontFamily)
                .fontStyle(this.fontStyle)
                .fontWeight(this.fontWeight)
                .fontSize(this.fontSize)
                .rotate(this.rotate)
                .padding(this.padding);
            if (spiralAny) {
                res = res.spiral(spiralAny);
            }
            if (random) {
                res = res.random(random);
            }
            res
                .on("end", (items) => {
                const newChildren = items.map((item, index) => {
                    let x = item.x;
                    x += item.x0;
                    x += width / 2;
                    let y = item.y;
                    y += item.y0;
                    y += height / 2;
                    const transform = `translate(${x}px,${y}px) rotate(${item.rotate}deg)`;
                    const newStyle = Object.assign({ position: "absolute" }, item.child.props.style, { MozTransform: transform, MsTransform: transform, OTransform: transform, WebkitTransform: transform, fontFamily: item.font, fontSize: item.size, fontStyle: item.style, fontWeight: item.weight, textAlign: "center", transform, transformOrigin: "center bottom", whiteSpace: "nowrap", width: item.width });
                    if (!newStyle.color &&
                        style.color &&
                        typeof style.color === "function") {
                        newStyle.color = style.color(item.child, index);
                    }
                    return React.cloneElement(item.child, Object.assign({}, item.child.props, { key: item.text, style: newStyle }), item.child.props.children);
                });
                resolve(newChildren);
            })
                .start();
        });
    }
    getStyleValue(propName, word) {
        const childValue = word.child.props.style
            ? word.child.props.style[propName]
            : undefined;
        let value = childValue ||
            this.props.style[propName] ||
            TagCloud.defaultProps.style[propName];
        if (typeof value === "function") {
            value = value(word.child.props);
        }
        if (propName === "fontSize") {
            value += 2;
        }
        return value;
    }
    render() {
        const _a = this.props, { style, children, // eslint-disable-line
        rotate, // eslint-disable-line
        spiral, // eslint-disable-line
        random } = _a, // eslint-disable-line
        props = __rest(_a, ["style", "children", "rotate", "spiral", "random"]);
        const { fontFamily, // eslint-disable-line
        fontSize, // eslint-disable-line
        fontWeight, // eslint-disable-line
        fontStyle, // eslint-disable-line
        color, // eslint-disable-line
        padding } = style, // eslint-disable-line
        otherStyle = __rest(style, ["fontFamily", "fontSize", "fontWeight", "fontStyle", "color", "padding"]);
        const { wrappedChildren } = this.state;
        return (React.createElement(react_measure_1.default, { bounds: true, onResize: this.onResize }, ({ measureRef }) => (React.createElement("div", Object.assign({ ref: measureRef }, props, { style: otherStyle }), wrappedChildren))));
    }
    componentDidUpdate() {
        const { width, height } = this.state;
        const { children } = this.props;
        if (width && height && children !== this.state.children) {
            this.calculateLayout(this.props, this.state).then((wrappedChildren) => {
                if (!this.mounted) {
                    return;
                }
                this.setState({
                    children,
                    wrappedChildren,
                });
            });
        }
    }
}
TagCloud.propTypes = {
    children: PropTypes.any,
    random: PropTypes.func,
    rotate: PropTypes.oneOfType([PropTypes.func, PropTypes.number]),
    spiral: PropTypes.oneOfType([
        PropTypes.oneOf(["archimedean", "rectangular"]),
        PropTypes.func,
    ]),
    style: PropTypes.shape({
        color: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
        fontFamily: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
        fontSize: PropTypes.oneOfType([PropTypes.func, PropTypes.number]),
        fontStyle: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
        fontWeight: PropTypes.oneOfType([
            PropTypes.func,
            PropTypes.number,
            PropTypes.string,
        ]),
        padding: PropTypes.oneOfType([PropTypes.func, PropTypes.number]),
    }),
};
TagCloud.defaultProps = {
    random: Math.random,
    rotate: 0,
    spiral: "archimedean",
    style: {
        fontFamily: "serif",
        fontSize: 20,
        fontStyle: "normal",
        fontWeight: "normal",
        padding: 1,
    },
};
exports.default = TagCloud;
