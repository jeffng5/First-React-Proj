const App = () => (
    <div>
        <Tweet user="Jeff" username= "Monster" dateOfTweet= '12/11/23'/>
        <Tweet user="Simon" username= "TaxiDriver" dateOfTweet= '12/11/23'/>
        <Tweet user="Paul" username= "Godzilla" dateOfTweet= '12/11/23'/>
    </div>
    )
    ReactDOM.render(<App/>, document.getElementById("root"));