const Person = (props) => {
    <p>Learn some information about this person</p>
    const {callName, age, hobbies} = props
   
    if (props.age > 18 && props.callName.length > 8) 
        return (<div>
        <h3>Please GO VOTE</h3>, {props.callName.slice(0,6)}
                <ul>{hobbies.map( h => <li>{h}</li>)}</ul>
                </div>)
    if (props.age < 18 && props.callName.length > 8)
        return <div><h3>You must be 18</h3>, {props.callName.slice(0,6)}
        <ul>{hobbies.map( h => <li>{h}</li>)}</ul>
        </div>
    


}