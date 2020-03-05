import React from 'react';
import {BrokenLink} from 'components/vectors';
import {NavLink} from 'react-router-dom';


const PageNotFound = () => (
	<div className="row" style={{marginTop: 200}}>
		<div className="d-flex flex-column justify-items-center align-items-center mx-auto">
			<BrokenLink />
			<h3 className="text--md text--black mt-5">Ooops!, Page not found</h3>
			<p className="text--small-light text--grey text-center my-2">
        We can't seem to find the page you are looking for
			</p>
			<NavLink to="/">
				<div className="button button--orange px-4  mt-3">BACK TO HOMEPAGE</div>
			</NavLink>
		</div>
	</div>
);

export default PageNotFound;