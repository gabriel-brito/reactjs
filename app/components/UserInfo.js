var React = require('react');
var UserRepos = require('./UserRepos');

const UserInfo = ({user, repos}) => {
	var userinfo =user ?
	(
		<div className="row">
			<div className="col-lg-4">
				<img className="img-circle" src={user.avatar_url} alt="avatar" width="140" height="140"/>
				<h2>{user.login}</h2>
				<p>{user.name}</p>
				<p>Followers: {user.followers} / Following: {user.following}</p>
				<p><a className="btn btn-default" href="{user.html_url}" role="button">View Details</a></p>
			</div>
			<div className="col-lg-8">
				<UserRepos 
				repos={repos}
				/>
			</div>
		</div>
	) : null;

	return userinfo;
};

UserInfo.propTypes = {
	user: React.PropTypes.object,
	repos: React.PropTypes.array,
};		

module.exports = UserInfo;