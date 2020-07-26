import React from "react";
import Card from "./../components/Card";
import { connect } from "react-redux"
import { fetchUsers } from "../store/actions/home";

class Home extends React.Component {
    componentDidMount() {
        this.props.fetchUsers();
    }

    renderUsers = () => {
        return (
            this.props.users.map(user => <Card user={user} key={user.id} />)
        )
    }

    render() {
        const loading = this.props.loading;
        return (
            loading ? (<p className="text-center">Loading...</p>) : (
                <React.Fragment>
                    <h1 className="mb-4">Список пингвинов</h1>
                    {this.renderUsers()}
                </React.Fragment>
            )
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.home.users,
        loading: state.home.loading
    }
}
function mapDispatchToProps(dispatch) {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);