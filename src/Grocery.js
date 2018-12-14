import React from 'react'

class Grocery extends React.Component {
   
    state = { name: 'No Store Yet' }
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
            <div>
                <h1 id="header">{name}</h1>
            <form onSubmit={this.handleSubmit}>
                <input
                value={name}
                name="name"
                onChange={this.handleChange}
                required 
                placeholder="Change name" 
                />
            </form>
            </div>
        )
    }

}
export default Grocery;