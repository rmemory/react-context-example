/* eslint-disable react/no-multi-comp, react/jsx-indent-props,
   react/jsx-one-expression-per-line, react/no-unused-state,
   react/no-access-state-in-setstate, react/destructuring-assignment */
import React, { Component, Fragment } from 'react';
import './app.css';
import PropTypes from 'prop-types';

// The context
const MyContext = React.createContext();

/* The provider is where the state lives, and returns the
   context */
class MyProvider extends Component {
	state = {
		name: 'Richard',
		age: 100,
		isOutCycling: true,
	}

	render() {
		const { children } = this.props;
		return (
			<MyContext.Provider
				value={{
					state: this.state,
					incrementAge: () => this.setState({
						age: this.state.age + 1,
					}),
					toggleCycling: () => this.setState({
						isOutCycling: !this.state.isOutCycling,
					}),
				}}
			>
				{ children }
			</MyContext.Provider>
		);
	}
}

MyProvider.propTypes = {
	children: PropTypes.string.isRequired,
};

// The consumer
const Person = () => (
	<div className="person">
		<p>Details on the person: </p>
		<MyContext.Consumer>
			{/* The child element of a consumer must always be a
				function and it must always only return a single
				element. */}
			{context => (
				<Fragment>
					<p>Name: {context.state.name}</p>
					<p>Age: {context.state.age}</p>
					<p>Is he out cycling? {context.state.isOutCycling ? 'Yes' : 'No'}</p>
					<button type="submit" onClick={context.incrementAge}>
						Increment Age
					</button>
					<button type="submit" onClick={context.toggleCycling}>
						Toggle Cycling
					</button>
				</Fragment>
			)}
		</MyContext.Consumer>
	</div>
);

// Note that Family doesn't even use props
const Family = () => (
	<div className="family">
		<Person />
	</div>
);

/* Top level component, note that MyProvider wraps around everything */
const App = () => (
	<MyProvider>
		<div className="App">
			<h1 className="App-header">
				Here is the app
			</h1>
			<Family />
		</div>
	</MyProvider>
);


export default App;
