import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

import App from '../App';
import Header from '../Components/Header/Header';

it("renders App component", function () {

    var renderer = ReactTestUtils.createRenderer();

    renderer.render( <App /> );
    var appElement = renderer.getRenderOutput();

    expect(appElement.props.className).toEqual("app");
	expect(appElement.props.children[0].type.displayName).toEqual("Header");
	expect(appElement.props.children[1].type.displayName).toEqual("BodyComponent");
});

it("renders Header component", function () {

    var renderer = ReactTestUtils.createRenderer();

    renderer.render( <Header /> );
    var appElement = renderer.getRenderOutput();

    expect(appElement.props.className).toEqual("header");
	expect(appElement.props.children[0].props.className).toEqual("logoLeft");
	expect(appElement.props.children[1].props.className).toEqual("headerText");
	expect(appElement.props.children[2].props.className).toEqual("logoRight");
});