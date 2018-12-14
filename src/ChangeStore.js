import React from 'react';

class ChangeStore extends React.Component {
    state = { name: '' }
    handleChange = (e) => {
        this.setState({ name: e.target.value })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ name: "" })
      }
    
    
    render() {
        const { name } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                value={name}
                name="name"
                onChange={this.handleChange}
                required 
                placeholder="Change name" 
                />
            </form>
        )
    }
}

export default ChangeStore;