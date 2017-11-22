import React from 'react';
import favicon from './images/favicon-32x32.png';

let stylesStr;
if (process.env.NODE_ENV === `production`) {
    try {
        stylesStr = require(`!raw-loader!../public/styles.css`);
    } catch (e) {
        console.log(e);
    }
}

module.exports = class HTML extends React.Component {
    render() {
        let css;
        if (process.env.NODE_ENV === `production`) {
            css = (
                <style
                    id="gatsby-inlined-css"
                    dangerouslySetInnerHTML={{ __html: stylesStr }}
                />
            );
        }
        return (
            <html {...this.props.htmlAttributes}>
                <head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, shrink-to-fit=no"
                    />
                    {this.props.headComponents}
                    {css}
                    <link
                        rel="shortcut icon"
                        href={favicon}
                        type="image/x-icon"
                    />
                    <link
                        href="https://unpkg.com/basscss@8.0.2/css/basscss.min.css"
                        rel="stylesheet"
                    />
                    <link
                        href="https://unpkg.com/basscss-responsive-margin@1.1.0/css/responsive-margin.css"
                        rel="stylesheet"
                    />
                    <link
                        href="https://unpkg.com/basscss-responsive-padding@1.1.0/css/responsive-padding.css"
                        rel="stylesheet"
                    />
                    <link
                        href="https://unpkg.com/basscss-responsive-type-scale@1.0.1/css/responsive-type-scale.css"
                        rel="stylesheet"
                    />
                </head>
                <body {...this.props.bodyAttributes}>
                    {this.props.preBodyComponents}
                    <div
                        key={`body`}
                        id="___gatsby"
                        dangerouslySetInnerHTML={{ __html: this.props.body }}
                    />
                    {this.props.postBodyComponents}
                </body>
            </html>
        );
    }
};
