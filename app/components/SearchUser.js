import React from 'react';
import GitHubUser from '../services/GitHubUser';

var SearchUser = React.createClass({
	handleSubmit: function(e){
		e.preventDefault();

		GitHubUser.getByUsername(this.refs.username.value).then((response) => {
			this.props.updateUser(response.data);
		});
		GitHubUser.getReposByUsername(this.refs.username.value).then((response) => {
			this.props.updateRepos(response.data);
		});
	},
	render: function(){
		return (
		<div className="jumbotron">
		<h1>Github Info</h1>
			<div className="row">
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label>Username</label>
							<input
							type="text"
							ref="username"
							className="form-control"
							placeholder="ex: gabriel-brito"
						/>
					</div>
					<button
					type="submit"
					className="btn btn-primary">Buscar
					</button>
				</form>
			</div>
		</div>
			)
	}
});

SearchUser.propTypes = {
	updateUser: React.PropTypes.func.isRequired,
	updateRepos: React.PropTypes.func.isRequired,
};

export default SearchUser;