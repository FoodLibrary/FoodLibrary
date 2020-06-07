import * as PropTypes from "prop-types";
import * as React from "react";
interface ITagCloudProps {
    children: any;
    style: {
        fontFamily?: string | ((word: any, index: number) => string);
        fontStyle?: string | ((word: any, index: number) => string);
        fontWeight?: number | string | ((word: any, index: number) => number | string);
        fontSize?: number | ((word: any, index: number) => number);
        color?: string | ((word: any, index: number) => string);
        padding?: number | ((word: any, index: number) => number);
    };
    rotate?: number | ((word: any, index: number) => number);
    spiral?: "archimedean" | "rectangular" | ((size: number) => (t: number) => [number, number]);
    random?: () => number;
}
interface ITagCloudState {
    width: number;
    height: number;
    children: any;
    wrappedChildren: any;
}
declare class TagCloud extends React.Component<ITagCloudProps, ITagCloudState> {
    static propTypes: {
        children: PropTypes.Requireable<any>;
        random: PropTypes.Requireable<(...args: any[]) => any>;
        rotate: PropTypes.Requireable<number | ((...args: any[]) => any)>;
        spiral: PropTypes.Requireable<string | ((...args: any[]) => any)>;
        style: PropTypes.Requireable<PropTypes.InferProps<{
            color: PropTypes.Requireable<string | ((...args: any[]) => any)>;
            fontFamily: PropTypes.Requireable<string | ((...args: any[]) => any)>;
            fontSize: PropTypes.Requireable<number | ((...args: any[]) => any)>;
            fontStyle: PropTypes.Requireable<string | ((...args: any[]) => any)>;
            fontWeight: PropTypes.Requireable<string | number | ((...args: any[]) => any)>;
            padding: PropTypes.Requireable<number | ((...args: any[]) => any)>;
        }>>;
    };
    static defaultProps: {
        random: () => number;
        rotate: number;
        spiral: string;
        style: {
            fontFamily: string;
            fontSize: number;
            fontStyle: string;
            fontWeight: string;
            padding: number;
        };
    };
    state: {
        children: undefined;
        height: number;
        width: number;
        wrappedChildren: never[];
    };
    private mounted;
    private resizeTimer?;
    private fontFamily;
    private fontSize;
    private fontWeight;
    private fontStyle;
    private padding;
    componentDidMount(): void;
    componentWillUnmount(): void;
    calculateLayout(props: ITagCloudProps, state: ITagCloudState): Promise<any>;
    getStyleValue(propName: "fontFamily" | "fontSize" | "fontWeight" | "fontStyle" | "padding", word: any): any;
    rotate: (word: any) => any;
    text: (word: any) => any;
    render(): JSX.Element;
    onResize: (contentRect: any) => void;
    componentDidUpdate(): void;
}
export default TagCloud;
