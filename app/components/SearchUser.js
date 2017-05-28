var React = require('react');
var GitHubUser = require('../services/GitHubUser');

var SearchUser = React.createClass({
	handleSubmit: function(e){
		e.preventDefault();
		var self = this;
		GitHubUser.getByUsername(this.refs.username.value).then(function(response){
			self.props.updateUser(response.data);
		});
		GitHubUser.getReposByUsername(this.refs.username.value).then(function(response){
			self.props.updateRepos(response.data);
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

module.exports = SearchUser;